const display = document.querySelector('.display');
const btn = document.querySelectorAll('.button');
const grid = document.querySelector('.grid');

function appendToDisplay (input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate (){
  display.value = eval(display.value);
}