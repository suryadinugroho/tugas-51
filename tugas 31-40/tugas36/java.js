let jam1 = 8*3600 + 25*60 + 10;
let jam2 = 10*3600; 
let jumwaktu = jam2 - jam1;
let interval = 10 * 60;
let juminterval = jumwaktu / interval;
let sisawaktu = jumwaktu % interval;

let v=5
let ts= 0
let i=1

while(i <= interval){
  s = interval * v;
  ts = ts + s;
  v = v + 1;
  i++;
}
ts = ts + (sisawaktu*v)

console.log(ts)