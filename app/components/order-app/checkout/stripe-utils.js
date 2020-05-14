import { toJS } from 'mobx';
import OrderStore from '../stores/order-store';
import { formatGooglePlacesObj } from '../stores/order-utils';
import { convert24HourTo12Format, extendedDateFormat } from '../stores/date-utils';
import { loadStripe } from '@stripe/stripe-js';

const serializeOrderStore = (orderStore) => {
  const baseObj = toJS(orderStore);
  baseObj.shoppingCart = baseObj.shoppingCart.map((item, index) => {
    item.total = orderStore.shoppingCart[index].total;
    return item;
  });
  baseObj.tax = orderStore.tax;

  baseObj.fulfillmentTime = convert24HourTo12Format(orderStore.dateStore.fulfillmentTime);
  baseObj.fulfillmentDate = extendedDateFormat(orderStore.dateStore.fulfillmentDate);

  if (orderStore.fulfillmentOption === 'delivery') {
    baseObj.deliveryLocation = formatGooglePlacesObj(baseObj.deliveryLocation);
    baseObj.deliveryFee = orderStore.deliveryFee;
    baseObj.numberOfGuests = orderStore.numberOfGuests;
  }
  return baseObj;
};

export default async function handleCheckoutRequest(showSpinner, showError) {
  showSpinner(true);
  try {
    const res = await fetch(
      // "http://localhost:5000/the-meatball-stoppe/us-central1/function/stripe/order",
      'https://us-central1-the-meatball-stoppe.cloudfunctions.net/function/stripe/order',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(serializeOrderStore(OrderStore)),
      },
    );
    const jsonResponse = await res.json();
    if (!res.ok) {
      throw Error(`Error from Firebase Func: ${jsonResponse.error}`);
    }
    // const stripe = await loadStripe('pk_live_ivfkFrzhLuZbUiZRVkvsBwI3');
    const stripe = await loadStripe('pk_test_OaDvLsgEGQbshVWpSFMQMm1k');
    const result = await stripe.redirectToCheckout({
      sessionId: jsonResponse.id,
    });

    if (result.error.message) {
      throw new Error(result.error.message);
    }
  } catch (e) {
    showSpinner(false);
    showError(true);
    console.log(e);
  }
}
