// DOM
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

console.log(document.URL)
console.log(document.location)
console.log(document.location.hostname)

// pathname
console.log(document.location.pathname)

// head icindeki bilgiler
console.log(document.head)

// body icindeki bilgiler
console.log(document.body)

// url bilgisi
console.log(document.URL)
console.log(document.baseURI)


// document icerisinde style bilgilerini degistirmek:
// css bilginizle birlikte style yapisi uzerinde duzenlemeler yapabilirsiniz..
document.body.style.backgroundColor = "aqua"

function myFunction() {
    var w = window.open();
    w.document.open();
    w.document.write("<h1>Hello World!</h1>");
    w.document.close();
}