

    function calculateAge() {

  
    let inputElement = getElementById("input");
     let birthDay = new Date ("inputElement.value");


     let d1 = birthDay.getDate();
     let m1 = birthDay.getMonth() + 1;
     let y1 = birthDay.getFullYear();

     let today = new Date();

     let d2 = today.getDate();
     let m2 = today.getMonth() + 1;
     let y2 = today.getFullYear();

     let y3; m3; d3;
     y3 = y2 - y1;

     if (m2 > m1) {
      m3 = m2 - m1
     } else {
      y--;
      m3 = 12 + m2 - m1;
     }

     if (d2> d1) {
      d3 = d2 - d1;
     } else {
      m--;
      d3 = getDaysInMonth(y1,m1) + d2 - d1;
     }
     if (m3 < 1) {
      m3 = 11;
      y3--;
     }
       console.log (y3, m3, d3);
    }

     function getDaysInMonth (year, month) {
      return new Date(year, month, 0).getDate()
     }













 