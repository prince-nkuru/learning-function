function blowCandles(str) {
  let blowCounter = 0;
  let numberArray = str.split("").map(Number);

  while (numberArray.length > 0) {
      const strength = numberArray.shift();
      
      blowCounter += strength;

      if (numberArray.length > 0) {
          numberArray[0] = Math.max(numberArray[0] - strength, 0);
      }
      if (numberArray.length > 1) {
          numberArray[1] = Math.max(numberArray[1] - strength, 0);
      }
  }

  return blowCounter;

}