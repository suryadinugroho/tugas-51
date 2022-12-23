program ubah_detik

deklarasi:
j,m,d :angka

deskripsi:
masukkan d
j = 0
m = 0

ketika(d >= 3600)
       d = d - 3600
       j++

ketika(d >= 60)
       d = d - 60
       m++

cetak(j,m,d)