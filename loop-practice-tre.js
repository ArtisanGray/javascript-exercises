function owassoRams(n){
  lib = []
  for (x = 1; x == n; x++)
  {
     if (x % 3 !== 0 && x%5 !== 0) {lib.push(x);}
     if (x % 3 === 0 && x % 5 === 0) {lib.push("OwassoRams");}
     if (x % 3 === 0 && x % 5 !== 0) {lib.push("Owasso");}
     if (x % 5 === 0 && x % 3 !== 0){lib.push("Rams");}
  }
  return lib;
}
var output = owassoRams();
console.log(output);
