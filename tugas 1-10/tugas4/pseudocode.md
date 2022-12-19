program harga_barang

deklarasi:
kode, harga:angka
jenis:karakter

deskrpsi:
masukkan jenis
masukkan kode
masukkan harga

beralih(jenis){
         kasus 'A':
         diskon = 10;
         harga diskon = 0,9 * harga;
    istirahat;
         kasus 'B':
         diskon = 15;
         harga diskon = 0,85 * harga;
    istirahat;
         kasus 'C';
         diskon = 20;
         harga diskon = 0,8 * harga;
    istirahat
         bawaan:          
         cetak ("inputan salah")
}    

cetak(harga diskon)