/*
HACKTIV8 Online Live Coding 1

Nama: 

==========
THE RUNNER
==========

Berikut ini merupakan data anak-anak muda yang berhasil selamat dari bencana tersebarnya virus ganas yang mematikan hampir
mematikan seluruh penduduk bumi. Anak-anak muda yang berhasil selamat disini, disebut dengan runner, Karena mereka harus
terus berlari / berpindah tempat untuk tetap hidup.

[PERINTAH]
Buatlah 4 buah Runner sebagai Object secara JSON dengan yang struktur didalam nya terdapat:
Name , Age ,  dan Skill

Name  Age  Skill
Thomas  28   Visioning
Teresa  35   Cooking
Fry Pan 21   Crafting
Gally   32   Fighting

Masukan ke 4 Object tersebut pada sebuah Array
Buat Iterasi sebanyak jumlah Object
Buat akses setiap property

[CONTOH]
Array[index].objectProperty

Tampilkan informasi seperti contoh berikut:

Nama : Thomas
Age : 28
Skill : Visioning

Hitunglah Runner yang Umur nya di antara 20 dan 30 dan tampilkan Namanya

Runner Between 20 - 30 : NamaRunner-1, NamaRunner-2

*/


//Mulai Code dibawah ini

var Runner1 = {
  name   : "Thomas",
  age    : 28,
  skill   : "Visioning"
}
var Runner2 = {
  name   : "Teresa",
  age    : 35,
  skill   : "Cooking"
}
var Runner3 = {
  name   : "Fry Pan",
  age    : 21,
  skill   : "Crafting"
}
var Runner4 = {
  name   : "Gally",
  age    : 32,
  skill   : "Fighting"
}



var arr= [Runner1,Runner2,Runner3,Runner4];

for(var i=0;i<arr.length;i++){
  console.log("Name : "+arr[i].name);
  console.log("Age : "+arr[i].age);
  console.log("Skill : "+arr[i].skill);
  console.log("\n");
}
console.log("Runner Between 20 - 30 :");

for(var i=0;i<arr.length;i++){
  if(arr[i].age>=20 &&arr[i].age<=30){
    console.log(arr[i].name);

  }
}
