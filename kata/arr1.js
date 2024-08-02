const people = [
  {firstName:'prince', lastName: 'nkurunziza', department:'pharmacy', DOB: '06/09/2000',salary:'1000'},
  {firstName:'levis', lastName: 'bayubahe', department:'pharmacy', DOB: '06/09/2001',salary:'10002'},
  {firstName:'fbrice', lastName: 'niyibikora', department:'medicine', DOB: '05/09/2000',salary:'4000'},
  {firstName:'janvier', lastName: 'niyonkuru', department:'pharmacy', DOB: '06/05/2001',salary:'300'}
]
//1. average salaries
//people.reduce((prev, curr) => {return (prev + parseInt(curr.salary))/people.length},0)

//2. people older than 23

//people.filter(person => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 23 )

//3. return arr of full names

//people.map(person => person.fullName = person.firstName + ' ' + person.lastName ) or
//people.map(person => `${person.firstName} ${person.lastName}` )
//people.map(person => ({...person, fullName: `${person.firstName} ${person.lastName}`} )) prefered way

//4.

//arrange from youngest to oldest

/*
 
people.sort((personA, personB) => new Date(personA.DOB) - new Date(personB.DOB));



*/
 

  // 5. how many people are there in each department?

  let num = people.reduce((prev, curr) => ({...prev, [curr.department]: prev[curr.department] + 1 || 1}), {});
  console.log(num);