// seorang pemuda merantau untuk belajar pemrograman,karena keterbatasan dana
// maka dia harus memperhtungkan biaya pengeluarannya.
// 1. jika harga kost 800.000 atau 600.000 rb berapa biaya 4 bulan ?
// 2. jika harga makan Rp.15.000 & 5000/dua hari ,minum 3000,rokok 20.000/dua hari. berapa biaya selama
// empat bulan jika makan 3x sehari dan atau makan 2x sehari.
// hitung TOTALnya

// JAWABAN
var biaya = {
  hargaKost   : [800000,600000],
  hargaMakan  : 15000,
  minum :[15000,5000]
};
for(var i =0; i<biaya.hargaKost.length;i++){
// console.log(i);
// console.log(biaya.hargaKost[i]);
var sub_biaya1 = [biaya.hargaKost[i]*4];
//console.log(sub_biaya1);
sub_biaya1.join("-");
  console.log(sub_biaya1);
  //var arr = [sub_biaya1];
for(var j=0 ;j<sub_biaya1[i[i]],length;j++){
console.log(sub_biaya1[j]);
//    console.log('biaya Kost 4 bulan * 800rb = ' +arr);
 }

}
