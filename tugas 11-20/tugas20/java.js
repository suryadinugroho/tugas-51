let k = 9;
let i = 1;
let m = k ;

function hasilnya(){
    let hasil = ' ';
    for(i= 1;i<=k;i++){
        for(j=1; j<=k ;j++){
            if(i==j || j==m){
                hasil += j ;
            }else{
                hasil += ' ';
            }
        }
         hasil += "\n";
        m--;
    }
    return hasil;
}

console.log(hasilnya())