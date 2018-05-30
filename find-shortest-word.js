function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var arr = [word1, word2, word3]; var arr2 = []; var x;
  for (x = 0; x < arr.length;x++)
  {arr2.push(arr[x].length);}
  arr2.sort(); return(arr2[0])
}
var output = findMinLengthOfThreeWords('a', 'be', 'see');console.log(output)
