program biaya_parkir

deklarasi:
jam masuk, jam keluar, lama , biaya :angka

deskripsi:
masukkan jam masuk
masukkan jam keluar

jika (jam keluar >= jam masuk)maka
    lama = jam keluar - jam masuk
  lainnya 
     lama = (12 - jam masuk)+keluar
  berakhir

jika(lama > 2)maka
    biaya = 2000 + ((lama - 2)*500)
  lainnya 
    biaya = 2000

  keluarkan (biaya)   
