// DESCRIPTION:
// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
  return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
};
// second 

function dashatize(num) {
  return num = num.toString().split("").map(function(c){
    return c % 2 ? "-" + c + "-" :  c ;
  }).join("").split("-").filter(a => a != "").join("-");
  
};

// third

function dashatize(num) {
  var dashed=Math.abs(num).toString().split('').map(a=> +a%2==1? '-'+a+'-':a).join('');
  if (dashed[0]=='-') {
    dashed=dashed.slice(1);
  } 
  if (dashed[dashed.length-1]=='-') {
    dashed=dashed.slice(0,dashed.length-1);
  }
  for(var i=0;i<dashed.length;i++) {
    if (dashed[i]=='-') {
      if (dashed[i+1]=='-') {
        dashed=dashed.substring(0,i+1)+dashed.substring(i+2);
      }
    }
  }
  return dashed;
};

// fourth

const dashatize = num => isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');