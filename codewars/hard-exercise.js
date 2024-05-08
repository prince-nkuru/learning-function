<
    
  function orderWeight(strng) =>{

   var weights = strng.split(' ');
  
   return weights.sort(function(a, b) {
    var first = a.split('').reduce((x,y) => Number(x) + Number(y));
    var second = b.split('').reduce((x,y) => Number(x) + Number(y));
    return first - second === 0 ? a.localeCompare(b) : first - second; 
   }).join(' ');
 }
 console.log(orderWeight('105 104 103 102'));

 //2

 /*Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.*/

 function nearestSq(n){
  return Math.round(Math.sqrt(n))** 2;
}
 