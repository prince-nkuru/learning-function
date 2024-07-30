function snail(array) {
  let result = [];
  
  while (array.length) {
      console.log("Array at start of loop:", JSON.stringify(array));
      
      // Extract the first row
      let firstRow = array.shift();
      console.log("Extracted first row:", firstRow);
      result = result.concat(firstRow);
      console.log("Result after adding first row:", result);

      // Extract the right column
      for (let i = 0; i < array.length; i++) {
          if (array[i].length) {
              let rightCol = array[i].pop();
              console.log("Extracted right column element:", rightCol);
              result.push(rightCol);
          }
      }
      console.log("Result after adding right column:", result);
      
      // Extract the bottom row (in reverse)
      if (array.length) {
          let bottomRow = array.pop().reverse();
          console.log("Extracted bottom row:", bottomRow);
          result = result.concat(bottomRow);
      }
      console.log("Result after adding bottom row:", result);
      
      // Extract the left column (in reverse)
      for (let i = array.length - 1; i >= 0; i--) {
          if (array[i].length) {
              let leftCol = array[i].shift();
              console.log("Extracted left column element:", leftCol);
              result.push(leftCol);
          }
      }
      console.log("Result after adding left column:", result);
  }
  
  return result;
}

// Test cases
let array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let array2 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];

console.log("Final result for array1:", snail(array1));  // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log("Final result for array2:", snail(array2));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
