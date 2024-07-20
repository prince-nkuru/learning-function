// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"
function checkThreeAndTwo(array) {
  let as = array.filter(x =>x === 'a').length;
  let bs = array.filter(x =>x === 'b').length;
  let cs = array.filter(x =>x === 'c').length;
  return (as === 3 || bs === 3 || cs=== 3)  
          && (as === 2 || bs === 2 || cs === 2);
}

////////////////////////////////////////////////

function checkThreeAndTwo(array) {
  var item1 = 0, item2 = 0, item3 = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'a') {
      item1++;
    } else if (array[i] === 'b') {
      item2++;
    } else if (array[i] === 'c') {
      item3++;
    }
  }
  return (item1 == 2 || item2 == 2 || item3 == 2) && (item1 == 3 || item2 == 3 || item3 == 3);
}

///////////////////////////////////////////////////

function checkThreeAndTwo(array) {
  // Create an object to count the occurrences of each character
  const counts = { 'a': 0, 'b': 0, 'c': 0 };

  // Count the occurrences of each character
  for (let char of array) {
      counts[char]++;
  }

  // Check if we have one value with 3 occurrences and another with 2 occurrences
  return Object.values(counts).sort().join('') === '023';
}

// Examples
console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])); // true
console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"])); // false
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"])); // false


//////////////////////////////////////////////////////////////////////////

function checkThreeAndTwo(arr) {
  let res = [];
  res.push(arr.filter(x => x === 'a').length)
  res.push(arr.filter(x => x === 'b').length)
  res.push(arr.filter(x => x === 'c').length)
  return res.includes(2) && res.includes(3);
}

////////////////////////////////////////////////////////////////////////////////

const checkThreeAndTwo = array =>
  [2, 3].includes(array.filter(val => val === array[0]).length) && new Set(array).size === 2;

///////////////////////////////////////////////////////////////////////////////////////////

function checkThreeAndTwo(array) {
  let t = {a:0, b:0, c:0}
  let a = array.map(x => t[x]++)
  let y = Object.values(t)
  return y.includes(3) && y.includes(2)
}
///////////////////////////////////////////////////////////////////////////////////////

function checkThreeAndTwo(array) {
  let i, counts = {"a": 0, "b": 0, "c": 0}
  for (i = 0; i < 5; i++)
    counts[array[i]]++;
  return counts["a"] ** 2 + counts["b"] ** 2 + counts["c"] ** 2 == 13;
}
/////////////////////////////////////////////////////////////////////

function checkThreeAndTwo(array) {
  let countA = 0;
  let countB = 0;
  let countC = 0;
  for (let i = 0; i < array.length; i++){
  if(array[i] == "a") countA++
  if(array[i] == "b") countB++
  if(array[i] == "c") countC++
  }
  return [countA,countB,countC].includes(3) && [countA,countB,countC].includes(2) ? true : false
 }

 ////////////////////////////////////////////////////////////////////////////////////////////////

 const checkThreeAndTwo = array => {
  const obj = {};
  array.forEach(el => {
      obj[el] ? obj[el]++ : obj[el] = 1;
  });
  return Object.keys(obj).length == 2 && (Object.values(obj)[0] == 2 || Object.values(obj)[0] == 3);
}