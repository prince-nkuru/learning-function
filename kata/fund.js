/*Description:
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.*/

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

/////////////////////////

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}

//////////////////////////////////////

function sumArray(array) {
  
  if (array == null || array.length <= 2) {
    return 0
  }
  
  var max = Math.max.apply(Math, array);
  var min = Math.min.apply(Math, array);
  var sum = 0
  
  for (i = 0; i < array.length; i++) {
    sum += array[i];
   }

  return sum - max - min
}
////////////////////////////////////////////

const sumArray = (numbers) => (
  numbers && numbers.length > 1
    ? numbers
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((sum, number) => sum + number, 0)
    : 0
);