const hours = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');




function getTime(){

  const today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let ampms = 'AM';

  if (h > 12){
    h = h - 12;
    ampms = 'PM'
  }

  h = h < 10? '0' + h: h;
  m = m < 10? '0' + m: m;
  s = s < 10? '0' + s: s;


  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.innerText = ampms;

  setTimeout(() => {
    getTime()
  },1000)
}

getTime();

