program menghitung_bulan_pernikahan

deklarasi:
bulansekarang,bulan,bulanpernikahan:angka

deskripsi:
masukkan bulansekarang
masukkan bulan

jika ((bulanasekarang + bulan)<= 12)maka
       bulanpernikahan = bulansekarang + bulan
    lainnya
       bulanpernikahan = (bulansekarang + bulan)%2

  cetak(bulanpernikahan)     
