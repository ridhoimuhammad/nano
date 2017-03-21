/*
HACKTIV8 Final Live Coding 3

Nama :muhamad ridhoi

======================
Pair Programming
======================

[DESKRIPSI]
HACKTIV8 adalah kelas pemrograman yang sedang menyusun susunan Pair Programming.
Setiap murid di kelas akan dibagi menjadi kelompok beranggotakan dua orang.
Apabila jumlah murid di kelas ganjil, instruktur yang akan menemani satu orang yang tersisa.

Buatlah susunan pasangan Pair Programming di kelas!

[INSTRUKSI]
Tersedia sebuah function bernama arrangePairs yang akan menerima satu parameter berupa array,
yang berisikan nama-nama murid di kelas. function akan mengembalikan sebuah array baru yang
merupakan kelompok-kelompok pembagian tersebut.

[START]
*/

function arrangePairs(studentsArr) {
var student = [['Yani', 'Joni', 'Doni', 'Roni', 'Doni'],
               ['James', 'Jake', 'Jade'],
               ['Tori', 'Nori', 'Sori', 'Wori', 'Mori'],
               ['Rudi']];

}


console.log(arrangePairs(['Yani', 'Joni', 'Doni', 'Roni', 'Doni'])); // ['Yani dan Joni', 'Doni dan Roni']
console.log(arrangePairs(['James', 'Jake', 'Jade'])); // ['James dan Jake', 'Jade dan Instruktur']
console.log(arrangePairs(['Tori', 'Nori', 'Sori', 'Wori', 'Mori'])); // ['Tori dan Nori', 'Sori dan Wori', 'Mori dan Instruktur'];
console.log(arrangePairs(['Rudi'])); // ['Rudi dan Instruktur']
console.log(arrangePairs([])); // []
