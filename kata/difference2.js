function twosDifference(input){
  input.sort((a,b)=>a-b)
  var arr=[];
  for (var i=0; i<input.length; ++i)
    if (input.indexOf(input[i]+2)!=-1)
      arr.push([input[i],input[i]+2])
  return arr
}