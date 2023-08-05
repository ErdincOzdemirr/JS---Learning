// Functions Bolum Sonu Egzersizi

let counter = 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
  //1.yöntem
  //   console.log(this.id);
  //   this.id == "increase" ? (counter += 1) : (counter -= 1);
  //   counterDOM.innerHTML = counter;

  //2.yöntem
  console.log(this.id);
  if (this.id == "increase") {
    counterDOM.innerHTML = counter += 1;
  } else {
    counterDOM.innerHTML = counter -= 1;
  }
}
