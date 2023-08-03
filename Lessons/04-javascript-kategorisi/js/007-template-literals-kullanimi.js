// ********** Template Literals Kullanimi **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// let username = "hakan"
// const DOMAIN = "kodluyoruz.org"

// let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

// let info = `
// Merhaba ${username} sitemize hosgeldin..
// mail adresin: ${email}

// mail adresinin uzunlugu: ${email.length}
// borcunuz: ${(2 + 3) * 10} TL
// gunun saat bilgisi : ${new Date().getHours()}

// kisa isminiz: ${username[0]}.
// `

// console.log(info)

let userName = "Erdinc"
let DOMAIN = "geyveliyiz.org"
let email = userName + "@" + DOMAIN
console.log("Merhaba", userName, "sitemize hoşgeldin", "Mail adresin: ", email)
let info = `Merhaba ${userName} sitemize hoşgeldin.. mail adresin: ${email} mail adresinin uzunluğu: ${email.length} borcunuz: ${(2+3)*10} TL
günün saat bilgisi : ${new Date().getHours()}
kısa isminiz : ${userName[0]}.`
console.log(info)

// Çok Satırlı Dize Yazımı:
//Eski kullanım:
let eskiString = "En sevdiğim yemekler:\nİskender\nMantı"

//Yeni kullanım:
let yeniString = `En sevdiğim yemekler:
İskender
Mantı`

// İnterpolasyon, metin içerisinde değişken kullanmak anlamına gelir. Normal dizeler içerisine ifadeler gömmek için kullanılır.

let ad= `Erdinc`;
let soyad= `Özdemir`;

//Eski kullanım
console.log("Benim adım "+ad+" "+ soyad);

//Yeni kullanım
console.log(`Benim adım ${ad} ${soyad}`);

let a = 99;
let b= 999;

console.log(`${a} çarpı ${b} eşittir ${a*b}`);

//Çıktı:
//99 çarpı 999 eşittir 98901

//Değişkenlerimizi tanımlayalım
const gozRengi =`Kahverengi`
const yas =21
// → Eski kullanım, Template Literals kullanmadan:

// const kisi = "<p>"+ad+"</p>"+
//               "<p>"+soyad+"</p>"+
//               "<p>"+gozRengi+"</p>"+
//               "<p>"+yas+"</p>"

// document.body.innerHTML = kisi;

const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;

document.body.innerHTML = kisi;