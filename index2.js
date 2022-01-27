const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");
let firstValue = 0;
let secondValue = 0;
let total = 0;

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function (event) {
        // let val1 = parseFloat(event.target.value);
        // console.log(typeof val1);
        //
        // if (calc.firstValue === 0) {
        //     calc.firstValue = val1;
        //     display.innerText = val1;
        // } else {
        //     calc.secondValue = val1;
        //     // display.innerText = `${calc.firstValue} ${calc.operator} ${calc.secondValue}`;
        //     display.innerText = calc.secondValue
        // }
        let val = event.target.value;
        console.log(val);
        display.innerText += val;
        firstValue = val
    });
}
for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", function (event) {
        // display.innerText = `${calc.firstValue} ${calc.operator}`;
        // display.innerText = `${calc.firstValue}`;
        let val = event.target.value;
        console.log(val);
        display.innerText = val;
    });
}

equalsButton.addEventListener("click", function () {
    display.innerText = "="; //
});