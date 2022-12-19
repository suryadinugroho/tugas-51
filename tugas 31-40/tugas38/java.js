let v =10;
let detik =0;
let jarak = 0;

while(jarak < 100000){
    detik++;
    jarak = jarak + v;
    if(detik % 600 == 0){
        v++;
    }
}
jam = detik /3600 ;
detik = detik % 3600;

menit = detik / 60;
detik1 = detik % 60;

console.log(Math.round (jam)+" jam",Math.floor (menit)+" menit",(detik1)+" detik")