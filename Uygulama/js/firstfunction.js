let userName = prompt("Adınızı Giriniz");
let age = prompt("Yaşınızı Giriniz");
function userCheck() {
  if (userName && age >= 18) {
    info.innerHTML = "ehliyet alabilirsiniz";
  } else if (!userName) {
    info.innerHTML = "Kullanici Adiniz Yok";
  } else if (!(age >= 18)) {
    info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz";
  }
}
userCheck();
