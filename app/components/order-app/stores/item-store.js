import { computed, observable } from 'mobx';

function countChoices(choices, type) {
  return Object.values(choices).filter((choicesArr) => choicesArr.filter((choice) => choice[type]).length).length;
}

function additionsFulfilled(choices, additionsRequired) {
  return Object.entries(additionsRequired).every(([optionName, minimumRequired]) => {
    return choices[optionName] && choices[optionName].length >= minimumRequired;
  });
}

class ItemStore {
  @observable dishName;
  @observable basePrice;
  @observable choices = {};
  @observable selectionsRequired = 0;
  @observable additionsRequired = {};

  @computed
  get total() {
    const extraCosts = Object.values(this.choices)
      .flat()
      .filter((choice) => choice.extra)
      .reduce((acc, curr) => acc + curr.extra, 0);
    return this.basePrice + extraCosts;
  }

  @computed
  get readyForCart() {
    return (
      this.selectionsRequired === countChoices(this.choices, 'selection') &&
      additionsFulfilled(this.choices, this.additionsRequired)
    );
  }
}

export default ItemStore;
