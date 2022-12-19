let upah;
let golongan = '1';
let jam = 50;

switch (golongan){
  case '1':
    upah = 3000;
    break;
  case '2':
    upah = 3500;
    break
  case '3':
    upah = 4000;
    break
  case '4':
    upah = 5000;
    break
  default:
    console.log("golongan salah")      
}

function gaji(jam, upah){
  if( jam > 40){
   let gaji = 40*upah+((jam-40)*1.5*upah)
   return gaji
}else{
   let gaji = jam * upah
   return gaji
}
}

console.log(gaji(jam, upah))