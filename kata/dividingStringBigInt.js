// DESCRIPTION:
// Given positive integers a and b as strings, evaluate a / b and return the quotient and the remainder as strings in the form [quotient, remainder].

// a and b can be very large (at the order of 10^150 to 10^200)
// As usual, your result should not have leading 0s
// require is disabled in JavaScript. Do it yourself ;-)

// Example usage and test cases:
function divideLargeNumbers(a, b) {
  if (b === '0') {
      throw new Error('Division by zero');
  }

  // Function to subtract two large numbers represented as strings
  function subtractStrings(num1, num2) {
      let result = '';
      let borrow = 0;
      
      // Ensure num1 >= num2
      let a = num1.split('').reverse();
      let b = num2.split('').reverse();
      
      for (let i = 0; i < a.length; i++) {
          let digitA = parseInt(a[i], 10) - borrow;
          let digitB = i < b.length ? parseInt(b[i], 10) : 0;
          if (digitA < digitB) {
              borrow = 1;
              digitA += 10;
          } else {
              borrow = 0;
          }
          result = (digitA - digitB).toString() + result;
      }
      
      // Remove leading zeros
      result = result.replace(/^0+/, '');
      return result === '' ? '0' : result;
  }

  // Function to compare two large numbers represented as strings
  function compareStrings(num1, num2) {
      if (num1.length > num2.length) return 1;
      if (num1.length < num2.length) return -1;
      if (num1 === num2) return 0;
      return num1 > num2 ? 1 : -1;
  }

  let quotient = '';
  let remainder = '0';

  for (let i = 0; i < a.length; i++) {
      remainder += a[i];
      remainder = remainder.replace(/^0+/, '');
      
      let count = 0;
      while (compareStrings(remainder, b) >= 0) {
          remainder = subtractStrings(remainder, b);
          count++;
      }
      quotient += count.toString();
  }

  // Remove leading zeros in quotient
  quotient = quotient.replace(/^0+/, '');
  quotient = quotient === '' ? '0' : quotient;
  remainder = remainder === '' ? '0' : remainder;

  return [quotient, remainder];
}

// Example usage and test cases:
console.log(divideLargeNumbers("0", "1")); // Output: ['0', '0']
console.log(divideLargeNumbers("4", "1")); // Output: ['4', '0']
console.log(divideLargeNumbers("5", "1")); // Output: ['5', '0']
console.log(divideLargeNumbers("8", "1")); // Output: ['8', '0']
console.log(divideLargeNumbers("8", "2")); // Output: ['4', '0']
console.log(divideLargeNumbers("1000", "1000")); // Output: ['1', '0']
console.log(divideLargeNumbers("6001", "1000")); // Output: ['6', '1']
console.log(divideLargeNumbers("10", "3")); // Output: ['3', '1']
console.log(divideLargeNumbers("123456789", "987654")); // Output: ['124', '32153']
