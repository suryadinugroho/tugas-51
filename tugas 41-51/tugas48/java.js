let n = 5

function hasil1(){
     let hasil = ' ';
    for (i = 0 ; i < n ; i++){
        for(j = 0 ; j < n-1 ; j++){
            if((i==j)|| (i+j == n-1)){
                hasil += j+1;
            }else{
                hasil += " ";
            }
        }
       hasil += "\n";
    }
    return hasil ;
}
console.log(hasil1())