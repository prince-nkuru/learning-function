
// exercises for returning even number
    let arr = [10, 11, 12, 13, 14 , 15, 16, 17, 18, 19, 20];
    let newArr = [];

    let filtered = arr.filter(n => n % 2 === 0);
    console.log(filtered);
    console.log(arr);

    // returning string with empty spaces 

    let arr2 = ['france','south africa' , 'brazil', 'united state'];
    let newArr2 = arr2.filter(str => str.includes(' '));
    console.log(newArr2);

    // returning calculation using map

    let numbers = [1.23, 19.99,85.2, 32.87, 8, 5.2];

    const prices = numbers.filter(number => {
      if (number * 1.15 < 10) {
        return true
      }
      return false
      
    })
    console.log (prices);
    // returning array that has 2 in them 

    let bigArr = [[1,2,3], [0,0,1], [3,6,9], [0,1,2]];
    const smallArr = bigArr.filter(arr => arr.includes(2));
    console.log (smallArr);

    // using map and arrays 

    let numb = [10,20,30,40,50];
    let results = numb.map(num => num * 2);
    console.log(numb);
    console.log(results);
    let filt = results.filter(n => n > 50);
    console.log(filt);

    function sayHello () {
      var greeting = 'hello';
      console.log(greeting)
      
    }
    sayHello();

    


    

  