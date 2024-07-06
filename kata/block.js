// DESCRIPTION:
// In Block Dude, the main character can climb boxes, but only if they are stacked in a particular way so that he is able to climb them one at a time. More specifically, he can only climb UP or DOWN one box at a time.

// Let 1 represent the boxes, and 0 represent the background. Write a function that returns True if block dude can travel from the left side to the right side of the screen given his constraints and False otherwise.

// [
//   [0, 0, 0, 0, X, 0, 0, 0, 0],
//   [0, 0, 0, X, 1, X, X, 0, 0],
//   [0, X, X, 1, 1, 1, 1, X, 0],
//   [X, 1, 1, 1, 1, 1, 1, 1, X]
// ] ➞ True
// # Since block dude can travel across these boxes 
// # Note: X's are just to show walking path and are not part of the actual input.

// [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 0, 0, 0, 0],
//   [0, X, X, 1, 1, 1, 1, 0, 0],
//   [X, 1, 1, 1, 1, 1, 1, 1, 0]
// ] ➞ False
// # stuck at column 3, being unable to climb 2 boxes at once.

// [
//   [0, 0, 0, X, 0, 0, 0, 0, 0],
//   [0, 0, X, 1, 0, 0, 0, 0, 0],
//   [0, X, 1, 1, 0, 0, 1, 0, 0],
//   [X, 1, 1, 1, 1, 1, 1, 1, 0]
// ] ➞ False
// # Block dude can't jump down 2 blocks.

// [
//   [0, 0, 0, X, 0, 0, 0, 0, 0],
//   [0, 0, X, 1, X, 0, X, 0, 0],
//   [X, X, 1, 1, 1, X, 1, X, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, X]
// ] ➞ True
// # First column can have a starting box

// [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [1, 0, 1, 1, 0, 0, 1, 0, 0],
//   [1, 1, 1, 1, 1, 1, 1, 1, 0]
// ] ➞ False
// # Block dude cannot climb first column if it has more than one boxes

// [
//   [0, 0, 0, X, 0, 0, 0, 0, 0],
//   [0, 0, X, 1, X, 0, X, 0, X],
//   [X, X, 1, 1, 1, X, 1, X, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1]
// ]  ➞ True
// # Last column can have more than one boxes.


// [              X 
//   [0, 0, 0, X, 1, X, 0, 0, 0],
//   [0, 0, X, 1, 1, 1, X, 0, X],
//   [X, X, 1, 1, 1, 1, 1, X, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1]
// ]  ➞ True
// # Block dude can jump over a box on the top layer.
// Notes:

// First column can have a starting box
// Block dude cannot climb first column if it has more than one boxes
// Last column can have more than one boxes.
// Block dude can jump over a box on the top layer.

const canTraverse = matrix =>
  matrix[0].map((_, idx) => matrix.length - 1 - matrix.findLastIndex(row => !row[idx]))
           .every((val, idx, arr) => Math.abs(val - ~~arr[idx-1]) <= 1);