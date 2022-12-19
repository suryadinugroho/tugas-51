let diskon;
let jenis = 'B';
let harga = 10000;

switch (jenis){
  case 'A':
  diskon = 10;
    diskon = 0.9*harga;
    break;
  case 'B':
  diskon = 15;
    diskon = 0.85*harga;
    break
  case 'C':
  diskon = 20;
    diskon = 0.8*harga;
    break
  default:
    console.log("inputan salah")      
}

console.log(diskon)