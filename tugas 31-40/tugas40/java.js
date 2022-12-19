let n = 5

function hasil1(){
     let hasil = ' ';
    for (i = 0 ; i < n ; i++){
        for(j = 0 ; j < n ; j++){
           hasil += j+1;
        }
       hasil += "\n\n";
    }
    return hasil ;
}
console.log(hasil1())