program faktorial

deklarasi:
i,j,k :angka

deskripsi:
total gaji = 0
masukkan (karyawan)
  
     untuk(i = 1 ; i <= karyawan ; i + 1)
                cetak("jam kerja karyawan")
     input (jam)
         jika(jam > 7)maka
                 lembur = jam -7
                 gaji = 7 * 10000 + lembur * 1.5 * 10000
         lainnya
                 gaji = jam * 10000
         berakhir jika
     cetak (gaji)
     total gaji = total gaji + gaji
     berakhir sementara

     cetak (total gaji)