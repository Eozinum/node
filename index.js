import { sum, numbers } from './app/sum.js';
import { getPrice, prices } from './app/getPrice.js';
import { films, titles } from './app/films.js';

console.log(sum(numbers));
console.log('--------------');
console.log(getPrice(prices));
console.log('--------------');
films(titles);
