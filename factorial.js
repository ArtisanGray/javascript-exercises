sam = [];
function computeFactorialOfN(n) {
  // your code here
  x2 = 0;
  x3 = 0;
  if(n===0||n===1)
  {return 1;}
  if(n>0)
  {return x2 = computeFactorialOfN(n-1)*n;}
}
var output = computeFactorialOfN(3);
console.log(output); // --> 6
