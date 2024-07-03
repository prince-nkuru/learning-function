// DESCRIPTION:
// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

function sumNoDuplicates(numList) {
  let sum = 0;
  for (let i = 0; i < numList.length; i++){
    if (numList.indexOf(numList[i]) === numList.lastIndexOf(numList[i]) ) {
      sum += numList[i]
    }
  }
 return sum;
}