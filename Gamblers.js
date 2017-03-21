/*
HACKTIV8 Online Live Coding 2

Nama : muhamad ridhoi

======================
Gambler's Slot Machine
======================

[DESKRIPSI]

Seorang pejudi melakukan pemutaran Slot Machine. Slot machine adalah sebuah
permainan judi kasino yang akan menghasilkan tiga angka (range angka hanya 1-9).

Rules:
1. Apabila ia mendapatkan 3 angka dengan nilai yang berbeda, ia kalah.
    Contoh:
    a. hasil Slot Machine adalah 1, 2, dan 3. Ia kalah.
2. Apabila ia mendapat 2 angka yang sama, ia akan mendapat cash sebesar total dari
setiap angka dikalikan dengan 100.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 2.
        Ia akan mendapat cash sebesar (1 + 1 + 2) * 100 = 400
    b.  hasil Slot Machine adalah 3, 5, dan 3.
        Ia akan mendapat cash sebesar (3 + 5 + 3) * 100 = 1100
3. Apabila ia mendapat 3 angka yang sama, ia akan mendapat cash sebesar total angka
tersebut dikalikan dengan 200.
    Contoh:
    a.  hasil Slot Machine adalah 1, 1, dan 1.
        Ia akan mendapat cash sebesar (1 + 1 + 1) * 200 = 600
    b.  hasil Slot Machine adalah 3, 3, dan 3.
        Ia akan mendapat cash sebesar (3 + 3 + 3) * 200 = 1800

[INSTRUKSI]

Tersedia sebuah function bernama evaluateSlotMachine yang menampung satu parameter,
berupa array yang berisikan tiga nilai hasil keluaran dari slot machine.

Buatlah sebuah function yang akan mengembalikan string berupa
"YOU WIN X DOLLARS" apabila tidak kalah, dimana X merupakan cash yang dimenangkan pejudi,
atau "YOU LOSE" apabila kalah (mendapatkan tiga angka berbeda dari slot machine).
*/


function evaluateSlotMachine(macine) {

  var temp=1;
  var temp2=0;
  for(var i=0;i<macine.length;i++){
    if(macine[i]==1 && 1 && 2){
      temp1= macine[i]+1+1+2*(100);

    }else{
      temp1= macine[i]== 3 && 5 && 3 ;
    }
    temp2=temp2+temp1;
  }

  return temp2;
}
console.log(evaluateSlotMachine([1, 1, 2])); // "YOU WIN 400 DOLLARS"
console.log(evaluateSlotMachine([1, 1, 1])); // "YOU WIN 600 DOLLARS"
console.log(evaluateSlotMachine([5, 5, 5])); // "YOU WIN 3000 DOLLARS"
console.log(evaluateSlotMachine([6, 3, 3])); // "YOU WIN 1200 DOLLARS"
console.log(evaluateSlotMachine([1, 3, 2])); // "YOU LOSE"
