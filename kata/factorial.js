function factorialDivision(n, d) {
  let result = 1n
  for (let i = n; i > d; i--) {
    result *= i
  }
  return result
}