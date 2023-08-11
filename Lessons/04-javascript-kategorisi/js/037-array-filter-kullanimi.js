// array filter kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 5 harften fazla olanlar (6) ??
// const PRODUCTS = [
//   "Mic",
//   "Cable",
//   "Speaker",
//   "Desktop PC",
//   "Server",
//   "Mouse",
//   "Keyboard",
// ];

// const NEW_PRODUCTS = PRODUCTS.filter((item) => item.length > 5);
// console.log(NEW_PRODUCTS);

// // aktif kullanicilar ??
// const USERS = [
//   { fullName: "Erdinc Ozdemir", isActive: false },
//   { fullName: "Ahmet Urgan", isActive: true },
//   { fullName: "Asya Basar", isActive: true },
//   { fullName: "Aksel Durmaz", isActive: false },
// ];

// // const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
// const ACTIVE_USERS = USERS.filter((user) => user.isActive);
// console.log(ACTIVE_USERS);


// const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]

// const newProducts = products.filter(eleman => eleman.length > 5)
// console.log(newProducts);

// const users = [
// 	{fullName: "Mehmet Veli", isActive: false},
// 	{fullName: "Erdinc Özdemir", isActive: true},
//     {fullName: "Ahmet Yılmaz", isActive: true},
//     {fullName: "Oğuz Şahin", isActive: false},
// ]

// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);


const person = [{
  name: "Adem",
  age: 25,
  languages: ["JavaScript", "CSS"],
},
{
  name: "Oğuz",
  age: 33,
  languages: ["Java", "HTML"],
}
];

const personOver30 = person.filter(item => item.age > 30);
console.log(personOver30);

const javascriptExperts = person.filter(item => item.languages.includes("JavaScript"));
console.log(javascriptExperts);