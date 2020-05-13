import { observable, decorate, computed } from "mobx";

function countChoices(choices, type) {
  return Object.values(choices).filter(
    choicesArr => choicesArr.filter(choice => choice[type]).length
  ).length;
}

function additionsFulfilled(choices, additionsRequired) {
  return Object.entries(additionsRequired).every(
    ([optionName, minimumRequired]) => {
      return (
        choices[optionName] && choices[optionName].length >= minimumRequired
      );
    }
  );
}

class ItemStore {
  dishName;
  basePrice;
  choices = {};
  selectionsRequired = 0;
  additionsRequired = {};

  get total() {
    const extraCosts = Object.values(this.choices)
      .flat()
      .filter(choice => choice.extra)
      .reduce((acc, curr) => acc + curr.extra, 0);
    return this.basePrice + extraCosts;
  }

  get readyForCart() {
    return (
      this.selectionsRequired === countChoices(this.choices, "selection") &&
      additionsFulfilled(this.choices, this.additionsRequired)
    );
  }
}

decorate(ItemStore, {
  dishName: observable,
  selectionsRequired: observable,
  additionsRequired: observable,
  total: computed,
  readyForCart: computed,
  choices: observable
});

export default ItemStore;
