/*DESCRIPTION:
Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.*/

// first sol

function toNumberArray(stringarray){
  
  return stringarray.map(n => parseFloat(n));
}

// second sol

function toNumberArray(stringarray){
  return stringarray.map(e => +e);
}

// third sol

function toNumberArray(str){
  let arr = [];
  for(let i = 0; i < str.length; i++){
    arr.push(+str[i]);
  }
  return arr;
}
// fourth sol

