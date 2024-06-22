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

// second way

function onlyDuplicates(str) {
  return str.split('').filter(e => str.indexOf(e) != str.lastIndexOf(e)).join('')
}

// third way

var onlyDuplicates = s => s.replace(/./g,c => s.indexOf(c)==s.lastIndexOf(c) ? '' : c);

// fourth 

String.prototype.isDuplicate = function(char){
  return this.split(char).length>2;
}

function onlyDuplicates(str) {
  return [...str].filter(s=>str.isDuplicate(s)).join``;
}