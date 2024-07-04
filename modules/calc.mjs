console.log('working')

import pkg from './main.mjs';
const {sum, sub} = pkg;

console.log(sum(2,5));
console.log(sub(8,3));