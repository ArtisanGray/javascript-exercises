function flipPairs(input)
{
  var array = input.split('');
  var result = [];
  for (var i = 0; i < array.length; i += 2) {
    result.push(array[i + 1], array[i]);
  }
    return result.join('');
}
