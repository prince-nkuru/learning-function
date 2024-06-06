/*Task
Write a function called which_postcode/whichPostcode that takes a string, and determines whether it represents a British or Slovakian postcode. If the string is a valid British postcode, return "GB". If it's a valid Slovakian postcode, return "SK". If the input is neither a valid British nor a valid Slovakian postcode, return "Not valid".

Leading and trailing spaces should be ignored, but if there are spaces in wrong place in the middle of the postcode, then it is invalid.

The input will always be a valid British postcode, a valid Slovakian postcode or an invalid postcode.

British Postcodes
To be considered valid, a British postcode must follow the rules below:

Consists a mix of letters and numbers, seperated to two segments by a single space.
First segment must start with either 1 or 2 letters, followed by 1 or 2 numbers. Example: G4, G40, DN4 or DN11
Second segment must start with a number, followed by 2 letters. Example: 1AB
British postcodes are not case-sensitive, so Se21 7aA is a valid postcode.

Slovakian Postcodes
Consists of 5 numbers, where the first 3 are seperated by a space from the last 2 numbers. Example: 123 45.
Examples
Valid British postcodes:
  G4 7AH
G12 8NU   
Dn1 1aA
SE21 7AA
Valid Slovakian postcodes:
 040 01
810 08  
984 59
Invalid postcodes:
0765 820 - Should only have 3 numbers in the first segment, 2 numbers in the second segment
SE 21 7AA - Should only contain 2 segments
070  08 - Should have single space separating the two segments, not double space
*/

function whichPostcode(postcode){
  postcode = postcode.trim();
  if(/^[a-z]{1,2}\d\d? \d[a-z]{2}$/i.test(postcode))return 'GB'
    
  if (/^\d\d\d \d\d$/i.test(postcode)) return 'SK'
  return 'Not valid'
}

// 2

/*This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
NOTE: The algorithm should always use the longest possible overlap.

"abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"
*/

function mergeStrings(first, second){
  return (first + ' ' + second).replace(/(.*) \1/, '$1');
}




// 3

/*There's a new security company in Paris, and they decided to give their employees an algorithm to make first name recognition faster. In the blink of an eye, they can now detect if a string is a first name, no matter if it is a one-word name or an hyphenated name. They're given this documentation with the algorithm:

In France, you'll often find people with hyphenated first names. They're called "prénoms composés". There could be two, or even more words linked to form a new name, quite like jQuery function chaining ;). They're linked using the - symbol, like Marie-Joelle, Jean-Michel, Jean-Mouloud. Thanks to this algorithm, you can now recognize hyphenated names quicker than Flash ! (yeah, their employees know how to use jQuery. Don't ask me why)

Your mission if you accept it, recreate the algorithm. Using the function showMe, which takes a yourID argument, you will check if the given argument is a name or not, by returning true or false.

Note that

String will either be a one-word first name, or an hyphenated first name , its words being linked by "-".
Words can only start with an uppercase letter, and then lowercase letters (from a to z)
Now is your time to help the guards !

*/

// first solution
function showMe(yourID){
  return /^[A-Z][a-z]*(-[A-Z][a-z]*)*$/.test(yourID);
}

// second 
function showMe(yourID){
  return /^[a-z-]+$/i.test(yourID);
  }

  // third way

  function showMe(yourID){
  
    return /^[a-z]+(-[a-z]+)*$/i.test(yourID)
      
    }
