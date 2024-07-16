const sum = (array) => {
  if (array.length === 0) return 0;
const rest = array.slice(1);
  return  array[0] + sum(rest);
}

console.log(sum([2,4,6,7]));