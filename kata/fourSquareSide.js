/*An Example
Considering this square:

    B A T S
    A B U T
    T U B A
    S T A B
Here are the four ways a word (in this case "TUBA") can be read:

                         down
                          ↓
           B A T S    B A T S    B A T S    B A T S
           A B U T    A B U T    A B U T    A B U T ← reverse
  across → T U B A    T U B A    T U B A    T U B A
           S T A B    S T A B    S T A B    S T A B
                                   ↑
                                   up
IMPORTANT:

In a true Sator Square, ALL of its words can be read in ALL four of these ways.
If there is any deviation, it would be false to consider it a Sator Square.
Some Details
tablet (square) dimensions range from 2x2 to 33x33 inclusive
all characters used will be upper-case alphabet letters
there is no need to validate any input
Input
an N x N (square) two-dimentional matrix of uppercase letters
Output
boolean true or false whether or not the tablet is a Sator Square*/

function isSatorSquare(tablet) {
  const across = []
  const down = []
  const up = []
  const reverse = []

  for (let i = 0; i < tablet.length; i++) {
    let word = tablet[i]
    across.push(word.join(''))
    reverse.push([...word].reverse().join(''))
    word = []

    for (let j = 0; j < tablet.length; j++) word.push(tablet[j][i])

    down.push(word.join(''))
    up.push(word.reverse().join(''))
  }

  for (const word of across) if (!down.find(item => item === word) || !up.find(item => item === word) || !reverse.find(item => item === word)) return false

  return true
}

// second question

function spot(s1,s2){
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  let result = [];
  
  for (let i = 0; i < s1Arr.length; i++){
    if (s1Arr[i] != s2Arr[i]){
      result.push(i)
    }
  }
  return result;
}