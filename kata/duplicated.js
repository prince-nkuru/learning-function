// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function onlyDuplicates(str) {
  let arr = []
  
  let splitted = str.split('');
  
  for (let i = 0; i < splitted.length; i++){
    if (splitted.indexOf(splitted[i]) !== splitted.lastIndexOf(splitted[i]) ){
      arr.push(splitted[i])
    }
  }
return arr.join('');
}