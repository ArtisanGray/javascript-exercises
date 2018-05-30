function greenTicket(a, b, c) {
  d = 0;
  if (a == b){d= 10;}
  if (a == c){d= 10;}
  if (b == c){d= 10;}
  if(a==b && b==c){d= 20;}
  return d;
}
greenTicket(1, 2, 3)
greenTicket(2, 2, 2)
greenTicket(1, 1, 2)
