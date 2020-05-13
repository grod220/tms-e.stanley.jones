export default (price) => {
  const halfsArr = price.toString().split('.');
  if (halfsArr.length > 1 && halfsArr[1].length < 2) {
    return `${price.toString()}0`;
  }
  return price;
};
