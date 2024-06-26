/*Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

Example
For example, when n = 10:

The square of the sum of the numbers is:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

The sum of the squares of the numbers is:

12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640*/

function differenceOfSquares(n) {
  if (n >= 1 && n <= 100){
    let sum = 0;
  let square = 0;
  for (let i = 0; i <= n; i++){
    sum += i
    square += (i ** 2)
  }
    return (sum ** 2) - square;
  }
}

// question 2

/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.*/

function divCon(x){
  let Num = 0;
  let strng = 0
for (let i = 0; i < x.length; i++){
  if (typeof x[i] == 'number'){
    Num += x[i];
  }else {
    strng += parseInt(x[i])
  }
}
  return Num - strng;
}

//question 3
/*DESCRIPTION:
Write a function take_umbrella() that takes two arguments: a string representing the current weather and a float representing the chance of rain today.

Your function should return True or False based on the following criteria.

You should take an umbrella if it's currently raining or if it's cloudy and the chance of rain is over 0.20.
You shouldn't take an umbrella if it's sunny unless it's more likely to rain than not.
The options for the current weather are sunny, cloudy, and rainy.

For example, take_umbrella('sunny', 0.40) should return False.

As an additional challenge, consider solving this kata using only logical operaters and not using any if statements.*/

function takeUmbrella(weather, chance) {
  return weather === 'rainy' || weather === 'cloudy' && chance > 0.20 || weather === 'sunny' && chance > 0.5? true : false
}