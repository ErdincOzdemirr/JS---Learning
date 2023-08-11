// Object icinde metot nasil ekleriz

// let user1 = {
//   firstName: "Erdinc",
//   lastName: "Özdemir",
//   score: [1, 2, 3, 4],
//   isActive: true,
//   shortName: function() {
//     return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
//   }
// };

// console.log(user1)
// console.log(user1.shortName)

// var person = {
// 	name: 'Erdinc',
// 	surname: 'Özdemir',
// 	age: 30,
// 	city: 'Istanbul',
// 	introduce: function () {
// 		console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
// 	},
// };
// console.log(person.introduce());

var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) =&gt; `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
	return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));