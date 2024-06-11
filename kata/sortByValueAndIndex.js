/*DESCRIPTION:
Sort an array by value and index
Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5



Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

ARRAYS*/

function sortByValueAndIndex(array) {
  return array
		.map((x, i) => [x, x * i + x])
		.sort((a, b) => a[1] - b[1])
		.map((a) => a[0])
}

// sol

function sortByValueAndIndex(array){
  return array.map((num, i) => [num, i + 1]).sort((a, b) => (a[0] * a[1]) - (b[0] * b[1])).map(([num]) => num);
}


// new question

/*DESCRIPTION:
Task
International hackers group organized a programming competition, in which n teams participated.

They were assigned to separate rooms for competitions, and the rooms were lined up in a straight line.

The game was over and each team scored points. It's time to pay bonuses. The rule is:

- The bonus unit is 1K($1000), and each team gets at least 1k.
- The bonus payment process is not public. 
- A team can know the bonus amount of its adjacent team, if the 
  score of the adjacent team is lower than itself.
- If a team finds that its bonus is no higher than the adjacent team whose
  score is lower than itself, the team will not be satisfied
Given an integer array scores represents the score of all teams. Your task is to calculate how much bonuses international hackers group need to pay to keep all teams satisfied.

Note, the unit of bonus is 1K. All teams are in a straight line, and their order is the same as that of the array elements.

Example
For scores = [10,20,30], the output should be 6.

team1's score = 10
team2's score = 20
team3's score = 30

team1 can get 1K, The team was satisfied 
because it knew nothing about the other teams.

team2 can know team1's bonus amount, 
So team2 at least get 2K to be satisfied

team3 can know team2's bonus amount, 
So team3 at least get 3K to be satisfied

1 + 2 + 3 = 6
For scores = [10,20,20,30], the output should be 6.

The possible bonus amount of each team can be:[1,2,1,2]

For scores = [20,30,10,30,40,10,20,30,40,30], the output should be 20.

The possible bonus amount of each team can be:[1,2,1,2,3,1,2,3,4,1] */
