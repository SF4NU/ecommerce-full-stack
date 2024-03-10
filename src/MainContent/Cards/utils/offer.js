export const offer = (number) => {
  let result = 0;
  if (number <= 10000) {
    result = Math.floor(number / 1200 + 20);
    return result;
  } else if (number <= 100000) {
    result = Math.floor(number / 4500 + 15);
    return result;
  } else {
    result = Math.floor(number / 25000 + 25);
    return result;
  }
};
