let berangkatbadu = 9 * 3600;
let t = 1;
let jarakbadu = 0;
let jarakali = 3600 * 5;


while(jarakbadu < jarakali ){
        jarakali = jarakali +5;
        jarakbadu = jarakbadu +8;
        t++;
    }
     let jambertemu = berangkatbadu + t;
     let jam = jambertemu / 3600;
     let detik = jambertemu % 3600;
     let menit =detik / 60; 
     let detik1 = detik %60;

     console.log(Math.round (jam)+" jam",Math.floor(menit)+" menit",(detik1)+" detik")