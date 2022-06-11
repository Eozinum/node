export const prices = [{ price: 3.5431 }, { price: 12.6123 }, { price: 0.3123 }, { price: 1.312 }];

export const getPrice = function (el) {
  const sum = el.reduce((acc, number) => acc + number.price, 0);
  return `$${sum.toFixed(2)}`;
};
