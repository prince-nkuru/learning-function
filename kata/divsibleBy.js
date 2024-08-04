/*DESCRIPTION:
Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

The booleans should always start with false becase there is no digit before the first one.

Examples
73312        => [false, false, true, false, true].
2026         => [false, true, false, true]
635          => [false, false, false]
*** Remember 0 is evenly divisible by all integers but not the other way around ****/

// first solution 

const divisibleByLast = n => {
  return n.toString().split('').map((el, ind, arr) => el % arr[ind - 1] === 0);
}

// second solution

function divisibleByLast(n) {
  n = String(n);
  var result = [false];
  
  for (var i = 1; i < n.length; i++) {
    result.push(n[i] % n[i - 1] === 0);
  }
  
  return result;
}

// third

const divisibleByLast = (x) => {
  let arr = [...x+[]]
  return [false].concat(arr.slice(1).map((el, i)=> el % arr[i] === 0))
}

////////////////////////////////////////////////////////////   

// function to extract unique character in a string 

const getUniqueChar = (str) =>{
  return str.split('').filter((item, index, arr) =>arr.slice(index + 1).indexOf(item) === -1)
}

///////////////////////////////////////////////////////////////////////////////

//javascript function to compare if 2 objects have the same properties. second may includes additional properties
const ob1 = {a:1, b:3, c: 5};
const ob2 = {a:1, b:3,c:5}
const isEqual = (a, b) => {
  return Object.keys(a).every(key => b[a]);
}
console.log(isEqual(ob1, ob2))

//////////////////////////////////////////////////////////////////////////

// convert comma separated string into 2D array. strings are in 3 lines

const parseCsv = (string) => {
  return string.split('\n').map(row => row.split(','));
  }
  console.log(
   parseCsv(`abc,def,ghi
 jkl,mno,pqr
 stu,vxw, yza`
   ))
