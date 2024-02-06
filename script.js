const innerBar = document.querySelector(".inner-bar");
const btn1 = document.querySelector(".increase");
const btn2 = document.querySelector(".decrease");
let value = 0;
btn2.disabled = true;

btn1.addEventListener("click", () => {
  value += 25;
  btn2.disabled = false;
  innerBar.style.width = `${value}%`;
  if (value >= 100) {
    value = 100;
    btn1.disabled = true;
  }
});

btn2.addEventListener("click", () => {
  value -= 25;
  btn1.disabled = false;
  innerBar.style.width = `${value}%`;
  if (value <= 0) {
    value = 0;
    btn2.disabled = true;
  }
});
