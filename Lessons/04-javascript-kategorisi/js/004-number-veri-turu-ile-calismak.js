// ********** Number Veri Turu ile Calismak **********
// number veri turu tanimlamak:
// let price = 500
// let tax = 0.18
// let priceTax = price * tax
// let total = price + priceTax
// console.log(
//     "Fiyat :", price,
//     "KDV Oranı :", tax,
//     "KDV Tutarı :", priceTax,
//     "Fiyat :", total
// )
// )

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constructor icine bilgi gonderildi:", Number("111"))

// arttirma ve azaltma islemleri:
// let counter = 200
// counter = counter + 1
// console.log(counter)

// let counter = 200
// counter += 1;
// console.log(counter)

// let counter = 200
// counter ++;
// console.log(counter)

// let counter = 320
// counter = counter + 1 // uzun yontem
// counter += 1;
// counter ++;
// console.log(counter)

// counter --;
// counter -= 1;
// console.log(counter)
// let counter = 200
// counter --;
// counter -= 1;
// console.log(counter)
// counter *= 10;
// console.log(counter)
// counter /= 2;
// console.log(counter)
// counter *= 10;
// console.log(counter)

// counter /= 2;
// console.log(counter)

// islem onceligi:
// https://tr.wikipedia.org/wiki/%C4%B0%C5%9Flem_s%C4%B1ras%C4%B1
// console.log( 2 + 3 * 10) // 50 ???????????
// console.log( (2 + 3) * 10) // 50 ???????????
// console.log(7+1*6)
// console.log((7+1)*5)

// mod(kalan) alma %:
// sayi tek mi cift mi ???
// console.log( 17 % 2) // 0 ise cift, 1 ise tek
// console.log(21%3)
// 9 urun alan koliye tum urunler sigiyor mu ?
// console.log("Koli Kalan Urun Ornegi: ", 2483 % 9)

// us alma **:
// console.log(2 * 2 * 2 * 2)
// console.log(2 ** 4)
// console.log(3*3*3*3)
// console.log(3**4)

// asagi yuvarlama islemi -> Math.floor:
// console.log("Asagi Yuvarlama:", Math.floor(1.9) )  // -> 1
// console.log("aşağı Yuvarlama : ", Math.floor(2.3) )

// yukari yuvarlama islemi -> Math.ceil :
// console.log("Yukari Yuvarlama:", Math.ceil(1.9) ) // -> 2
// console.log("Yukarı Yuvarlama : ", Math.ceil(3.4))

// yakina yuvarlama islemi -> Math.round :
// console.log("Yakina Yuvarlama: ", Math.round(1.5) ) // 1.4 ->1, 1.5 ->
// console.log("Yakına Yuvarlama : ", Math.round(4.5 ))
// var result = 3+5; //toplama
// console.log(result);

// var result = 5-2; //çıkarma
// console.log(result);

// var result = 5*2 //çarpma
// console.log(result)

// var result = 6/3 //bölme
// console.log(result)

// var result = 5**2 //üs alma
// console.log(result)

// var result = 6%3 //mod alma
// console.log(result)


//arttırma
// let counter = 1;
//     let a = ++counter;
//     console.log(a)

// let counter = 1;
//     let a = counter++;
//     console.log(counter)

// // azaltma
// let counter = 2;
// let a = --counter;
// alert(a)