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
///////////////////////////////////////////////////////////////////////////////////////////////////////////

  const p = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('promise is returned')
    }, 10000)
   
  })

  // how to handle this promise using async and await
  
  async function handlePromise(){
    //js engine will wait for val to get value of p , then it will exucutes next lines
    const val = await p;
    console.log('namaste javascript');
    console.log(val)
  }

  handlePromise();


  /// REAL WORLD EXAMPLE

  const API_URL = 'https://www.youtube.com/watch?v=6nv3qy3oNkc&t=140s'

  async function handleURL(){
    try{
      const data = await fetch(API_URL);    // fetch return promise object, so we handle it by await. if we want
      const value = await data.json();      // to stringfy(json) it also return promise.
      console.log(value);
    }
    catch (err){
      console.log(err)
    }
   
  }

  handleURL();