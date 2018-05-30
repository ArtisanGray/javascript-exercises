function computeSumBetween(num1, num2) {
  // your code here
  var n2 = 0;
  if (num2 > num1)
  {
    for(x = num1; x < num2; x++)
    {
      n2 += x;
    }
    return(n2);
  }
  else
  {
    return(0)
  }

}
var output = computeSumBetween(2,5);
console.log(output); 
