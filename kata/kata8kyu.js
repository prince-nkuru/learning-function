/*You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg >= distanceToPump) {
    return true;
  }
  return false;
};

// 7kyu

/*DESCRIPTION:
Santa is handing out gifts in the kindergarten. Many toddlers are around there and everyone should have the opportunity to have a seat on Santa's lap. But there's Peter, a 5 year old boy, who is a bit naughty. He tries to get two gifts. After he got the first one, he lines up again in the queue of children.

But fortunately Santa is not alone. His elves keep a list with the names of the children, which already were on Santa's lap. We know, that each child name is unique. If a child tries to get a second gift, the elves will tell Santa.

OK, let's help Santa and his elves with a simple function handOutGift() (hand_out_gift in Ruby/Python, HandOutGift in C# ) which takes the name of the next child. If this child already got a gift, it must throw an error in order to remind Santa.

Example:

handOutGift("Peter");
handOutGift("Alison");
handOutGift("John");
handOutGift("Maria");
handOutGift("Peter"); // <-- must throw an error*/

let arr = [];
function handOutGift(name) {
  
  if (arr.indexOf(name) !== -1){
        throw new Error();
    }else{
      arr.push(name);
    }
  }

  // second version of answer

  var names = {};

function handOutGift(name) {
  if (names[name]) throw "Error";
  names[name] = true;
}

// third version of code"
var handOutGift = (function() {
  var list = [];
  return function(name) {
    if(list.includes(name))throw new 'You\'ve already got a gift';
    else list.push(name);
  }
})();

// fourth version

const handOutGift =
  ((arr = []) => name => arr.includes(name) ? (() => {throw new Error()})() : arr.push(name))
  ();


  // another question

  /*DESCRIPTION:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!*/