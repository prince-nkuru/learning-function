// DESCRIPTION:
// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

function mostLikely(prob1,prob2){
  let [a, b] = prob1.split(':');
  let [c, d] = prob2.split(':');
  
  return a/b > c/d;
}

// second 

function mostLikely(prob1,prob2){
  return prob1.split(':').reduce( (a,b) =>a/b ) > prob2.split(':').reduce( (a,b) =>a/b );
}

// third sol

let mostLikely = function (prob1, prob2) {
  let probNumbers1 = prob1.split(':')
  let probNumbers2 = prob2.split(':')
  probNumbers1 = probNumbers1[0] / probNumbers1[1]
  probNumbers2 = probNumbers2[0] / probNumbers2[1]
  if (probNumbers1 > probNumbers2) {
      return true
  } else {
      return false
  }
}


//extra question

// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  return health - damage > 0 ? health - damage : 0
}

// DESCRIPTION:
// Happy Holidays fellow Code Warriors!
// It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! Wait... when exactly do we need to do that?

// Time for Milk and Cookies
// Complete the function function that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.

// Keep in mind Javascript's Date month is 0 based!

// Examples
// timeForMilkAndCookies(new Date(2013, 11, 24))  // true
// timeForMilkAndCookies(new Date(2013, 0, 23))   // false
// // timeForMilkAndCookies(new Date(3000, 11, 24))  // true