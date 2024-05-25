
/*Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with a list of integers and the expected number n of smallest elements to return.

Also:

the number of elements to be returned cannot be higher than the list length;
elements can be duplicated;
in case of duplicates, just return them according to the original order (see third example for more clarity).
Same examples and more in the test cases:

Array	N	Expected
[1, 2, 3, 4, 5]	3	[1, 2, 3]
[5, 4, 3, 2, 1]	3	[3, 2, 1]
[1, 2, 3, 4, 1]	3	[1, 2, 1]
[1, 2, 3, -4, 0]	3	[1, -4, 0]
[1, 2, 3, 4, 5]	0	[]*/




const firstNSmallest = (array, n) => {
  while(array.length != n) {
    array.splice(array.lastIndexOf(Math.max(...array)), 1)
  }
  return array
}