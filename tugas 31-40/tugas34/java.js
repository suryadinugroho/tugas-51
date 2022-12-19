let t = 0;
let n = 10;
let i = 1;

while ( i <=100){
    t = t + n;
    n = n * 0.8
    i++
}
console.log(Math.round (t)+"kg")