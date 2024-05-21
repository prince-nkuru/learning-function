const sumOfN = n => {
  const arr = []
  let sum = 0

  if (n > 0) {
    for (let i = 0; i <= n; i++) {
      sum += i
      arr.push(sum)
    }
  } else {
    for (let i = 0; i >= n; i--) {
      sum += i
      arr.push(sum)
    }
  }

  return arr
}