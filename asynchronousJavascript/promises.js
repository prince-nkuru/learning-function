// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is an Object that links Producing code and Consuming code

// let myPromise = new Promise(function(myResolve, myReject){
// // producing code (may take sometime)

//   myResolve(); // when successful
//   myReject(); // when failed
// })

// myPromise.then(
//   function(value){/*if code is successful*/},
//   function(error){/*if code is rejected*/}
// )

// example of promises

// function myDisplayer(some){
//   document.getElementById('demo') = some;
// }
// let myPromise = new Promise(function(myResolve, myReject){
//   let x = 0;

//   if (x == 0){
//     myResolve('OK')
//   }else {
//     myReject('error')
//   }
// })
// myPromise.then(
//   function(value){myDisplayer(value)},
//   function(error){myDisplayer(error)}
  
// )

// real example

// const myPromises = new Promise(function(myResolve, myReject) {
//   setTimeout(function(){ myResolve("I love You !!"); }, 3000);
// });

// myPromises.then(function(value) {
//   document.getElementById("demo").innerHTML = value;
// });


/////////////////////////////////////////////////////////////////////////////////////////

// const cart = ['shoes', 'pants', 'watch'];

// addToCart(cart, function(orderId){
//   proceedToPayment(orderId, function(paymentInfo){                   // this is called callbackhell
//     showOrderSummary(paymentInfo,function(){
//       updateWalletBalance()
//     })
//   })
// })

/////////////////////////////////////////////////////////////////////

// correct way using promise
const cart = ['shoes', 'pants', 'watch'];

// addToCart(cart)
// .then(orderId => proceedToPayment(orderId))
// .then(paymentInfo =>showOrderSummary(paymentInfo))
// .then(paymentInfo => updateWallet(paymentInfo))

// how to create promise. from namaste javascript

function createCart(cart){
  const pr = new Promise(function(resolve,reject){
        if (!validateCart(cart)){
          const err = new Error('cart is not validated');
          reject(err);
        }
        //logic for create order
        const orderId = '12344'
        if (orderId){
          resolve(orderId)
        }
  });

console.log(pr)

  return pr
}

function validateCart(cart){
  return true;
}
