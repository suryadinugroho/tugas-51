function biaya(jammasuk, jamkeluar){
    if(jamkeluar >= jammasuk ){
        lama =  jamkeluar - jammasuk ;
     }else {
         lama = (12 - jammasuk)+jamkeluar ; 
     }
     
     if(lama > 2){
          biaya =2000 +(( lama -2)*500)
     }else{
         biaya =2000
     }
}

console.log('Rp.'+ biaya(10 , 11))
