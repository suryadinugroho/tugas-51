let n = 4;

function hasilnya(){
    let hasil = ' ';
    for(i = 0;i < n; i++){
        for(j = 0; j < n; j++){
            if(i + j == n-1){
    hasil += j + 1;
            }else{
    hasil += " ";
            }
        }
    hasil += "\n";
    }
    return hasil;
}

console.log(hasilnya())