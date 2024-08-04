/*Description:
Your task is to write a function that takes two integers n, m and returns a sorted array of all integers from n to m inclusive, which have only 3 divisors (1 and the number itself excluded).

Example:
solution(2, 20) -> [16]
16 has 3 divisors: 2, 4, 8 (1 and 16 aren't included)

Input:
n - integer (2 ≤ n ≤ 10^10)
m - integer (20 ≤ m ≤ 10^18)
NOTE: In Rust, the bounds are (2 ≤ n ≤ 2^51), (20 ≤ m ≤ 2^52).

Output:
result - array of integers*/

let possibleNumbers = []

function solution(n, m) {
  if (!possibleNumbers.length) {
    for (let i = 2n; i <= 31622n; i++) {
      if(isPrime(i)) possibleNumbers.push(i**4n)
    }
  }
  
  return possibleNumbers.filter(number => number >= n && number <= m);
}

function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

/////////////////////////////////////////////////////////////

let numbers = []
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
} 

function solution(n, m) {
  if (!numbers.length) {
    for (let i = 2n; i <= 31622n; i++) {
      if(isPrime(i)) numbers.push(i**4n)
    }
  }
  
  return numbers.filter(number => number >= n && number <= m);
}

const vowel = (str) => {
  let count = 0;
  let res = str.split('').filter(s => s === 'a' || s === 'o' || s === 'u' || s === 'i' || s === 'e' ).length
  console.log(res);
  return count
}
vowel('abacdesfoiuu')
// write a function that convert amount into coins

const coins = (n) =>{
  let coinValues = [25,10,5,2,1];
  let result = [];

  for (let coin of coinValues){
  while(n >= coin){
    n -= coin;
    result.push(coin)
  }
 }
 console.log(result);
 return result;
}
coins(49)