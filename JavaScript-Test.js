// Question 1. Area and Perimeter
function ellipseArea(a,b){return 3.14*(a*b);}
function ellipsePerimeter(a,b){return 2*(3.14*Math.sqrt((a**2+b**2)/2))}
console.log(ellipseArea(5,10)) // --> 157
console.log(ellipsePerimeter(5,10)) // --> 49.64

// Question 2. Filtering odd length words
function filterOddLengthWords(arr){
  newarr = [];
  for(x = 0; x<arr.length; x++)
  {
    if(arr[x].length % 2 !== 0)
    {newarr.push(arr[x]);}
  }
  return newarr;
}
var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
