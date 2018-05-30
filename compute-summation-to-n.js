function computeSummationToN(n) {
  // your code here
  var n2 = 0
  for(x =0; x<n+1; x++)
  {n2 += x}
  return n2
}
var output = computeSummationToN(6);
console.log(output); 
