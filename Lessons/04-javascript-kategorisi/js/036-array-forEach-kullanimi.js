// Array forEach Metotu
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
// https://www.w3schools.com/jsref/jsref_foreach.asp

const PRODUCTS = [
  "Macbook",
  "Phone",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

// PRODUCTS.forEach((product, index, array) => array[index] = product + " 111" )
// PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}` )  // toUpperCase

// console.log(PRODUCTS)

/*****
const userListDOM = document.querySelector('#userList')

for (index = 0; index < users.length; index++) {
  const liDOM = document.createElement('li')
  liDOM.innerHTML = users[index]
  userListDOM.appendChild(liDOM)
}
*/

// const userListDOM = document.querySelector('#userList')

// PRODUCTS.forEach( item => {
//   const liDOM = document.createElement('li')
//   liDOM.innerHTML = item
//   userListDOM.append(liDOM)
// })

PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}`);
console.log(PRODUCTS);

const userListDOM = document.querySelector('#userList');
PRODUCTS.forEach ( item => {
  const liDOM = document.createElement('li')
  liDOM.innerHTML = item
  userListDOM.append(liDOM)
})

const animals = ["cat" , "dog" , "bird", "horse"];

animals.forEach((value , index , array) => {
  console.log('value: ', value );
  console.log('value parametresinin aldığı index :', index );
  console.log('array:' , array );
});

animals.forEach( animal => console.log( animal ) );
//Arrow function gosterimi(ES6)

const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function(numbers){
  newArray.push(numbers+2);
});
console.log(newArray);