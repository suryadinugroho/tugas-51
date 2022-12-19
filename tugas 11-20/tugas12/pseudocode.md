algoritma menghitung_pembayaran_listrik

deklarasi:
golongan ,pakai , tarif , bayar: angka

deskripsi:

masukkan golongan
masukkan pakai

jika(golongan = 1)maka
      tarif = 1000;
lainnya 
      tarif = 2000;

jika(pakai < 100)maka
      bayar = 100 * tarif;
jika lainnya (pakai >= 1000)
      bayar = pakai * tarif * 1.1;
lainnya 
      bayar = pakai * tarif;

cetak (bayar)      