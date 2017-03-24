// seorang pemuda merantau untuk belajar pemrograman,karena keterbatasan dana
// maka dia harus memperhtungkan biaya pengeluarannya.
// 1. jika harga kost 800.000 atau 600.000 rb berapa biaya 4 bulan ?
// 2. jika harga makan Rp.15.000 & Aqua 5000/dua hari ,minum 3000,rokok 20.000/dua hari. berapa biaya selama
// empat bulan jika makan 3x sehari dan atau makan 2x sehari.
// hitung TOTALnya

// JAWABAN
var biaya = {
  hargaKost   : [800000,600000],
  hargaMakan  : 15000,
  minum :[3000,5000],
  rokok :20000
};
var sub_biaya1 = [biaya.hargaKost[0]*4];
var sub_biaya2 = [biaya.hargaKost[1]*4];
var sub_biaya3 = [(biaya.hargaMakan*3)*(30*4)];
var sub_biaya3_sub = [(biaya.hargaMakan*2)*(30*4)];
var sub_biaya4 = [(biaya.minum[0]*3)+(biaya.minum[1]*15)*4];
var sub_biaya4_sub = [(biaya.minum[0]*2)+(biaya.minum[1]*15)*4];
var sub_biaya5 = [(biaya.rokok*15)*4];
var totalA = Number(sub_biaya1) +Number(sub_biaya2) +Number(sub_biaya3) + Number(sub_biaya4) + Number(sub_biaya5);
var totalB = Number(sub_biaya1) +Number(sub_biaya2) +Number(sub_biaya3_sub) + Number(sub_biaya4_sub) + Number(sub_biaya5);
console.log('Biaya Kost selama 4 bulan x 800 = '+sub_biaya1);
console.log('Biaya Kost selama 4 bulan x 600 = '+sub_biaya2);
console.log('Biaya Makan 15rb x 3 sehari x 4bulan = '+sub_biaya3);
console.log('Biaya Makan 15rb x 2 sehari x 4bulan = '+sub_biaya3_sub);
console.log('Biaya Minum 300rb x 3 sehari + Aqua 5rb 2 hari sekali x 4 bulan= '+sub_biaya4);
console.log('Biaya Minum 300rb x 2 sehari + Aqua 5rb 2 hari sekali x 4 bulan= '+sub_biaya4_sub);
console.log('Biaya Rokok 2hari sekali = 20rb x 15 x 4 bulan = '+sub_biaya5);
console.log('*******************************************************************************************************');
console.log('*  Biaya Hidup jika 3x makan minum + aqua dan sampoernaMild 2 hari sekali selama 4 bulan = '+totalA+' *');
console.log('*  Biaya Hidup jika 2x makan minum + aqua dan sampoernaMild 2 hari sekali selama 4 bulan = '+totalB+' *');
console.log('*******************************************************************************************************');

//https://jsbin.com/xuvudi/edit?js,console