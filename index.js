// const numbers = document.querySelectorAll(".number");
// const operators = document.querySelectorAll(".operator");
// const equals = document.querySelector(".equals");
// const clear = document.querySelector(".clear");
// const numberDisplay = document.querySelector(".number-display");
// let numberValue = 0;
// let numberValueAdded = 0;
// let addNumber = 0;
// let subtractNumber = 0;
//
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener("click", () => {
//         numberValue = parseFloat(numbers[i].value);
//         numberDisplay.innerText += numberValue;
//     });
// }
//
// for (let i = 0; i < operators.length; i++) {
//     operators[i].addEventListener("click", () => {
//         if (operators[i].innerText === "add") {
//             numberValueAdded = numberDisplay.innerText;
//             numberDisplay.innerText = "";
//             numberValueAdded = parseFloat(numberValueAdded);
//             addNumber += numberValueAdded;
//             console.log(addNumber);
//         } else if (operators[i].innerText === "subtract") {
//             subtractNumber = addNumber;
//             console.log(subtractNumber);
//             numberValueAdded = numberDisplay.innerText;
//             numberDisplay.innerText = "";
//             numberValueAdded = parseFloat(numberValueAdded);
//             subtractNumber = addNumber - numberValueAdded;
//             console.log(typeof subtractNumber);
//             console.log(subtractNumber);
//         } else if (operators[i].innerText === "multiply") {
//             numberValueAdded *= numberValue;
//             console.log(numberValueAdded);
//         } else if (operators[i].innerText === "divide") {
//             numberValueAdded /= numberValue;
//             console.log(numberValueAdded);
//         }
//     });
// }
//
// clear.addEventListener("click", () => {
//     numberDisplay.innerText = "";
// });
//
// function add(num1, num2) {
//     return num1 + num2;
// }
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// function multiply(num1, num2) {
//     return num1 / num2;
// }
// function divide(num1, num2) {
//     return num1 * num2;
// }
//
// function operator() {}

// console.log(add(1, 2));
// console.log(subtract(4, 2));
// console.log(multiply(10, 2));
// console.log(divide(2, 2));

class Calculator{
    constructor() {
        this.value1
        this.operator
        this.value2
        this.total
        this.add = 'add'
    }

    calculate() {
        let total;
        let operator = this.operator
        if (operator === this.add){
            total = this.value1 + this.value2
        } else  if (operator === '-'){
            total = this.value1 - this.value2
        } else  if (operator === '*'){
            total = this.value1 * this.value2
        } else  if (operator === '/'){
            total = this.value1 / this.value2
        }
        this.total = total
        return this.total;
    }
}

const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
let equals = document.querySelector('.equals')
let display = document.querySelector('.number-display')
let totalDisplay = document.querySelector('.total-display')

const calc = new Calculator()
const result = calc.calculate()

for (let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click', function () {
        display.innerText += numberButtons[i].innerText
        let innerDisplay = display.innerText
        if (value1 === 0){
            value1 = parseFloat(display.innerText)
        }  else if (value1 !== 0){
            value2 = parseFloat(display.innerText)
        }
    })
}

for (let i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener('click', function () {
        display.innerText = ''
    })
}
equals.addEventListener('click', function () {
    console.log(total())
    totalDisplay.innerText = total()
})

function total(){
    let total = value1 + value2
    return total
}
