let n = 6;

function hasil1() {
    let hasil ='';
    for (i = 0 ; i < n ; i++){
        for(j = 0 ; j < i + 1 ; j++){
            hasil += i+1;
        }
        hasil += '\n\n';
    }
    return hasil;
}

console.log(hasil1(n));

