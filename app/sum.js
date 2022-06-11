export const numbers = [3, 6, 65, 75, 74, 12, 35, 10];

export const sum = function (integers) {
  return integers.reduce((acc, el) => acc + el, 0);
};
