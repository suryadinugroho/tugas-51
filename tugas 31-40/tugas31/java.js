let d = 74 ;
let j = 0 ;
let m = 0 ;

while( d >= 3600){
    d = d - 3600 ; 
    j++;
}

while(d >= 60){
    d = d - 60;
    m++;
}

console.log( j + (" jam"), (m +' menit') ,d + (" detik"))
