// DESCRIPTION:
// Steve and Josh are bored and want to play something. They don't want to think too much, so they come up with a really simple game. Write a function called winner and figure out who is going to win.

// They are dealt the same number of cards. They both flip the card on the top of their deck. Whoever has a card with higher value wins the round and gets one point (if the cards are of the same value, neither of them gets a point). After this, the two cards are discarded and they flip another card from the top of their deck. They do this until they have no cards left.

// deckSteve and deckJosh are arrays representing their decks. They are filled with cards, represented by a single character. The card rank is as follows (from lowest to highest):

// '2','3','4','5','6','7','8','9','T','J','Q','K','A'
// Every card may appear in the deck more than once. Figure out who is going to win and return who wins and with what score:

// "Steve wins x to y" if Steve wins; where x is Steve's score, y is Josh's score;
// "Josh wins x to y" if Josh wins; where x is Josh's score, y is Steve's score;
// "Tie" if the score is tied at the end of the game.
// Example
// Steve is dealt: ['A','7','8']
// Josh is dealt: ['K','5','9']
// In the first round, ace beats king and Steve gets one point.
// In the second round, 7 beats 5 and Steve gets his second point.
// In the third round, 9 beats 8 and Josh gets one point.
// So you should return: "Steve wins 2 to 1"

function winner(deckSteve, deckJosh) {
  let arr = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
  let steveCount = 0;
  let joshCount = 0;
  
  for (let i = 0; i < deckSteve.length; i++){
    if( arr.indexOf(deckSteve[i]) > arr.indexOf(deckJosh[i])){
      steveCount++;
    } else if (arr.indexOf(deckSteve[i]) < arr.indexOf(deckJosh[i])){
      joshCount++;
    }
  }
  if(steveCount > joshCount){
    return `Steve wins ${steveCount} to ${joshCount}`
  }else if (steveCount < joshCount){
    return `Josh wins ${joshCount} to ${steveCount}`
  } else {
    return 'Tie'
  }
}

// second choice

function winner(deckSteve, deckJosh) {
  let rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'],
      spoints = 0,
      jpoints = 0;
  deckSteve.forEach((el, i) => {
    rank.indexOf(el) > rank.indexOf(deckJosh[i]) ? spoints ++ :
    rank.indexOf(el) < rank.indexOf(deckJosh[i]) ? jpoints ++ : 0
  })
  
  const result = (sp, jp) => {
    if (sp == jp) return 'Tie';
    if (sp > jp) return `Steve wins ${sp} to ${jp}`;
    return `Josh wins ${jp} to ${sp}`;
  }
  
  return result(spoints, jpoints)
}