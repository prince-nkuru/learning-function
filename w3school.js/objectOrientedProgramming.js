
//procedural : old
let baseSalary = 3000;
let overTime= 10;
let rate = 30;
function getWage(baseSalary, overTime, rate){
  return baseSalary + (overTime * rate);
}

// object oriented programming

let employee = {
  baseSalary: 3000,
  overTime: 10,
  rate: 30,
  getWage: function(){
    return this.baseSalary + (this.overTime * this.rate)
  }
}
console.log(employee.getWage());

// constructor way of defining object

function Person (first, last,age, eye){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye

}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

console.log(myFather.age)

// prototype

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// prototype is used to add any property to constructor.
// if prototype value is changed, all new created object will have that value, but previous object will have prev value

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};

const myFather2 = new Person("John", "Doe", 50, "blue");
console.log(myFather2.name());


   // object.assign method is used to add object into another object. or making copy of it.

   const course = {
    name: 'programming language',

   }
   
   const grade = {
    score: 92
   }

   const results = Object.assign(course, grade);
   console.log(results);

   // making copy of object 

   const clone = Object.assign({}, results);
   console.log(clone);

   // object.entries() is used in converting object to dimensional arrays

   const ent = {
    name: 'prince',
    age: 24
   }

   //console.log(Object.entries(ent));

   // it is also used to loop easily into an object


   for (const [key, value] of Object.entries(ent)){
    console.log(`key => ${key[0]} | value => ${value[0]}`);
   }

   // JavaScript Object.fromEntries();

   // 1. lets you convert maps into an object, 2. lets you convert an iterable (key value pair)into an object

 const myMap = new Map();
 myMap.set('name', 'prince');
 myMap.set('age',24);

 const obj = Object.fromEntries(myMap);
 console.log(obj);

 // object.keys() method

 const key = {
  active : true,
  id : 252,
  hobbies: 'walking'
 }

 const resu = Object.keys(key); // Object.values(key) to get array of values
 console.log(resu);



 /************************************************************/
     // INHERITANCE
 /************************************************************/

   class Person {
    constructor(name) {
       this.name = name;
       }
       toString(){
        return `name of person is ${this.name}`
       }
   }

   class student extends Person {
    constructor(name, id){
      super(name);
      this.id = id;

      }

      toString() {
        return (`${super.toString()},
        Student ID: ${this.id}`);
    }
   }
   let student1 = new student('Mukul', 22);
   console.log(student1.toString());

