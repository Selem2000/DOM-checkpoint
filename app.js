const add = Array.from(document.querySelectorAll(".addition"));
const numbreItems = document.querySelector(".nbr-item");
const Subtract = document.querySelectorAll(".subtract");
let totalPrice = document.querySelector("#total");
let total = Number(totalPrice.innerHTML);
console.log(add);
const trush = document.querySelectorAll(".fa-trash-alt");
const heart = document.querySelectorAll(".fa-heart");

add.forEach((button, i) => {
  button.addEventListener("click", () => {
    let price = document.querySelectorAll(".prix");

    numbreItems.innerHTML++;
    total += Number(price[i].innerHTML);
    totalPrice.innerHTML = total;
  });
});

Subtract.forEach((button) => {
  button.addEventListener("click", () => {
    let price = document.querySelector(".prix");

    if (numbreItems.innerHTML > 0) {
      numbreItems.innerHTML--;
      total -= Number(price.innerHTML);
      totalPrice.innerHTML = total;
    }
  });
});
trush.forEach((e) => {
  e.addEventListener("click", () => {
    totalPrice.innerHTML = 0;
    numbreItems.innerHTML = 0;
    e.style.color = "blue";
  });
});
heart.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.color = "red";
  });
});
