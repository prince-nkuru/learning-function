function createTwoSetsOfEqualSum(n) {
  // If the sum of all numbers from 1 to n are odd, return an empty array.
  if ((n * (n+1) / 2) % 2 !== 0) return []
  
  // Initializing the result arrays
  let [arr1, arr2] = [[], []];
  
  // Tracking the sum of each array
  let sum1 = 0;
  let sum2 = 0;

  // Iterating the loop in reverse to start with the largest values
  for (let i = n; i > 0; i--) {
    // If sum1 is less than or equal to sum2
    if (sum1 <= sum2) {
      // Push the value to arr1
      arr1.push(i);
      // and increment the value of sum1
      sum1 += i;
    } else {
      // Push the value to arr2
      arr2.push(i);
      // and increment the value of sum2
      sum2 += i;
    }
  }
  // or return the array if the values are equal
  return [arr1, arr2];
}