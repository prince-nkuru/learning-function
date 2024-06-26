/*Task
There're k square apple boxes full of apples. If a box is of size m, then it contains m × m apples. You noticed two interesting properties about the boxes:

The smallest box is of size 1, 
the next one is of size 2,..., 
all the way up to size k.

Boxes that have an odd size contain only yellow apples. 
Boxes that have an even size contain only red apples.
Your task is to calculate the difference between the number of red apples and the number of yellow apples.

Example
For k = 5, the output should be -15

There are 1 + 3 × 3 + 5 × 5 = 35 yellow apples and 2 × 2 + 4 × 4 = 20 red apples, thus the answer is 20 - 35 = -15.

Input/Output
[input] integer k

A positive integer.

Constraints: 1 ≤ k ≤ 40

[output] an integer

The difference between the two types of apples.*/

function appleBoxes(k) {
  var result = 0;
  for (let i = 1; i <= k; i++) result += i * i * (i % 2 ? -1 : 1);
  return result;
}

// second 
function appleBoxes(k) {
  let evenArr = [];
  let oddArr = [];
    if(k >= 1 && k <= 40){
      for (let i =0; i <= k; i++){
        if (i % 2 === 0){
          evenArr.push( i * i)
        }else if (i % 2 != 0) {
          oddArr.push(i * i)
        }
      }
    }
    return evenArr.reduce((acc, curr) => {return acc + curr}, 0) - oddArr.reduce((acc, curr) => {return acc + curr}, 0)
    
  }

  // third solution

  function appleBoxes(k) {
    let redApples = 0;
    let yellowApples = 0;
  
    for(let i = 0; i <= k; i++) {
      i % 2 === 0 ? redApples += i ** 2 : yellowApples += i ** 2
    }
  
    return redApples - yellowApples;
    
  }