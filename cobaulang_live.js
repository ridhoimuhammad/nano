// /* belom jadi
// var siswa = {
//   nama    :["nanik","vika","wulan","ali"],
//   umur    :[28,27,21,25],
//   alamat  :["pati","ungaran","sragen","ungaran"]
// };
// for(var i = 0; i<siswa.nama.length&&i<siswa.nama.length&&i<siswa.alamat.length;i++){
// console.log(siswa.nama[i],siswa.umur[i],siswa.alamat[i]);
// console.log(siswa.umur);
// console.log(siswa.alamat);
// }
// */
///////////////////////////////
// https://jsbin.com/vanogiz/edit?js,console
// MELAWAN LUPA
//////////////////////// cobaulang_live.js
var siswa1 = {
  nama    :"nanik",
  umur    :28,
  alamat  :"pati"
};
var siswa2 = {
  nama    :"vika",
  umur    :27,
  alamat  :"ungaran"
};
var siswa3 = {
  nama    :"wulan",
  umur    :21,
  alamat  :"sragen"
};
var siswa4 ={
  nama    :"ali",
  umur    :25,
  alamat  :"ungaran"
};
var arr =[siswa1,siswa2,siswa3,siswa4];
for(var i =0; i<arr.length;i++){
  console.log("Nama          : "+arr[i].nama);
  console.log("umur          : "+arr[i].umur);
  console.log("Alamat        : "+arr[i].alamat);
  console.log("--------------------------");
}
for(var i=0;i<arr.length;i++){
  if(arr[i].alamat=="ungaran"){
    console.log(arr[i].nama);

}
}
}
