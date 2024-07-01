// function myDisplyer(something){
//   document.getElementById('').innerHTML = something;
// }

// function calculate(num1, num2, myCallBack){
//   let sum = num1 + num2;
//   myCallBack(sum);
// }

// calculate(5,5, myDisplyer)

// In the real world, callbacks are most often used with asynchronous functions. typical example is setTimeout.

setTimeout(myFunction,3000);

function myFunction(){
  console.log('i love you');
}

// When you pass a function as an argument, remember not to use parenthesis.

// setInterval

setInterval(myFunc,1000);
let result = '';
function myFunc(){
  let times = new Date();
 return result = times.getHours() + ' : ' +
  times.getMinutes()+ ' : ' +
  times.getMilliseconds()
}
console.log(result);