function acronymMaker (str) {
  var s = str.split(" ");
  var s2 = "";
  for (x = 0; x < s.length; x++)
  {
    s2 += s[x].charAt(0);
  }
  return s2;
}
output = acronymMaker("Portable Network Graphics");
console.log(output);
