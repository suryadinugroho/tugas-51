let k = 4;

function segitiga1() {
    let hasil = '';
    for (let i = 0; i < k; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(k));