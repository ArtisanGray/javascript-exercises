function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  tx = preTaxAndTipAmount * 0.095;
  ti = preTaxAndTipAmount * 0.15;
  return(preTaxAndTipAmount + tx + ti);
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9
