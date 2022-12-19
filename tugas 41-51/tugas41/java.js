//let n = 4

function hasil1(n) {
    let hasil ='';
    for (i = 0 ; i < n ; i++){
        for(j = 0 ; j < n ; j++){
            hasil += i+1;
        }
        hasil += '\n\n';
    }
    return hasil;
}

console.log(hasil1(4));