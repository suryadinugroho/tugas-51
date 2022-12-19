program menghitung_tunjangan

deklarasi :
gajipokok , tunjangan, jmlanak:angka

deskripsi:

masukkan gajipokok
masukkan jmlanak

jika(jmlanak <= 3 & jmlanak > 0)maka
        tunjangan = jmlanak * 0.1 * gajipokok
jik lainnya (jmlanak > 3)
        tunjangan = 3 * 0.1 * gajipokok
lainnya
        tunjangan = 0

cetak(tunjangan)