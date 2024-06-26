/*DESCRIPTION:
Musical set theory provides concepts and tools for musical analysis. Most of it deals with sets of pitches and pitch classes. For this purpose, we can assign numbers to each different pitch class (note) as following: C=0, C#=1, D=2, D#=3, E=4, F=5, F#=6, G=7, G#=8, A=9, A#=10, B=11. This way, a pitch class set is just an unordered collection of pitch classes (notes) without any duplication. So, [2, 4, 6] is an example of a pitch class set, as well as [3, 6, 8, 2, 10, 0]. They are usually represented this way, similar to an array.

There are some simple operations/transformations that one can do with these pitch class sets. Two of them are the transposition and the inversion. A transposition(T) is simply to add the same number (between 0 and 11) to all elements of the collection. A T5 of the set [1, 2, 3] should be [6, 7, 8]. Note that exist only twelve notes, so a T10 of the previous set should be [11, 0, 1], using modulo 12.

To operate an inversion(I) subtract each element of the list from twelve. Using the same set [1, 2, 3], a T0I - an inversion of T0 - should be [11, 10, 9]. Note that if one asks for the TnI inversion of some set it means the inversion of the transposition n. Consequently, the TnI of [1,2,3] should be [(12-1)+n, (12-2)+n, (12-3)+n] <=> [0,11,10].

Here you can find extra information if needed. Here you find an example of this kind of calculator.

You should create a function that receives a pitch class set (array) as first argument and a transposition or inversion operation (string) as second argument, formated as "Tn" (transposition n) or "TnI" (inversion n) where n is a number between 0 and 12. Below are some examples:

operation([4,6,7,10], "T1");
result = [5,7,8,11]

operation([4,6,7,10], "T1I");
result = [3,6,7,9] //sorted

operation([10,6,7], "T10");
result = [4,5,8] //sorted

operation([10,6,7], "T10I");
result = [0,3,4] //sorted
Notice how it should always return a sorted array independently of the input.*/


function operate(pcSet, operation) {
  var result = pcSet;
  
  let inversion = /I/.test(operation);
  let n = parseInt(operation.match(/\d+/)[0]);
  
  return (inversion) ? result.map( p => (12 - p + n) % 12 ).sort( (a,b) => a-b) : result.map( p => (p + n) % 12 ).sort( (a,b) => a-b);
}
  /**********************************************************************************************************/
/*Given integers a and b, determine whether the following pseudocode results in an infinite loop

 while (a !== b){
     a++
     b--
 }
Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

Example
For a = 2 and b = 6, the output should be

isInfiniteProcess(a, b) = false (or equivalent in PHP)

For a = 2 and b = 3, the output should be

isInfiniteProcess(a, b) = true (or equivalent in PHP)

Input/Output
[input] integer a
Constraints: 0 ≤ a ≤ 100.

[input] integer b
Constraints: 0 ≤ b ≤ 100.

[output] a boolean value
true if the pseudocode will never stop, false otherwise.*/



function isInfiniteProcess(a, b) {
  return a > b || (b - a) % 2 !== 0;
}


// second answer

function isInfiniteProcess(a, b) {
  while (a < b){
     a++
     b--
  }
  return a !== b;
}

/**********************************************************************************************************/