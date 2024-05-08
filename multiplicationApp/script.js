 const input = document.querySelector('.input');
 const question =  document.querySelector('.question');
 const submit = document.querySelector('.submit');
 const score =  document.querySelector('.score');

 const num1 = Math.round(Math.random() * 10);
 const num2 = Math.round(Math.random() * 10);

  const computerMove = num1 * num2;

  submit.addEventListener('click' function(){
   
    question.innerHTML = `what is ${num1} multiply by ${num2}`




  })