let karyawan =3;

for (let i = 1 ; i <= karyawan ; i++){
    console.log(i);
}
let jam = 8;
let lembur = jam - 7;


function gaji(){
  if(jam > 7 ){
   let gaji = (7 * 10000) + lembur * 1.5 * 10000;
   return gaji
}else{
  let gaji =jam * 10000;
  return gaji
}
}
console.log(gaji())