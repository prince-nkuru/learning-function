function myDisplyer(something){
  document.getElementById('').innerHTML = something;
}

function calculate(num1, num2, myCallBack){
  let sum = num1 + num2;
  myCallBack(sum);
}

calculate(5,5, myDisplyer)