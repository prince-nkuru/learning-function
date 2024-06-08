function candles(candlesNumber, makeNew) {
  
  let totalCandlesBurned = 0;
  let leftovers = 0;

  while (candlesNumber > 0) {
    // Burn all current candles
    totalCandlesBurned += candlesNumber;
    leftovers += candlesNumber;

    // Calculate new candles we can make from leftovers
    candlesNumber = Math.floor(leftovers / makeNew);
    
    // Update leftovers to the remaining ones after creating new candles
    leftovers = leftovers % makeNew;
  }

  return totalCandlesBurned;

  
  
}