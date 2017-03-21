/*
HACKTIV8 Online Live Coding 2

Nama: 

============
The Gamblers
============

Seorang pejudi melakukan mengocokan dadu sebanyak tiga kali.
Ia akan mendapat cash sebesar 100 dikalikan dengan jumlah angka
yang keluar dari dadu, apabila bukan 1.

Apabila keluar angka 1, ia akan mendapatkan denda cash senilai 1000.
Hasil tiga kali pengocokan dadu akan dimasukkan ke dalam array, yang
menjadi parameter ke fungsi rollDice.

[PERINTAH]
Buatlah sebuah fungsi rollDice!
rollDice adalah sebuah function yang menerima satu parameter berupa array.
Isi dari array pasti 3 nilai yang merupakan nilai dari dadu. Kamu tidak
perlu melakukan validasi nilai dadu lagi. Function akan mengembalikan nilai
hanya berupa angka.
Kamu hanya perlu mengubah code di bagian dalam fungsi!

Contoh 1:
hasil dadu = [2, 3, 4]
cash = (2 * 100) + (3 * 100) + (4 * 100) = 900

Contoh 2:
hasil dadu = [3, 3, 1]
cash = (3 * 100) + (3 * 100) + (1 * -1000) = -400

Contoh 3:
hasil dadu = [1, 6, 6]
cash = (1 * -1000) + (6 * 100) + (6 * 100) = 200
*/

function rollDice(diceResultsParam) {

  var temp=1;
  var temp2=0;
  for(var i=0;i<diceResultsParam.length;i++){
    if(diceResultsParam[i]==1){
      temp1= diceResultsParam[i]*(-1000);

    }else{
      temp1= diceResultsParam[i]*100;
    }
    temp2=temp2+temp1;
  }

  return temp2;
}

console.log(rollDice([2, 3, 4])); // 900

console.log(rollDice([3, 3, 1])); // -400

console.log(rollDice([1, 6, 6])); // 200
