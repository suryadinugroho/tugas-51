program gaji_karyawan_mingguan

deklarasi:
golongan,jam:angka

deskripsi:
masukkan golongan 
masukkan jam 

kasus(golongan)
      1.upah = 3000
      2.upah = 3500
      3.upah = 4000
      4.upah = 5000

jika(jam > 40)maka
     gaji = 40 * upah + ((jam - 40)* 1.5 * upah)
  lainnya
     gaji = jam * upah

cetak(gaji)               