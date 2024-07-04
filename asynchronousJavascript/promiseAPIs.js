 //////////// for promise.all: fail first is returned. but if all succed, it return arr of all success

const p1 = new Promise((resolve,reject) => {
  // setTimeout(() => resolve('p1 success'), 3000)
  setTimeout(() => reject('p1 fail'), 3000)
})

const p2 = new Promise((resolve,reject) => {
  // setTimeout(() => resolve('p2 success'), 2000)
  setTimeout(() => reject('p2 fail'), 2000)
})

const p3 = new Promise((resolve,reject) => {
  // setTimeout(() => resolve('p3 success'), 1000)
  setTimeout(() => reject('p3 fail'), 1000)
})

Promise.all([p1,p2,p3])
.then((res) =>{
  console.log(res)
})
.catch((err) => {
  console.error(err)     // error keyword makes it look like error
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////


//////     Promise.allSettled. SAFEST AMONG ALL. WAIT FOR ALL RESULT WEATHER RESOLVED OR REJECTED AND DISPLAY ARRAY.


const p4 = new Promise((resolve,reject) => {
  // setTimeout(() => resolve('p1 success'), 3000)
  setTimeout(() => reject('p1 fail'), 3000)
})

const p5 = new Promise((resolve,reject) => {
  // setTimeout(() => resolve('p2 success'), 2000)
  setTimeout(() => reject('p2 fail'), 2000)
})

const p6 = new Promise((resolve,reject) => {
  // setTimeout(() => resolve('p3 success'), 1000)
  setTimeout(() => reject('p3 fail'), 1000)
})

Promise.any([p4,p5,p6])
.then((res) =>{
  console.log(res)
})
.catch((err) => {
  console.error(err)     // error keyword makes it look like error
 //console.log(err.errors) this is to display all errors in object when in console.
})

/////////////////////// promise.race return the fast *settled* promise, weather rejected or not. the one with shorter time is returned


/////////////////////// promise.any will wait for first settled resolved. if all fail, it will display aggragate error: all fail



