let u = 1000000;
let i = 1;

while(i <= 10){
  b= u * 0.02;
  u = u + b;
  i++;
}

console.log(Math.round (u))
