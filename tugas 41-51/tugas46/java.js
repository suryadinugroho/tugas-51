let n = 5;

function hasil(){
    for (i = 0 ; i < n ; i++){
        for(j = 0 ; j < n ; j++){
            if( (i = j)|| (i + j == n-1)){
                hitung += j+1;
            }else{
                hitung += " ";
            }
        }
        hitung += "\n";
    }
    return hitung
}

console.log(hasil())