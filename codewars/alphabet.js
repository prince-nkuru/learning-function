/* this will return array of number when arrays of alphabet are in their corresponding index of normal alphabetical order

ex [abcd, acd] will return [4,1]*/

function solve(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  return arr.map(word => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLowerCase();
      if (alphabet.indexOf(letter) === i) {
        count++;
      }
    }
    return count;
  });
  
}

// second way of doing the question

function solve(arr){  
  var alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
};