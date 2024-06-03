function differenceOfSquares(n) {
  if (n >= 1 && n <= 100){
    let sum = 0;
  let square = 0;
  for (let i = 0; i <= n; i++){
    sum += i
    square += (i ** 2)
  }
    return (sum ** 2) - square;
  }
}