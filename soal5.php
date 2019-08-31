<?php
 //string yang akan dipecah
 $teks = "Mangga,Apel,Durian";
 //pecah string berdasarkan string "," 
 $pecah = explode(",", $teks);
 //mencari element array 0
 $hasil = $pecah[0];
 //tampilkan hasil pemecahan
 echo $hasil;
 ?>