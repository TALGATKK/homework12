console.log("Hello World");

let number1_1 = document.getElementById("input1_1");
let number1_2 = document.getElementById("input1_2");
let submit1 = document.getElementById("submit1");
let result1 = document.getElementById("result1");

submit1.onclick = function () {
  result = (+number1_1.value + +number1_2.value) / 2;
  result1.textContent = result;
};

let number2_1 = document.getElementById("input2_1");
let number2_2 = document.getElementById("input2_2");
let submit2 = document.getElementById("submit2");
let result2 = document.getElementById("result2");

submit2.onclick = function () {
  result = +number2_1.value % +number2_2.value;
  result2.textContent = result;
};

let number3_1 = document.getElementById("input3_1");
let number3_2 = document.getElementById("input3_2");
let submit3 = document.getElementById("submit3");
let result3 = document.getElementById("result3");
let formatTime = document.getElementById("formatTime");

submit3.onclick = function () {
  if (formatTime.value == "pm") {
    result = +number3_1.value + 12 + ":" + +number3_2.value;
  } else {
    result = number3_1.value + ":" + number3_2.value;
  }
  result3.textContent = result;
};
let number4_1 = document.getElementById("input4_1");
let number4_2 = document.getElementById("input4_2");
let submit4 = document.getElementById("submit4");
let result4 = document.getElementById("result4");

submit4.onclick = function () {
  result = Math.max(number4_1.value, number4_2.value);
  result4.textContent = result;
};

let number5_1 = document.getElementById("input5_1");
let submit5 = document.getElementById("submit5");
let result5 = document.getElementById("result5");

submit5.onclick = function () {
  god = number5_1.value % 4;
  if (god == 0) {
    result = "Да - Високосный год";
  }
  if (god != 0) {
    result = "Нет";
  }
  result5.textContent = result;
};

let number6_1 = document.getElementById("input6_1");
let number6_2 = document.getElementById("input6_2");
let number6_3 = document.getElementById("input6_3");
let submit6 = document.getElementById("submit6");
let result6 = document.getElementById("result6");

submit6.onclick = function () {
  result = Math.max(number6_1.value, number6_2.value, number6_3.value);
  result6.textContent = result;
};

let number7_1 = document.getElementById("input7_1");
let number7_2 = document.getElementById("input7_2");
let number7_3 = document.getElementById("input7_3");
let submit7 = document.getElementById("submit7");
let result7 = document.getElementById("result7");

submit7.onclick = function () {
  result = Math.min(number7_1.value, number7_2.value, number7_3.value);
  result7.textContent = result;
};

let number8_1 = document.getElementById("input8_1");
let number8_2 = document.getElementById("input8_2");
let submit8 = document.getElementById("submit8");
let result8 = document.getElementById("result8");

submit8.onclick = function () {
  resultx = (0 - number8_2.value) / number8_1.value;
  console.log(resultx);
  if (resultx < 1) {
    result = -1;
  } else {
    result = 1;
  }
  result8.textContent = result;
};

let number9_1 = document.getElementById("input9_1");
let number9_2 = document.getElementById("input9_2");
let number9_3 = document.getElementById("input9_3");
let number9_4 = document.getElementById("input9_4");
let submit9 = document.getElementById("submit9");
let result9 = document.getElementById("result9");

submit9.onclick = function () {
  result =
    +input9_3.value -
    +input9_1.value +
    " рублей " +
    (+input9_4.value - +input9_2.value) +
    " копеек";
  result9.textContent = result;
};
