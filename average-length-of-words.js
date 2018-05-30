function computeAverageLengthOfWords(word1, word2) {
  // your code here
  arr = [word1, word2]; avg = arr.join('').length / arr.length;
  return avg
  
}
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output);
