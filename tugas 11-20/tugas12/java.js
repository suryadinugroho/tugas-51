let gol = 1;
let pakai = 1000;

if (gol == 1){
    tarif = 1000
}else{
    tarif = 2000;
}

if(pakai < 100){
    bayar = 100 * tarif;
}else if(pakai >= 1000){
    bayar = pakai * tarif * 1.1;
}else{
    bayar= pakai * tarif;
}
console.log(bayar)