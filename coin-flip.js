var f = prompt("Total coin flips: ");
var t = 0;
var h = 0;
if (f != null) {
    console.log("Total coin flips: ", f);
    console.log("======================");
    for (x=0;x < f; x++)
    {
      var num = Math.floor(Math.random()*2);
      if (num === 1){t += 1}
      if (num === 0){h += 1}
    }
    console.log("Heads ", h);
    console.log("Tails ", t);
}
