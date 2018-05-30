function noDuplicates(phrase){
  p2 = phrase.split(" ").sort();
  p3 = [];
  for (x=0;x<p2.length-1; x++)
  {
    if(p2[x + 1] == p2[x]||p2[x]== p2[x-1])
    {p3.push(p2[x+1]);}
  }
  if(p3.length > 0)
  {return "no"}
  else if(p3.length === 0)
  {return "yes"}
}
noDuplicates("IN THE RAIN AND THE SNOW");
