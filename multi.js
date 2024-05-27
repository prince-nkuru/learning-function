const prevBtns = document.querySelectorAll('.btn-pre');
const nextBtns = document.querySelectorAll(('.btn-next'));
const progress = document.getElementById('#progress');
const formSteps = document.querySelectorAll('.form-step');
const progresSteps = document.querySelectorAll('.progress-step');


let formStepsNum = 0;

nextBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressBar();

  })
})

prevBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressBar();

  })
})

function updateFormSteps(){
  formSteps.forEach(formStep => {
    formStep.classList.contains('active')&& 
    formStep.classList.remove('active');
  })
  formSteps[formStepsNum].classList.add('active')
}


function updateProgressBar() {
progresSteps.forEach((progresStep, idx) => {
if (idx < formStepsNum + 1){
  progresStep.classList.add('active')
}else {
  progresStep.classList.remove('active');
}
})
}