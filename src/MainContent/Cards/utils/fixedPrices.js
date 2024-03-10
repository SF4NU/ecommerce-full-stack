export const fixedPrices = (number) => {
  let result = 0;
  if (number <= 10000) {
    result = Math.floor(number / 2000 + 30);
    return result;
  } else if (number <= 100000) {
    result = Math.floor(number / 5000 + 40);
    return result;
  } else {
    result = Math.floor(number / 20000 + 20);
    return result;
  }
};
