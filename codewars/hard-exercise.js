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
 