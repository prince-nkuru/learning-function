



function findOdd(A) {
  return A.find((number) => A.filter((n) => number === n).length % 2)
}
// second way

function findOdd(arr) {
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}


 // third way

 function findOdd(A) {
  for(var i = 0; i < A.length; i++){  
    //Query the number of times that this 'i' element appears
    //then verify if that number of times is odd. If it is true, then return
    //that 'i' element
    if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
      return A[i];
    }
  }
  return 0;
}

  // fourth way

  function findOdd(A) {
    var countOccurencesOfInt = 0;
    for (let i = 0; i < A.length; i++) {
        var currentIterationInt = A[i];
        for (let j = 0; j < A.length; j++) {
            if (currentIterationInt == A[j]) {
                countOccurencesOfInt++;
            }
        }
        if (countOccurencesOfInt % 2 != 0) {
            return currentIterationInt;
        }
    }
}