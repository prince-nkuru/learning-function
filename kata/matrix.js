/*DESCRIPTION:
Your task is to rotate a matrix 90 degree to the left. The matrix is an array of integers with dimension n,m. So this kata checks some basics, it's not too difficult.

There's nothing more to explain, no tricks, no "bad cases";-). Perhaps you take a look at the testcases...

One easy example:

Input: {{-1, 4, 5},
        { 2, 3, 4}}

Output: {{ 5, 4},
         { 4, 3},
         {-1, 2}}
First there are some static tests, later on random tests too...


Hope you have fun:-)!*/

var rotateMatrix = arr => {
  var rotated = [];
  var length = arr[0].length;
  for (var i = length - 1; i >= 0; i--) {
      var sub = [];
      for (var j = 0; j < arr.length; j++) {
          sub.push(arr[j][i]);
      }
      rotated.push(sub);
  }
  return rotated;
}