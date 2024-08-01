function moveNext(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (alphabet.includes(arr[i])) {
      let nextIndex = alphabet.indexOf(arr[i]) + 1;
      // Wrap around if the character is 'z'
      if (nextIndex >= alphabet.length) {
        nextIndex = 0;
      }
      result += alphabet[nextIndex];
    } else {
      // Handle non-alphabet characters (optional)
      result += arr[i];
    }
  }
  
  console.log(result);
  return result;
}

moveNext('bcdef'); // Output: 'cdefg'


function addNew(str){
  if (str.startsWith('New')){
    console.log(str)
    return str;
  }else{
    console.log(`New ${str}`)
    return `New ${str}`;
  }
}
addNew('mess')


const evenNumber = (num) => {
  const arr = []
  for (let i = 0; i <= num; i++){
    if (i % 2 === 0){
      arr.push(i);
    }
  }
  console.log(arr.length);
  return arr.length;
}

evenNumber(40);


const isAscending = (arr) => arr.every((_, i) => i === 0 || arr[i -1] < arr[i]);

console.log(isAscending([1,2,3,4,5,6]));


 const seven = (arr) => {
 let res = arr.join(' ');
 if (res.includes(7)){
  console.log(res);
  console.log('Booms!')
  return 'Booms!'
 }else {
  console.log(res);
  console.log(' does not contain 7')
  return ' does not contain 7'
 }
 }
 seven([1,3,6,4,33])