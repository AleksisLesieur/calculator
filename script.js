let input = document.querySelector("#inputField");

let slider = document.querySelector("#vol");

let calcBtns = document.querySelectorAll(".button");

let calcSymbols = ["+", "-", "/", "*", "."];

let val;

for (let item of calcBtns) {
  item.addEventListener("click", function () {
    val = item.textContent;
    if (val !== "RESET" && val !== "DEL" && val !== "=") {
      input.value += item.textContent;
    }
    if (val === "DEL") {
      input.value = input.value.slice(0, -1);
    }
    if (val === "RESET") {
      input.value = "";
    }
    if (val === "=") {
      input.value = Math.round(eval(input.value) * 100000) / 100000;
    }
    if (calcSymbols.includes(val)) {
      deleteit();
    }
    if (
      (input.value.length === 1 && calcSymbols.includes(val)) ||
      input.value === 0
    ) {
      input.value = "";
    }
    if (input.value === "NaN") {
      input.value = "";
    }
  });
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && input.value.length != 0) {
    input.value = Math.round(eval(input.value) * 100000) / 100000;
  }
});

function deleteit() {
  let newReg = new RegExp(/([+\-*./]){2,}/gi);
  inputField.value = inputField.value.replace(newReg, "$1");
}

function validateMath(s) {
  let reg = new RegExp(/[^0-9.+\-*/]/gi);
  return s.replace(reg, "");
}

input.addEventListener("input", function () {
  deleteit();
  let val = input.value;
  let finalValue = validateMath(val);
  input.value = finalValue;
  if (calcSymbols.includes(val)) {
    input.value = "";
  }
});

slider.addEventListener("input", clickHandler);

document.body.classList.add("theme-1");

function clickHandler(event) {
  document.body.classList.remove("theme-1");
  document.body.classList.remove("theme-2");
  document.body.classList.remove("theme-3");
  let b = Number(event.target.value);
  return document.body.classList.add(`theme-${b}`);
}
