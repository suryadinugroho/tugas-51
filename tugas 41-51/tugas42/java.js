let n = 4

function hasil1() {
    let hasil ='';
    for (i = 0 ; i < n ; i++){
        for(j = 0 ; j < n - i ; j++){
            hasil += j+1;
        }
        hasil += '\n\n';
    }
    return hasil;
}

console.log(hasil1(n));

