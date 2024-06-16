/*DESCRIPTION:
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string*/

function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

 // second sol
 function isValidIP(str) {
  return str.split('.').filter(function(v) {return +v <= 255 && +v >= 0 && v.length == String(+v).length;}).length == 4;
}//I love one-liners

// third sol

const isValidIP = (str) => /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/.test(str);

// fourth

function isValidIP(string) {
  return string.split('.').filter((v)=>{return v == Number(v).toString() && Number(v)<256 && Number(v) >= 0}).length==4;
}
// last option
function isValidIP(str) {
  const validIP = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

  return validIP.test(str);
 
  }