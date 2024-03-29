// ********** String Veri Turu Islemleri **********
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "erdincozdemir1812@gmail.com"
let firstName = "erdinc"
let lastName = "OZDEMIR"

// string karakter sayisi -> length
// console.log( email.length )
console.log(email.length)

// Ilk Karakteri Bulmak -> [0]:
// console.log(firstName[0])
// console.log(firstName.charAt(0))
console.log(firstName[0])
console.log(firstName.charAt(0))

// buyuk harf / kucuk harf :
// firstName = firstName.toUpperCase()
// console.log(firstName)
firstName = firstName.toUpperCase()
console.log(firstName)

// firstName = firstName.toLowerCase()
// console.log(firstName)
firstName = firstName.toLowerCase()
console.log(firstName)

// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
// console.log(email.search("@"))
// console.log( email[15] )
console.log(email.search("@"))
console.log(email[17])

// email.search('olmayan') // -1
console.log(
    email.search("olmayan")
)

// belli bir yere kadar al -> slice :  (domain bilgisi)
// let DOMAIN = email.slice( email.search("@") + 1)
// console.log(DOMAIN)
let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)

// console.log(
//     DOMAIN.slice(0, DOMAIN.indexOf('.') )  // sadece gmail kismini aldik
// )
console.log(
    DOMAIN.slice(0, DOMAIN.indexOf("."))
)

// bilgiyi degistir -> replace :
// email = email.replace('gmail.com', 'kodluyoruz.org')
// console.log(email)
email = email.replace("gmail.com", "geyveliyiz.org")
console.log(email)

// istedigim bilgi var mi ? -> includes :
// email.includes('dkfhsd') // false
// email.includes('@') // true
console.log(
    email.includes('skadf')
)
console.log(
    email.includes('r')
)

// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
// console.log(
//     email.endsWith('kodluyoruz.org')
// )
console.log(
    email.startsWith("r")
)
console.log(
    email.endsWith("org")
)

// Ilk Harflerini Buyuk Yapmak
// firstName = "FIRST"
// lastName = "LAST"
// let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

firstName = "ERDINC"
lastName = "OZDEMIR"
let fullName = `
    ${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName)

//DOCUMENT
//length
var isim = 'Erdinc'
console.log(isim.length)

//indexOf - metin içi arama
console.log(isim.indexOf('di'))

// Search - Metin İçinde Arama Yapma
console.log(isim.search('r'))

// Slice - Metninden Parça Almak
console.log(isim.slice(0,4))//0 ile 4 arasını alır
console.log(isim.slice(0))//0 dan sonrasının tamamını alır

// Replace – Metin Bulma ve Değiştirme
console.log(
    isim.replace('dinc','di')
)

// toUpperCase ve toLowerCase
console.log(isim.toUpperCase());
console.log(isim.toLowerCase());

// Concat - Metin Birleştirme
var isim = "hava"
var soyad = "ozdemir"
console.log(isim.concat("",soyad))

//charCodeAt – İndex Numarasına Göre Karakterin Unicode Değerini Bulma
var isim = "Erdinc Ozdemir"
console.log(
    isim.charCodeAt(1)
)

// Split – Metni Diziye Çevirme
var isim = "Erdinc, Hava"
var isimler = isim.split(",")
console.log(isimler)