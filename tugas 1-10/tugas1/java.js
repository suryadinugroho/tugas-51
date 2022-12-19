var masuk = 10;
var keluar = 3;

function menentukanlamakerja(){
   if(keluar >= masuk ){
   return( keluar - masuk + ' jam')
   }else{
   return( (12 - masuk)+keluar +' jam')   
   }
}

console.log(menentukanlamakerja())