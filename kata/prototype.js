/*Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emo*/

String.prototype.reverse = function(){
  return this.split('').reverse().join(''); 
}

// second sol

//Create reverse function for the String prototype
String.prototype.reverse = function(){
  return this.length ? this.substring(1).reverse() + this.charAt(0) : "";
}

// third solution

String.prototype.reverse = function() {
  return this.split('').reduceRight((acc, val) => acc + val,'')
}