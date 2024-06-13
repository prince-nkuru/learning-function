let arr = [1,3,4,5,6,-9,-10,7];
let maped = arr.filter(s => s >= 0).map(n => ({value: n}));
console.log(maped);