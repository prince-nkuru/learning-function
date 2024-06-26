/*An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

var isAnagram = function(test, original) {
  test = test.toLowerCase().split('').sort().join('');
  original = original.toLowerCase().split('').sort().join('');
  if (test === original){
    return true;
  }else {
    return false;
  }
};

// second sol
function isAnagram (test, original) {
	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}

// final

// write the function isAnagram
var isAnagram = function(test, original) {
  if(test.length !== original.length) { return false }
  return [...test.toLowerCase()].sort().join("") === [...original.toLowerCase()].sort().join("")
};