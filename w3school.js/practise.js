let arr = [1,3,4,5,6,-9,-10,7];
let maped = arr
            .filter(s => s >= 0)
            .map(n => ({value: n}))
            .filter(t => t.value >= 6)
            .map(n => n.value)
            console.log(maped);


            // reduce method

  const materials = [
    {
      name :'bricks',
      cost :2000
    }, 
    {
      name : 'wood',
      cost : 3000
    }
  ]          

  let result = materials.reduce((acc, curr) => {
   
     return acc + curr.cost;
  },0)

  console.log(result);

  // reduce example 2
  // convert two dimensional array into an objects

  const keyValuePair = [
    ['userName', 'prince'],
    ['memberSince', '2024-04-05'],
    ['age', 24]
  ]

  const final = keyValuePair.reduce((acc, curr) => {
    let key = curr[0];
    let value = curr[1];
    acc[key] = value;

    return acc;
  }, {})

  console.log(final);

  // 4th exercise
// finding maximum and minimum

const people = [
  {
 name: 'prince',
 price: 1000
  },
  {
name: 'levis',
price: 1400
  },
  {
name: 'Fab',
price: 700
  }
]

const max = people.reduce((acc, curr) => {
  if (curr.price < acc){
    return curr.price;
  } else {
    return acc.price;
  }
})
console.log(max);