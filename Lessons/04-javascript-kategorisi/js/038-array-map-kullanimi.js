// array map kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const USERS = ["ERDINC", "MehMet", "TugCE", "AkSEL"]

// userName icinde orjinal isim kalsin,
// shortName icinde ilk harf buyuk . (E.)
// newName icinde ilk harf buyuk olsun
// {userName: "ERDINC", shortName: "E.", newName: "Erdi"}

const NEW_USERS = USERS.map( user => user.toLowerCase() )
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map( item =>
//   {
//     return {
//       userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
//   }
// )

const USERS_OBJ = USERS.map( item => (
      {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
    )
)

console.log(USERS_OBJ)

const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => {
    return deger * 2
})

console.log(sayilar);
//[2, 3, 4, 5, 10]
console.log(yeniArray);
//[4, 6, 8, 10, 20]

const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map(
  (e)=>{
    if(e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
      }
  );

console.log( yeniMaaslar );