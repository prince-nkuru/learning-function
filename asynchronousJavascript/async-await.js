// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

// The keyword async before a function makes the function return a promise:
/// await is only used inside async function

async function myFunctions (){
  return 'hello'
}
//same as

function myFunctions(){
  return Promise.resolve('hello');
}

// example of how to use async

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// async function myFunction() {return "Hello";}

// myFunction().then(
//   function(value) {myDisplayer(value);},
//   function(error) {myDisplayer(error);} // remove this line if you dont expect an error.
// );

  const p = new Promise((resolve,reject) => {
    resolve('promise is returned')
  })

  // how to handle this promise using async and await
  
  async function handlePromise(){
    const val = await p;
    console.log(val)
  }

  handlePromise();