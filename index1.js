class Calculator {
    constructor() {
        this.firstValue = 0;
        this.operator = "";
        this.secondValue = 0;
        this.total = 0;
    }
    result() {
        this.total = parseFloat(this.firstValue + this.secondValue);
        console.log(typeof this.total);
        return this.total;
    }
    // add() {}
    // subtract() {}
    // multiply() {}
    // divide() {}
    // equals() {}
    // clear() {}
}

const calc = new Calculator();

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function (event) {
        let val1 = parseFloat(event.target.value);
        console.log(typeof val1);

        if (calc.firstValue === 0) {
            calc.firstValue = val1;
            display.innerText = val1;
        } else {
            calc.secondValue = val1;
            // display.innerText = `${calc.firstValue} ${calc.operator} ${calc.secondValue}`;
            display.innerText = calc.secondValue
        }
    });
}
for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", function (event) {
        let val2 = event.target.value;
        calc.operator = val2;
        // display.innerText = `${calc.firstValue} ${calc.operator}`;
        // display.innerText = `${calc.firstValue}`;
    });
}

equalsButton.addEventListener("click", function () {
    if(calc.operator !== ''){
        let result = calc.result();
        display.innerText = result;
    }
});

clearButton.addEventListener("click", function () {
    display.innerText = "";
    calc.firstValue = 0;
    calc.secondValue = 0;
});
console.log(typeof calc.result());
