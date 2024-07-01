// "Producing code" is code that can take some time

// "Consuming code" is code that must wait for the result

// A Promise is an Object that links Producing code and Consuming code

let myPromise = new Promise(function(myResolve, myReject){
// producing code (may take sometime)

  myResolve(); // when successful
  myReject(); // when failed
})

myPromise.then(
  function(value){/*if code is successful*/},
  function(error){/*if code is rejected*/}
)