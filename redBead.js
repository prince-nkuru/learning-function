function countRedBeads(n) {
  return n < 2 ? 0 : 2 * n - 2;
}

console.log(countRedBeads(20));