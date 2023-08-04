// ********** Kosullarla Calismak **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// let username = prompt("Kullanici Adinizi Giriniz:")
// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

// if (username.length > 0) {  // if kismi her zaman true ise calisir
//     console.log(`Kullanici Bilginiz ${username}`)
// } else {
//     console.log("YAZI GIR BRO")
// }

// var x = 9;
// var y = 7;

// if (x > y) {
//   console.log(x + " sayisi" + y + " sayısından büyüktür.");
// } else {
//   console.log(y + " sayisi" + " " + x + " sayısından büyüktür.");
// }

// Ortalama hesaplama
// let ogrVizeNot = prompt("Vize Notunuzu Giriniz:");
// let ogrFinalNot = prompt("Final Notunuzu Giriniz:");
// var ogrOrtalama = ogrVizeNot * 0.4 + ogrFinalNot * 0.6;
// if (ogrOrtalama >= 0 && ogrOrtalama <= 40) {
//   console.log("Not Ortalamanız: " + ogrOrtalama + " Kaldınız (FF)");
// } else if (ogrOrtalama >= 41 && ogrOrtalama <= 45) {
//   console.log("Not Ortalamanız: " + ogrOrtalama + " Koşullu Geçtiniz (DD)");
// } else if (ogrOrtalama >= 46 && ogrOrtalama <= 49) {
//   console.log("Not Ortalamanız: " + ogrOrtalama + " Koşullu Geçtiniz (DC)");
// } else if (ogrOrtalama >= 50 && ogrOrtalama <= 59) {
//   console.log("Not Ortalamanız: " + ogrOrtalama + " Geçtiniz (CC)");
// } else if (ogrOrtalama >= 60 && ogrOrtalama <= 69) {
//   console.log("Not Ortalamanız: " + ogrOrtalama + " Geçtiniz (CB)");
// } else if (ogrOrtalama >= 70 && ogrOrtalama <= 75) {
//   console.log("Not Ortalamanız: " + ogrOrtalama + " Geçtiniz (BB)");
// } else if (ogrOrtalama >= 76 && ogrOrtalama <= 79) {
//   console.log("Not Ortalamanız: " + ogrOrtalama + " Geçtiniz (BA)");
// } else if (ogrOrtalama >= 80) {
//   console.log("Not Ortalamanız: " + ogrOrtalama + " Geçtiniz (AA)");
// }

//VÜCUT KİTLE ENDEKSİ

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Geçerli bir kilo ve boy değeri giriniz.");
      return;
    }

    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2);

    let resultText = `Beden Kitle Endeksi (BMI): ${bmiRounded}\n`;
    resultText += "Durum: ";

    if (bmi < 18.5) {
      resultText += "Zayıf";
    } else if (bmi < 24.9) {
      resultText += "Normal";
    } else if (bmi < 29.9) {
      resultText += "Fazla Kilolu";
    } else {
      resultText += "Obez";
    }

    document.getElementById("result").innerText = resultText;
  }
