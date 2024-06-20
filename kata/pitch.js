function operate(pcSet, operation) {
  var result = pcSet;
  
  let inversion = /I/.test(operation);
  let n = parseInt(operation.match(/\d+/)[0]);
  
  return (inversion) ? result.map( p => (12 - p + n) % 12 ).sort( (a,b) => a-b) : result.map( p => (p + n) % 12 ).sort( (a,b) => a-b);
}