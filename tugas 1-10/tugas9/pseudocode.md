program menghitung_minibus

deklarasi:
peserta, minibus : angka

deskripsi:

masukkan peserta
minibus = 0

jika(peserta > 7)maka
          minibus = peserta / 7
    jika(peserta % 7 != 0)maka
                 minibus = minibus +1
jika lainnya(peserta > 0)maka
          minibus = 1

cetak(minibus)