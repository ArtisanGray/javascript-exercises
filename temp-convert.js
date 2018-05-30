function cToF(celsius) {
  var conversion = (celsius*1.8)+32;
  console.log(celsius+ "\xB0C"+" is "+ conversion + " \xB0F.")//concatenation.
  // this is celsius to Fahrenheit
}

function fToC(fahrenheit) {
  var conversion = (5/9)*(fahrenheit-32);
  console.log(fahrenheit+"\xB0F"+" is " + conversion + "\xB0"+"C.")
  // this is Fahrenheit to Celsius
}

cToF(60);
fToC(45);
