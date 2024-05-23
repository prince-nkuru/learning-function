//convert a 2 dimensional array of key value pairs into an object

const keyValuePairs = [
  ['username', 'dcode'],
  ['memberSince', '2024-04-04'],
  ['age', 25]
]
  
const result = keyValuePairs.reduce((p, keyValuePair) => {
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  p[key] = value;

  return p;
}, {})
console.log(result);


// question 2. 
// finding maximum or minimum value of salary of people object

const people = [
    {
      name : 'dom',
      occupation : 'software developer' ,
      salary : 90000
    } ,
    {
      name : 'max',
      occupation: 'mechanic',
      salary: 150000
    },
    {
      name : 'eric',
      occupation: 'medicine',
      salary: 750000
    } 
  ]

  const results = people.reduce((prev, current) => {
    
  
    if (current.salary > prev){
      return current.salary;
     
    } 
    return prev;
  }, 0)

  console.log(results);