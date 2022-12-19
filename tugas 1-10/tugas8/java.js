let gajipokok = 1000000;
let jmlAnak = 3 ;

function tunjangan(){
  if(jmlAnak <= 3 && jmlAnak > 0){
     let tunjangan = jmlAnak * 0.1*gajipokok;
         return tunjangan;
  }else if(jmlAnak > 3){
    let tunjangan = 3 * gajipokok;
         return tunjangan;
  }else{
    let tunjangan = 0;
         return tunjangan;
  }
}

console.log(tunjangan())