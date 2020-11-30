// 紅色條
const sliderRed = document.querySelector("#myRange-r");
const valueR = document.querySelector(".code-r");
const hexRed = document.querySelector(".hex-code").children[1];

// 拖曳紅色的range時同時顯示R色碼與轉換hex色碼
sliderRed.addEventListener("input", function (event) {
  valueR.innerHTML = this.value;
  let redCode = Number(valueR.innerHTML);
  hexRed.innerText = redCode.toString(16).padStart(2, "0");
});

// 綠色條
const sliderGreen = document.querySelector("#myRange-g");
const valueG = document.querySelector(".code-g");
const hexGreen = document.querySelector(".hex-code").children[2];

// 拖曳綠色的range時同時顯示G色碼與轉換hex色碼
sliderGreen.addEventListener("input", function (event) {
  valueG.innerHTML = this.value;
  let greenCode = Number(valueG.innerText);
  hexGreen.innerText = greenCode.toString(16).padStart(2, "0");
});

// 藍色條
const sliderBlue = document.querySelector("#myRange-b");
const valueB = document.querySelector(".code-b");
const hexBlue = document.querySelector(".hex-code").children[3];

// 拖曳藍色的range時同時顯示B色碼與轉換hex色碼
sliderBlue.addEventListener("input", function (event) {
  valueB.innerHTML = this.value;
  let blueCode = Number(valueB.innerText);
  hexBlue.innerText = blueCode.toString(16).padStart(2, "0");
});

// 定義初始背景色
document.body.style.backgroundColor =
  "#" + hexRed.innerText + hexGreen.innerText + hexBlue.innerText;
let background = document.querySelector("#container");
// 背景顏色同步更新
background.addEventListener("input", function (event) {
  let hexCode = "#" + hexRed.innerText + hexGreen.innerText + hexBlue.innerText;
  document.body.style.backgroundColor = hexCode;
});
