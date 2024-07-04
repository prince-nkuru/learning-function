const p1 = new Promise((resolve,reject) => {
  setTimeout(() => resolve('p1 success'), 3000)
})

const p2 = new Promise((resolve,reject) => {
  setTimeout(() => resolve('p2 success'), 2000)
})

const p3 = new Promise((resolve,reject) => {
  setTimeout(() => resolve('p3 success'), 1000)
})