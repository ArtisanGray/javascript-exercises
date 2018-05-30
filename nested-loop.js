var a = 0; var b = 0;
for (x = 0; x < 11; x++)
{
  console.log(a+ " TIMES TABLE");
  for (y = 0; y < 11; y++)
  {
    console.log(a+" x "+b+" = "+(a*b));
    b += 1;
  }
  b = 0;
  a += 1;
}
