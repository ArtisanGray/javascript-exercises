function getLongestWordOfMixedElements(arr) {
  // your code here
  var lgst = 0;var longest;var count = 0;
  for (y = 0; y < arr.length; y++)
  {if (typeof arr[y] == 'string'){count += 1;}}
  if (count === 0 || arr.length === 0){return "";}
  if (count > 0 && arr.length > 0)
  {
    for (x = 0; x <arr.length; x++)
    {if (arr[x].length > lgst){lgst = arr[x].length;longest = arr[x];}}
    return longest;
    
  }
}
var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output);
