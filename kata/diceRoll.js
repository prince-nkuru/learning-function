// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// Note: your solution must not modify the input array.

function score( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];
  dice.forEach(function(x){ dc[x-1]++; });
  return dc.reduce(function(s,x,i){ 
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}


// second sol

function score( dice ) {
  var score = [0, 0, 0, 0, 0, 0];

  dice.forEach(function(die) {
    ++score[die - 1];
  });

  return score.reduce(function(total, n, i) {
    switch (i + 1) {
      case 1:
        return total + (Math.floor(n / 3) * 1000) + ((n % 3) * 100);

      case 5:
        return total + (Math.floor(n / 3) * 500) + ((n % 3) * 50);

      default:
        return total + (Math.floor(n / 3) * (i + 1) * 100);
    }
  }, 0);
}