function select(arr, obj) {
  // your code here
  var s = {};
  var l = Object.keys(obj);
  var l2 = Object.values(obj);
  var l3 = Object.entries(obj);
  for(x = 0; x < arr.length; x++)
  {
    for(y = 0; y < Object.keys(obj).length; y++)
    {
      if(arr[x] === l[y])
      {
        s[arr[x]] = l2[y];
      }
    }
  }
  return s;
  
}
var arr = ['a', 'c', 'e'];
var obj = {a: 1,b: 2,c: 3,d: 4};

var output = select(arr, obj);
console.log(output);
