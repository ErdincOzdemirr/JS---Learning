let info = document.querySelector("#info");
let hava = prompt("Hava Bilgisi Giriniz");
switch (hava) {
  case "Yağmurlu":
    info.innerHTML = "Semsiyeni yanına almayı unutma";
    break;
  case "Güneşli":
    info.innerHTML = "Hafif Giyin";
    break;
  case "Bulutlu":
    info.innerHTML = "Disari Çık";
    break;
  case "Karlı":
    info.innerHTML = "Kalin giyin";
    break;
  case "Firtinali":
    info.innerHTML = "Bir süre disari cikma";
    break;
  default:
    info.innerHTML = "Bilinmeyen hava durumu : " + hava;
}
