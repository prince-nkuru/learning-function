// DESCRIPTION:
// You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

// For example:

// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'


// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'


// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'
// If the feeling can be formed once - plus one to the answer.

// If the feeling can be formed several times from different letters - plus one to the answer.

// Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.

function countFeelings(string, array) {
  let count = 0;
  
  array.forEach((item) => {
      if (item.split('').every((i) => {
          return string.includes(i); 
      })) {
        count++;
      }
  });
  
  
  return count == 1 ? `${count} feeling.` : `${count} feelings.`; 
}

// sol 2

const countFeelings=(a,b,c=a=>a.split``.reduce((a,b)=>(a[b]=(a[b]||0)+1)&&a,{}),d=c(a))=>{  
  const res=b.map(a=>Object.entries(c(a)).map(([a,b])=>[a,d[a]||0/b])).map(a=>a.every(a=>a[1]>0)?1:0).reduce((a,b)=>a+b);  
  return `${res} feeling${res==1?'':'s'}.`
}

//////////////////

function countFeelings(string, array) {
  var result=array.filter(x=>x.split("").every(y=>string.includes(y))).length;
  return result===1?"1 feeling.":result+" feelings.";
}