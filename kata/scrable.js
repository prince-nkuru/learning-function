/*DESCRIPTION:
You're playing to scrabble. But counting points is hard.

You decide to create a little script to calculate the best possible value.

The function takes two arguments :

`points` : an array of integer representing for each letters from A to Z the points that it pays
`words` : an array of strings, uppercase

You must return the index of the shortest word which realize the highest score.
If the length and the score are the same for two elements, return the index of the first one.*/

function getBestWord(points,words){
   
  let highScore = { score: 0, length: 0, index: 0 };
  
  for(let i = 0; i < words.length; i++) {
    
    let score = 0;
    for (let c = 0; c < words[i].length; c++) {
      score += points[words[i].charCodeAt(c)- 65];
    }
    
    if(score > highScore.score ||  (highScore.score === score && words[i].length < highScore.length)) {
      highScore = { score: score, length : words[i].length, index: i };
    }
  } 
  
  return highScore.index
}