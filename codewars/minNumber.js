




function gettingMad(array) {
   
  let differences = [];

  for(let temp = 0; temp < array.length; temp++){

      for(let i = temp +1; i < array.length; i++){
          differences.push(Math.abs(array[temp] - array[i]))
      }
  }

 
  return differences.sort((a,b) => a - b)[0];

}