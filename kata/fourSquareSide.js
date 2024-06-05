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