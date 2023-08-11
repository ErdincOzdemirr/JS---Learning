// 1. function mesajVer() {
//   alert("Herkese Merhaba!");
// }
// mesajVer();

// 2. function mesajVer(ad, soyad) {
//   alert(`Merhaba ${ad}${soyad}`);
// };
// mesajVer("Erdinç", "Özdemir");

// 3. function topla(sayi1, sayi2){
//   return sayi1+sayi2
// };
// var sonuc = topla(10,20);
// alert(sonuc);

// 4.Geridönüş (return value)
//  function carp(sayi1, sayi2) {
//   return sayi1 * sayi2;
// }
// result = carp(10, 20);
// console.log(result);//200

// var ekle = function topla(sayi1, sayi2) {
//   return sayi1 + sayi2;
// };
// var sonuc1 = ekle(10, 30);
// console.log(sonuc1);//40

// 5. Arrow Functions
// const carpim = (sayi1, sayi2) => sayi1 * sayi2;
// Daha uzun hali ise;
// const carpim = function (sayi1, sayi2) {
//   return sayi1 * sayi2;
// };

// console.log(carpim(3, 5));

// let experience = prompt("Kaç Yıllık Tecrübeniz Var?", 4);
// const developer =
//   experience < 5
//     ? () => alert("Bir çok konuyu biliyorum")
//     : () => alert("Hiçbir şey bilmiyorum.");

// developer();

// let toplam = (a, b) => {
//   let result = a + b;
//   return result;
// };
// console.log(toplam(1, 2));

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// alert(pow(2, 3)); //8

// recursion
// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// alert(pow(2, 3));

// {
//   let message = "Merhaba";
//   console.log(message); //mesaj görünür
// }
// console.log(message); //mesaj yok

// if (true) {
//   let message = "Merhaba";
//   console.log(message);//merhaba
// }
// console.log(message);//undefined

// function stringFormat(str) {
//   {
//     let part1 = str.slice(0, 3);
//     let part2 = str.slice(3);
//     str = part1.toUpperCase() + part2;
//   }
//   //part1 ve part2 kullanılamaz.
//   //bir kosula baglı return edelim. basit olması acısından sadece true yazdım.
//   if (true) {
//     return str;
//   }
//   return str.slice(4);
// }

// 8. Nested Functions
// function programDetayi(bootcamp, organizasyon) {
//   const tumProgram = () => bootcamp + "" + organizasyon;
//   console.log("Başladı, " + tumProgram());
//   console.log("Bitti, " + tumProgram());
// }

//nested functions
// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2
