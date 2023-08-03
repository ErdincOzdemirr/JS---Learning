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