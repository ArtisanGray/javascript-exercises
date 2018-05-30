function countCharacter(str, char) {
  // your code here
  var count = 0;
  for (x=0; x < str.length; x++)
  {
    if (str.charAt(x) == char)
    {count+=1}
  }
  return count;
  
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); 
