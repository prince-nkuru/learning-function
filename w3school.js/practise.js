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