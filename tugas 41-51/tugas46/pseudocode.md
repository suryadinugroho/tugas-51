program loop8

deskripsi:
i,j,n : angka

deklarasi:

masukkan n

untuk(i = 0 ; i < n; i++)
    untuk(j = 0 ; j < n; j++)
        jika ((i = j) atau (i + j = n - 1))maka 
              (cetak (j +1))
        lainnya 
              (cetak (" "))
    akhir untuk;
  cetak("/n/n")
akhir untuk