const prevBtns = document.querySelectorAll('.btn');
const nextBtns = document.querySelectorAll('.btn-next');
const progress = document.getElementById('#progress');
const formSteps = document.querySelectorAll('.form-step');


let formStepNum = 0;

nextBtns.forEach(btn => {
  btn.addEventListener('click', () =>{
    formStepNum++;
    updateFormSteps();

  })
})

function updateFormSteps(){
  formSteps.forEach(formStep => {
    formStep.classList.contains('active') && 
    formStep.classList.remove('active');
  })
  formSteps[formStepNum].classList.add('active')
}