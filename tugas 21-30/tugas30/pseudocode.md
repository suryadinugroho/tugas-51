program cek_prima

deklarasi:
niali, x, batasatas, penanda:angka

deskripsi:

masukkan nilai
x = 2
batasatas = nilai - 1
penanda = 0

ketika(penanda = 0 & x <= batasatas)
       jika(nilai % x = 0)maka
            penanda = 1
x = x + 1
berakhir sementara

jika(penanda = 0)maka
     cetak ("prima")
lainnya 
     cetak("bukan prima")

