import { computed, observable, reaction } from 'mobx';
import { distanceFromTMS } from './order-utils';
import addZero from '../../../utilities/add-zero';
import DateStore from './date-store';

class OrderStore {
  constructor() {
    this.dateStore = new DateStore();
    reaction(
      () => this.deliveryLocation,
      (googlePlacesObj) => this.handleDeliverLocationUpdate(googlePlacesObj),
    );
    reaction(
      () => this.fulfillmentOption,
      () => {
        if (this.dateStore.fulfillmentTime) this.dateStore.validateTime();
      },
    );
  }

  @observable orderType;
  @observable activeTab;
  @observable fulfillmentOption;

  @observable _validatedNumberOfGuests = 0;
  @computed get numberOfGuests() {
    return this._validatedNumberOfGuests;
  }
  set numberOfGuests(num) {
    if (num > 0) {
      this._validatedNumberOfGuests = num;
    }
  }

  @observable contactName;
  @observable contactNumber;
  @observable specialInstructions;
  @observable shoppingCart = [];
  @observable tip = 0;

  @computed get tipPercent() {
    return ((this.tip / Number(this.subTotal)) * 100).toFixed();
  }

  @computed get subTotal() {
    return addZero(this.shoppingCart.reduce((acc, item) => acc + item.total, 0).toFixed(2));
  }

  @computed get tax() {
    return addZero((Number(this.subTotal) * 0.07).toFixed(2));
  }

  @observable deliveryLocation; // Google Places obj
  @observable _deliveryMiles;
  @observable _loadingMiles = false;
  @observable _errorFromGoogle = false;

  handleDeliverLocationUpdate(googlePlacesObj) {
    this._loadingMiles = true;
    distanceFromTMS(googlePlacesObj)
      .then((miles) => {
        this._deliveryMiles = miles;
        this._loadingMiles = false;
      })
      .catch((e) => {
        console.log(e);
        this._loadingMiles = false;
        this._errorFromGoogle = true;
      });
  }

  @computed get deliveryFee() {
    if (this._loadingMiles) {
      return 'Calculating cost ⌛';
    }

    if (!this.deliveryLocation) {
      return 'Select delivery location';
    }

    if (this._errorFromGoogle) {
      return '🚫 error with Google Maps';
    }

    if (this._deliveryMiles < 10) {
      if (Number(this.subTotal) >= 150) {
        return 20;
      } else {
        return '⚠️ Minimum cart total for this distance is $150';
      }
    } else if (this._deliveryMiles < 15) {
      if (Number(this.subTotal) >= 175) {
        return 25;
      } else {
        return '⚠️ Minimum cart total for this distance is $175';
      }
    } else if (this._deliveryMiles < 21) {
      if (Number(this.subTotal) >= 200) {
        return 40;
      } else {
        return '⚠️ Minimum cart total for this distance is $200';
      }
    } else {
      return 'Distance beyond 20 miles. Call 📞 the Meatball Stoppe to place order.';
    }
  }

  @computed get grandTotal() {
    let total = Number(this.subTotal) + Number(this.tip) + Number(this.tax);
    if (this.fulfillmentOption === 'delivery' && typeof this.deliveryFee === 'number') {
      total += this.deliveryFee;
    }
    return addZero(total.toFixed(2));
  }

  @computed get inputFieldsReady() {
    const baseQualificationsSatisfied =
      Boolean(this.contactName) &&
      Boolean(this.contactNumber) &&
      Boolean(this.dateStore.fulfillmentDate) &&
      !this.dateStore.fulfillmentDateError &&
      Boolean(this.dateStore.fulfillmentTime) &&
      !this.dateStore.fulfillmentTimeError;
    if (this.orderType === 'normal' || (this.orderType === 'catering' && this.fulfillmentOption === 'pickup')) {
      return baseQualificationsSatisfied;
    } else {
      return (
        baseQualificationsSatisfied &&
        Boolean(this.deliveryLocation) &&
        typeof this.deliveryFee === 'number' &&
        Number(this.numberOfGuests) > 0
      );
    }
  }
}

export default new OrderStore();
