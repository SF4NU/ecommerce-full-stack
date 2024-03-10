export const newPrice = (number1, number2) => {
  let result = 0;
  result = Math.round(number1 - number1 * (number2 / 100));
  return result;
};
