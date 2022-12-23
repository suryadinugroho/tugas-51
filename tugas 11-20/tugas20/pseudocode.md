program bintang_x

deklarasi:
i,j,k,l,m:angka

deskripsi:

masukkan k
l = 1
m = k

untuk(i = 1 ; i <= k ; i++)
      untuk(j = 1 ; j <= k ; j++)
            if(i = j || j = m)maka
                cetak(j)
            lainnya
                cetak (" ")
            akhir jika
      akhir untuk
   cetak("/n")
   m--
akhir untuk
