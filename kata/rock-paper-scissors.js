/*DESCRIPTION:
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".*/

const MATCH = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};


function rpsls(pl1, pl2) {
  return MATCH[pl1].indexOf(pl2) >= 0 ? 'Player 1 Won!' :
         MATCH[pl2].indexOf(pl1) >= 0 ? 'Player 2 Won!' : 'Draw!';
}

// second sol

function rpsls(pl1, pl2) {
  if (pl1 === pl2) return 'Draw!'
  let rules = {
      'paper': ['rock', 'spock'],
      'rock': ['lizard', 'scissors'],
      'lizard': ['spock', 'paper'],
      'spock': ['scissors', 'rock'],
      'scissors': ['lizard', 'paper']       
  }
  if (rules[pl1].includes(pl2))
      return 'Player 1 Won!'
  else
      return 'Player 2 Won!'
}

// easy way

function rpsls(p1,p2){
  if ((p1=="rock" && p2=="lizard") 
      ||(p1=="paper" && p2=="rock") 
      ||(p1=="scissors" && p2=="lizard") 
      ||(p1=="lizard" && p2=="paper")
      ||(p1=="paper" && p2=="spock")
      ||(p1=="rock" && p2=="scissors")
      ||(p1=="lizard" && p2=="spock")
      ||(p1=="scissors" && p2=="paper")
      ||(p1=="spock" && p2=="scissors")
      ||(p1=="spock" && p2=="rock"))
    return "Player 1 Won!";
  if (p1==p2)
    return "Draw!"
  return "Player 2 Won!";
}