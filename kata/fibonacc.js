// You will be given a function, isFibo, which will take three arguments: a, b and f.

// a is the first term of a Fibonacci sequence, b is the second term of this sequence ( it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking ) and f is a number which you'll need to check whether or not is a part of this Fibonacci sequence.

// Good luck, muh fellow coding warrior.
function isFibo(a,b,f) {
  while (a < f) {
    const t = a;
    a = b;
    b = t + b;
  }
  return a == f;
}
/////////////////////////////////////////////////

function isFibo(a,b,f) {
  if (f === a || f === b) return true;
  let fib1 = a;
  let fib2 = b;
  let nextFib = fib1 + fib2;
  
  // Generate the sequence until we surpass or match f
  while (nextFib <= f) {
    if (nextFib === f) return true; // Check if f is part of the sequence
    fib1 = fib2;        // Update first number
    fib2 = nextFib;     // Update second number
    nextFib = fib1 + fib2;  // Generate next number in the sequence
  }
  
  return false;
}