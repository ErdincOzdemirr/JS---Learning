// ********** Coklu Kosullarla Calismak **********

// let userName = prompt("Kullanici Adiniz: ");
// let age = prompt("Yasiniz: ");
// let info = document.querySelector("#info");

// if (userName.length > 0 && age >= 18) {
//   info.innerHTML = "Ehliyet alabilirsiniz";
// } else if (!userName) {
//   info.innerHTML = "Kullanici Adiniz Yok";
// } else if (!(age >= 18)) {
//   info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz";
// }

//Hava Durumu APP
let hava = prompt(
  "Hava Durumunu (Yagmurlu, Gunesli, Bulutlu, Karlı, Firtinali) giriniz)"
);
switch (hava) {
  case "Yagmurlu":
    console.log("Semsiyeni yanina almayi unutma");
    break;
  case "Gunesli":
    console.log("Hafif giyin");
  case "Bulutlu":
    console.log("Disari cik");
    break;
  case "Karlı":
    console.log("Kalin giyin");
    break;
  case "Firtinali":
    console.log("Bir süre disari cikma");
    break;
  default:
    console.log("Bilinmeyen hava durumu:", hava);
}
