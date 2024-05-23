//convert a 2 dimensional array of key value pairs into an object

const keyValuePairs = [
  ['username', 'dcode'],
  ['memberSince', '2024-04-04'],
  ['age', 25]
]
  
const result = keyValuePairs.reduce((p, keyValuePair) => {
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  p[key] = value;

  return p;
}, {})
console.log(result);
