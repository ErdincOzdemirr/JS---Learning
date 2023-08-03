// ********** Veri Turunu Ogrenmek ve Veri Turu Donusumleri **********

// veri turunu ogrenmek typeof:
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)

// string(metinsel) bilgileri int ve float'a donusturmek
let number1 = "11"
number1 = parseInt(number1)
console.log("number1: ", number1, typeof(number1) )

let number2 = "11px"
number2 = parseInt(number2)
console.log("number2: ", number2, typeof(number2) )

let number3 = "11.1"
number3 = Number(number3)
console.log("number3: ", number3, typeof(number3) )

let number4 = "11.4px"
number4 = parseFloat(number4)
console.log("number4: ", number4, typeof(number4) )

// number veri tipinden string'e donusturmek:
let number5 = 55
number5 = number5.toString()
console.log(number5, typeof(number5))


// console.log(typeof 42);
// // beklenen output: "number"

// console.log(typeof 'kodluyoruz');
// //beklenen output: "string"

// console.log(typeof true);
// // beklenen output: "boolean"

// console.log(typeof Variable);
// // beklenen output: "undefined"

// //isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
// Number.isInteger(123) //true
// Number.isInteger(-123) //true
// Number.isInteger(0.5) //false

// //isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
// Number.isFinite(0) //true
// Number.isFinite('123') //false
// Number.isFinite('Hello') //false
// Number.isFinite(-Infinity) //false
// Number.isFinite(0 / 0) //false

// // Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

// Number.isNaN(123) //false
// Number.isNaN(0) //false
// Number.isNaN('123') //false
// Number.isNaN('Hello') //false
// Number.isNaN('') //false
// Number.isNaN(true) //false
// Number.isNaN(undefined) //false
// Number.isNaN('NaN') //false
// Number.isNaN(NaN) //true

// // Tahmin edebileceğiniz üzere her primitif değer stringe dönüştürülebilir.

// String(123) // “123”
// String(-12.3) // “-12.3”
// String(null) // “null”
// String(undefined) // “undefined”
// String(true) // “true”
// String(false) // “false


// // Nesneler (Objects) için Type Coercion
// console.log(Boolean({})) // true
// console.log(Boolean([])) // true
// console.log(Boolean([1,2,3])) // true
// console.log(Boolean({13:234})) //true