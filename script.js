// getting color variables from CSS

// theme 1

// website background colors 1

let bodyBackgroundColor1 = getComputedStyle(
  document.documentElement
).getPropertyValue("--very-dark-desaturated-blue-main-background");

let themeSliderColor1 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Red-key-background-toggle");

let inputBackgroundColor1 = getComputedStyle(
  document.documentElement
).getPropertyValue("--very-dark-desaturated-blue-screen-background");

let aroundButtonBackgroundColor1 = getComputedStyle(
  document.documentElement
).getPropertyValue(
  "--Very-dark-desaturated-blue-toggle-background-keypad-background"
);

// button background colors 1

let buttonIstelfBackgroundColor1 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Light-grayish-orange-key-background");

let delAndResetBackgroundColor1 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Desaturated-dark-blue-key-background");

// button shadow colors 1

let buttonItselfShadowColor1 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Grayish-orange-key-shadow");

let equalSignShadowColor1 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Dark-red-key-shadow");

let delAndResetShadowColor1 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Desaturated-dark-blue-key-shadow");

// button text colors 1 (they are all white except for...)

let mainButtonColor1 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-grayish-blue");

// button hover colors 1

let delAndResetButtonHover1 = getComputedStyle(
  document.documentElement
).getPropertyValue("--hover-key-del-reset-theme-1");

let equalButtonHover1 = getComputedStyle(
  document.documentElement
).getPropertyValue("--hover-key-equal-btn-theme-1");

// theme 1 ends here

// theme 2 begins here

// website background colors 2

let bodyBackgroundColor2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Light-gray-main-background");

let themeSliderColor2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Orange-key-background-toggle");

let inputBackgroundColor2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-light-gray-screen-background");

let aroundButtonBackgroundColor2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Grayish-red-toggle-background-keypad-background");

// button background colors 2

let buttonIstelfBackgroundColor2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Light-grayish-yellow-key-background");

let delAndResetBackgroundColor2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Dark-moderate-cyan-key-background");

// button shadow colors 2

let buttonItselfShadowColor2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Dark-grayish-orange-key-shadow");

let equalSignShadowColor2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Dark-orange-key-shadow");

let delAndResetShadowColor2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-cyan-key-shadow");

// button text colors 2 (they are all white except for...)

let mainButtonColor2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-grayish-yellow");

// button hover colors 2

let delAndResetButtonHover2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--hover-key-del-reset-theme-2");

let equalButtonHover2 = getComputedStyle(
  document.documentElement
).getPropertyValue("--hover-key-equal-btn-theme-2");

// theme 2 ends here

// theme 3 begins here

// website background colors 3

let bodyBackgroundColor3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-violet-main-background");

let themeSliderColor3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Pure-cyan-key-background-toggle");

let inputBackgroundColor3 = getComputedStyle(
  document.documentElement
).getPropertyValue(
  "--Very-dark-violet-toggle-background-keypad-background-screen-background"
);

// button background colors 3

let buttonIstelfBackgroundColor3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-violet-key-background");

let delAndResetBackgroundColor3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Dark-violet-key-background");

// button shadow colors 3

let buttonItselfShadowColor3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Dark-magenta-key-shadow");

let equalSignShadowColor3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Soft-cyan-key-shadow");

let delAndResetShadowColor3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Vivid-magenta-key-shadow");

// button text colors 3 (only DEL and RESET are white, the others tho)

let mainButtonColor3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Light-yellow");

let equalSignColor3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--Very-dark-blue");

// button hover color 3

let mainButtonsHover3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--hover-key-main-btns-theme-3");

let delAndResetButtonHover3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--hover-key-del-reset-theme-3");

let equalButtonHover3 = getComputedStyle(
  document.documentElement
).getPropertyValue("--hover-key-equal-btn-theme-3");

// theme 3 ends here

// manipulating the colors

let input = document.querySelector("#inputField");

let calcText = document.querySelector(".calcText");

let buttonNumber = document.querySelectorAll(".buttonNumber");

let theme = document.querySelector(".theme");

let slider = document.querySelector("#vol");

let styleSlider = document.querySelector('[data="slider"]');

let calcBtnBackground = document.querySelector(".buttons");

let calcBtns = document.querySelectorAll(".button");

let resetBtn = document.querySelector(".reset");

let delBtn = document.querySelector(".del");

let equalBtn = document.querySelector("#equal");

let calcTheme = document.querySelector(".calcTheme");

slider.addEventListener("click", function (event) {
  if (event.target.value == 1) {
    console.log(event.target.value);

    // changing background colors

    document.body.style.backgroundColor = bodyBackgroundColor1;

    // injecting into  HTML to change slider, button shadow and hover colors

    styleSlider.innerHTML = `
    .slider::-webkit-slider-thumb { background-color: ${themeSliderColor1}; }
    .button { box-shadow: 0 4px 0 ${buttonItselfShadowColor1};}
    .reset, .del { box-shadow: 0 4px 0 ${delAndResetShadowColor1};}
    .equal { box-shadow: 0 4px 0 ${equalSignShadowColor1};}`;

    input.style.backgroundColor = inputBackgroundColor1;

    calcBtnBackground.style.backgroundColor = aroundButtonBackgroundColor1;

    slider.style.backgroundColor = aroundButtonBackgroundColor1;

    // changing button colors

    for (let i = 0; i < calcBtns.length; i++) {
      calcBtns[i].style.color = mainButtonColor1;
      calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor1;
      calcBtns[i].style.boxShadow = buttonItselfShadowColor1;
      calcBtns[i].addEventListener("mouseenter", function () {
        calcBtns[i].style.backgroundColor = "white";
      });
      calcBtns[i].addEventListener("mouseleave", function () {
        calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor1;
      });
    }

    resetBtn.style.backgroundColor = delAndResetBackgroundColor1;
    delBtn.style.backgroundColor = delAndResetBackgroundColor1;
    equalBtn.style.backgroundColor = themeSliderColor1;

    for (let i = 0; i < buttonNumber.length; i++) {
      buttonNumber[i].style.color = "white";
    }

    calcText.style.color = "white";
    theme.style.color = "white";
    input.style.color = "white";
    resetBtn.style.color = "white";
    delBtn.style.color = "white";
    equalBtn.style.color = "white";

    // changing shadow colors

    // resetBtn.style.boxShadow = delAndResetShadowColor1;
    // delBtn.style.boxShadow = delAndResetShadowColor1;
    // equalBtn.style.boxShadow = equalSignShadowColor1;
    resetBtn.addEventListener("mouseenter", function () {
      resetBtn.style.backgroundColor = delAndResetButtonHover1;
    });
    resetBtn.addEventListener("mouseleave", function () {
      resetBtn.style.backgroundColor = delAndResetBackgroundColor1;
    });
    delBtn.addEventListener("mouseenter", function () {
      delBtn.style.backgroundColor = delAndResetButtonHover1;
    });
    delBtn.addEventListener("mouseleave", function () {
      delBtn.style.backgroundColor = delAndResetBackgroundColor1;
    });
    equalBtn.addEventListener("mouseenter", function () {
      equalBtn.style.backgroundColor = equalButtonHover1;
    });
    equalBtn.addEventListener("mouseleave", function () {
      equalBtn.style.backgroundColor = themeSliderColor1;
    });
  }
  if (event.target.value == 2) {
    console.log(event.target.value);
    // changing background colors
    document.body.style.backgroundColor = bodyBackgroundColor2;

    styleSlider.innerHTML = `
    .slider::-webkit-slider-thumb { background-color: ${themeSliderColor2}; }
    .button { box-shadow: 0 4px 0 ${buttonItselfShadowColor2};}
    .reset, .del { box-shadow: 0 4px 0 ${delAndResetShadowColor2};}
    .equal { box-shadow: 0 4px 0 ${equalSignShadowColor2};}`;

    input.style.backgroundColor = inputBackgroundColor2;

    calcBtnBackground.style.backgroundColor = aroundButtonBackgroundColor2;

    slider.style.backgroundColor = aroundButtonBackgroundColor2;

    // changing button colors

    for (let i = 0; i < calcBtns.length; i++) {
      calcBtns[i].style.color = mainButtonColor2;
      calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor2;
      calcBtns[i].style.boxShadow = buttonItselfShadowColor2;
      calcBtns[i].addEventListener("mouseenter", function () {
        calcBtns[i].style.backgroundColor = "white";
      });
      calcBtns[i].addEventListener("mouseleave", function () {
        calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor2;
      });
    }

    for (let i = 0; i < buttonNumber.length; i++) {
      buttonNumber[i].style.color = mainButtonColor2;
    }

    resetBtn.style.backgroundColor = delAndResetBackgroundColor2;
    delBtn.style.backgroundColor = delAndResetBackgroundColor2;
    equalBtn.style.backgroundColor = themeSliderColor2;

    calcText.style.color = mainButtonColor2;

    theme.style.color = mainButtonColor2;
    input.style.color = mainButtonColor2;
    resetBtn.style.color = "white";
    delBtn.style.color = "white";
    equalBtn.style.color = "white";

    resetBtn.addEventListener("mouseenter", function () {
      resetBtn.style.backgroundColor = delAndResetButtonHover2;
    });
    resetBtn.addEventListener("mouseleave", function () {
      resetBtn.style.backgroundColor = delAndResetBackgroundColor2;
    });
    delBtn.addEventListener("mouseenter", function () {
      delBtn.style.backgroundColor = delAndResetButtonHover2;
    });
    delBtn.addEventListener("mouseleave", function () {
      delBtn.style.backgroundColor = delAndResetBackgroundColor2;
    });
    equalBtn.addEventListener("mouseenter", function () {
      equalBtn.style.backgroundColor = equalButtonHover2;
    });
    equalBtn.addEventListener("mouseleave", function () {
      equalBtn.style.backgroundColor = themeSliderColor2;
    });
  }

  if (event.target.value == 3) {
    console.log(event.target.value);
    document.body.style.backgroundColor = bodyBackgroundColor3;

    slider.style.backgroundColor = inputBackgroundColor3;

    styleSlider.innerHTML = `
    .slider::-webkit-slider-thumb { background-color: ${themeSliderColor3}; }
    .button { box-shadow: 0 4px 0 ${buttonItselfShadowColor3};}
    .reset, .del { box-shadow: 0 4px 0 ${delAndResetShadowColor3};}
    .equal { box-shadow: 0 4px 0 ${equalSignShadowColor3};}`;

    input.style.backgroundColor = inputBackgroundColor3;

    calcBtnBackground.style.backgroundColor = inputBackgroundColor3;

    slider.style.backgroundColor = inputBackgroundColor3;

    // changing button colors

    for (let i = 0; i < calcBtns.length; i++) {
      calcBtns[i].style.color = mainButtonColor3;
      calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor3;
      calcBtns[i].style.boxShadow = buttonItselfShadowColor3;
      calcBtns[i].addEventListener("mouseenter", function () {
        calcBtns[i].style.backgroundColor = mainButtonsHover3;
      });
      calcBtns[i].addEventListener("mouseleave", function () {
        calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor3;
      });
    }

    for (let i = 0; i < buttonNumber.length; i++) {
      buttonNumber[i].style.color = mainButtonColor3;
    }

    calcText.style.color = mainButtonColor3;
    theme.style.color = mainButtonColor3;
    input.style.color = mainButtonColor3;
    resetBtn.style.color = "white";
    delBtn.style.color = "white";
    equalBtn.style.color = equalSignColor3;

    resetBtn.style.backgroundColor = delAndResetBackgroundColor3;
    delBtn.style.backgroundColor = delAndResetBackgroundColor3;
    equalBtn.style.backgroundColor = themeSliderColor3;

    resetBtn.addEventListener("mouseenter", function () {
      resetBtn.style.backgroundColor = delAndResetButtonHover3;
    });
    resetBtn.addEventListener("mouseleave", function () {
      resetBtn.style.backgroundColor = delAndResetBackgroundColor3;
    });
    delBtn.addEventListener("mouseenter", function () {
      delBtn.style.backgroundColor = delAndResetButtonHover3;
    });
    delBtn.addEventListener("mouseleave", function () {
      delBtn.style.backgroundColor = delAndResetBackgroundColor3;
    });
    equalBtn.addEventListener("mouseenter", function () {
      equalBtn.style.backgroundColor = equalButtonHover3;
    });
    equalBtn.addEventListener("mouseleave", function () {
      equalBtn.style.backgroundColor = themeSliderColor3;
    });
  }
});

slider.addEventListener("touchend", function (event) {
  if (event.target.value == 1) {
    console.log(event.target.value);

    // changing background colors

    document.body.style.backgroundColor = bodyBackgroundColor1;

    // injecting into  HTML to change slider, button shadow and hover colors

    styleSlider.innerHTML = `
    .slider::-webkit-slider-thumb { background-color: ${themeSliderColor1}; }
    .button { box-shadow: 0 4px 0 ${buttonItselfShadowColor1};}
    .reset, .del { box-shadow: 0 4px 0 ${delAndResetShadowColor1};}
    .equal { box-shadow: 0 4px 0 ${equalSignShadowColor1};}`;

    input.style.backgroundColor = inputBackgroundColor1;

    calcBtnBackground.style.backgroundColor = aroundButtonBackgroundColor1;

    slider.style.backgroundColor = aroundButtonBackgroundColor1;

    // changing button colors

    for (let i = 0; i < calcBtns.length; i++) {
      calcBtns[i].style.color = mainButtonColor1;
      calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor1;
      calcBtns[i].style.boxShadow = buttonItselfShadowColor1;
      calcBtns[i].addEventListener("mouseenter", function () {
        calcBtns[i].style.backgroundColor = "white";
      });
      calcBtns[i].addEventListener("mouseleave", function () {
        calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor1;
      });
    }

    resetBtn.style.backgroundColor = delAndResetBackgroundColor1;
    delBtn.style.backgroundColor = delAndResetBackgroundColor1;
    equalBtn.style.backgroundColor = themeSliderColor1;

    for (let i = 0; i < buttonNumber.length; i++) {
      buttonNumber[i].style.color = "white";
    }

    calcText.style.color = "white";
    theme.style.color = "white";
    input.style.color = "white";
    resetBtn.style.color = "white";
    delBtn.style.color = "white";
    equalBtn.style.color = "white";

    // changing shadow colors

    // resetBtn.style.boxShadow = delAndResetShadowColor1;
    // delBtn.style.boxShadow = delAndResetShadowColor1;
    // equalBtn.style.boxShadow = equalSignShadowColor1;
    resetBtn.addEventListener("mouseenter", function () {
      resetBtn.style.backgroundColor = delAndResetButtonHover1;
    });
    resetBtn.addEventListener("mouseleave", function () {
      resetBtn.style.backgroundColor = delAndResetBackgroundColor1;
    });
    delBtn.addEventListener("mouseenter", function () {
      delBtn.style.backgroundColor = delAndResetButtonHover1;
    });
    delBtn.addEventListener("mouseleave", function () {
      delBtn.style.backgroundColor = delAndResetBackgroundColor1;
    });
    equalBtn.addEventListener("mouseenter", function () {
      equalBtn.style.backgroundColor = equalButtonHover1;
    });
    equalBtn.addEventListener("mouseleave", function () {
      equalBtn.style.backgroundColor = equalButtonHover1;
    });
  }
  if (event.target.value == 2) {
    console.log(event.target.value);
    // changing background colors
    document.body.style.backgroundColor = bodyBackgroundColor2;

    styleSlider.innerHTML = `
    .slider::-webkit-slider-thumb { background-color: ${themeSliderColor2}; }
    .button { box-shadow: 0 4px 0 ${buttonItselfShadowColor2};}
    .reset, .del { box-shadow: 0 4px 0 ${delAndResetShadowColor2};}
    .equal { box-shadow: 0 4px 0 ${equalSignShadowColor2};}`;

    input.style.backgroundColor = inputBackgroundColor2;

    calcBtnBackground.style.backgroundColor = aroundButtonBackgroundColor2;

    slider.style.backgroundColor = aroundButtonBackgroundColor2;

    // changing button colors

    for (let i = 0; i < calcBtns.length; i++) {
      calcBtns[i].style.color = mainButtonColor2;
      calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor2;
      calcBtns[i].style.boxShadow = buttonItselfShadowColor2;
      calcBtns[i].addEventListener("mouseenter", function () {
        calcBtns[i].style.backgroundColor = "white";
      });
      calcBtns[i].addEventListener("mouseleave", function () {
        calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor2;
      });
    }

    for (let i = 0; i < buttonNumber.length; i++) {
      buttonNumber[i].style.color = mainButtonColor2;
    }

    resetBtn.style.backgroundColor = delAndResetBackgroundColor2;
    delBtn.style.backgroundColor = delAndResetBackgroundColor2;
    equalBtn.style.backgroundColor = themeSliderColor2;

    calcText.style.color = mainButtonColor2;

    theme.style.color = mainButtonColor2;
    input.style.color = mainButtonColor2;
    resetBtn.style.color = "white";
    delBtn.style.color = "white";
    equalBtn.style.color = "white";

    resetBtn.addEventListener("mouseenter", function () {
      resetBtn.style.backgroundColor = delAndResetButtonHover2;
    });
    resetBtn.addEventListener("mouseleave", function () {
      resetBtn.style.backgroundColor = delAndResetBackgroundColor2;
    });
    delBtn.addEventListener("mouseenter", function () {
      delBtn.style.backgroundColor = delAndResetButtonHover2;
    });
    delBtn.addEventListener("mouseleave", function () {
      delBtn.style.backgroundColor = delAndResetBackgroundColor2;
    });
    equalBtn.addEventListener("mouseenter", function () {
      equalBtn.style.backgroundColor = equalButtonHover2;
    });
    equalBtn.addEventListener("mouseleave", function () {
      equalBtn.style.backgroundColor = equalButtonHover2;
    });
  }

  if (event.target.value == 3) {
    console.log(event.target.value);
    document.body.style.backgroundColor = bodyBackgroundColor3;

    slider.style.backgroundColor = inputBackgroundColor3;

    styleSlider.innerHTML = `
    .slider::-webkit-slider-thumb { background-color: ${themeSliderColor3}; }
    .button { box-shadow: 0 4px 0 ${buttonItselfShadowColor3};}
    .reset, .del { box-shadow: 0 4px 0 ${delAndResetShadowColor3};}
    .equal { box-shadow: 0 4px 0 ${equalSignShadowColor3};}`;

    input.style.backgroundColor = inputBackgroundColor3;

    calcBtnBackground.style.backgroundColor = inputBackgroundColor3;

    slider.style.backgroundColor = inputBackgroundColor3;

    // changing button colors

    for (let i = 0; i < calcBtns.length; i++) {
      calcBtns[i].style.color = mainButtonColor3;
      calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor3;
      calcBtns[i].style.boxShadow = buttonItselfShadowColor3;
      calcBtns[i].addEventListener("mouseenter", function () {
        calcBtns[i].style.backgroundColor = mainButtonsHover3;
      });
      calcBtns[i].addEventListener("mouseleave", function () {
        calcBtns[i].style.backgroundColor = buttonIstelfBackgroundColor3;
      });
    }

    for (let i = 0; i < buttonNumber.length; i++) {
      buttonNumber[i].style.color = mainButtonColor3;
    }

    calcText.style.color = mainButtonColor3;
    theme.style.color = mainButtonColor3;
    input.style.color = mainButtonColor3;
    resetBtn.style.color = "white";
    delBtn.style.color = "white";
    equalBtn.style.color = equalSignColor3;

    resetBtn.style.backgroundColor = delAndResetBackgroundColor3;
    delBtn.style.backgroundColor = delAndResetBackgroundColor3;
    equalBtn.style.backgroundColor = themeSliderColor3;

    resetBtn.addEventListener("mouseenter", function () {
      resetBtn.style.backgroundColor = delAndResetButtonHover3;
    });
    resetBtn.addEventListener("mouseleave", function () {
      resetBtn.style.backgroundColor = delAndResetBackgroundColor3;
    });
    delBtn.addEventListener("mouseenter", function () {
      delBtn.style.backgroundColor = delAndResetButtonHover3;
    });
    delBtn.addEventListener("mouseleave", function () {
      delBtn.style.backgroundColor = delAndResetBackgroundColor3;
    });
    equalBtn.addEventListener("mouseenter", function () {
      equalBtn.style.backgroundColor = equalButtonHover3;
    });
    equalBtn.addEventListener("mouseleave", function () {
      equalBtn.style.backgroundColor = themeSliderColor3;
    });
  }
});

// main calculator code

let val;

for (let item of calcBtns) {
  item.addEventListener("click", function () {
    val = item.textContent;
    if (val !== "RESET" && val !== "DEL" && val !== "=") {
      input.value += item.textContent;
    }
    if (val === "DEL" || val === "RESET") {
      input.value = "";
    }
    if (val === "=") {
      input.value = Math.round(eval(input.value) * 100000) / 100000;
    }
    if (
      val === "+" ||
      val === "-" ||
      val === "/" ||
      val === "*" ||
      val === "."
    ) {
      deleteit();
    }
    if (
      input.value.length === 1 &&
      (val === "+" || val === "-" || val === "/" || val === "*" || val === ".")
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
  if (
    input.value === "+" ||
    input.value === "-" ||
    input.value === "/" ||
    input.value === "*" ||
    input.value === "."
  ) {
    input.value = "";
  }
});
