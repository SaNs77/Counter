let count = 0;
const btns = document.querySelectorAll(".btn");
const number = document.querySelector(".number");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const value = e.currentTarget.classList;
    if (value.contains("decrease")) {
      count--;
    } else if (value.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      number.style.color = "red";
    }
    if (count > 0) {
      number.style.color = "green";
    }

    if (count === 0) {
      number.style.color = "blue";
    }
    number.textContent = count;
  });
});
