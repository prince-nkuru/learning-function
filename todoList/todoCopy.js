
const todoList = ['make dinner', ' wash clothes'];


renderTodoList();
function renderTodoList(){
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++){
  let todo = todoList[i];
  let html = 
  `<p>
  ${todo} 
  <button onclick = "
  todoList.splice(${i}, 1)  /* adding functionality to add button*/
  renderTodoList();
  
  ">delete</button>
  </p> `
      // creating html to store our element one by one
  todoListHTML += html;           // add button element later
}

document.querySelector('.js-todo-list').innerHTML = todoListHTML; // adding this to new created div to display to webpage 

}

function addTodo(){
  const inputEl = document.querySelector('.js-name-input');
  const name = inputEl.Value;
  todoList.push(name);  // this will add the value to arr every time addTodo is called

  inputEl.value = ''; //this will empty input value after list is added

  renderTodoList()
}