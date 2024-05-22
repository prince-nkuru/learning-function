
/*Task
Complete function howManyStep that accept two number a and b (0 < a <= b). You need turn a into b.

The rules is only can double (a=a*2) or plus 1 (a=a+1). return the shortest step.

Examples
howManyStep(1,10) === 4
// 1+1=2, 2*2=4, 4+1=5, 5*2=10
howManyStep(1,17) === 5
// 1*2=2, 2*2=4, 4*2=8, 8*2=16, 16+1=17*/

function howManyStep(a, b) {
  if (a === b) return 0;
  else if (a * 2 > b) return b - a;
  else if (a === b / 2) return 1
  else if (b % 2 !== 0) {
    return 1 + howManyStep(a, b - 1);
  } else {
    return 1 + howManyStep(a, b / 2);
  }
}
// this is editing using nano command in bash terminal
