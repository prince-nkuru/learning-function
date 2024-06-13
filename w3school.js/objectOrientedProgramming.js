
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

