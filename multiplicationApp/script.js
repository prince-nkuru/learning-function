 const input = document.querySelector('.input');
 const question =  document.querySelector('.question');
 const submiting = document.querySelector('.submit');
 const scoreEI =  document.querySelector('.score');
 const formEI = document.querySelector('.form');
 let score = JSON.parse(localStorage.getItem('score'))

 const num1 = Math.ceil(Math.random() * 10);
 const num2 = Math.ceil(Math.random() * 10);

  const computerMove = num1 * num2;

  if(!score){
    score = 0;
  }

  scoreEI.innerText = `score :${score}`;
   
  question.innerHTML =`what is ${num1} multiply by ${num2}`;
 

  formEI.addEventListener('submit' ,() =>{
    const userAns = +input.value;
   
     if (userAns === computerMove){
      score++;
      updateLocalStorage();
     } else {
      score--;
      updateLocalStorage();

     }

    })
    function updateLocalStorage () {
      localStorage.setItem('score', JSON.stringify(score))
     }