// 1. find html elements
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const displayOne = document.querySelector(".display-one");
const displayTwo = document.querySelector(".display-two");
const clearButton = document.querySelector(".clear");

// 2. add click event
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", numberBtnPressed);
}
for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", operatorBtnPressed);
}
equalsButton.addEventListener("click", equalBtnPressed);
clearButton.addEventListener("click", clearBtnPressed);

//**********
// calculator code
//**********

// put your variables here
let firstValue = null;
let secondValue = null;
let numberValue = '';
let operatorValue = '';
let primaryOperator = '';
let secondaryOperator = '';

// functions...
function calculation() {
    if (primaryOperator === '+'){
        if (secondValue !== null){
            displayTwo.innerText = ''
            firstValue = firstValue + secondValue
            displayOne.innerText = firstValue
            secondaryOperator = numberValue
        }
    } else if (primaryOperator === '-'){
        if (secondValue !== null) {
            displayTwo.innerText = ''
            firstValue = firstValue - secondValue
            displayOne.innerText = firstValue
            secondaryOperator = numberValue
        }
    } else if (primaryOperator === '×'){
        if (secondValue !== null) {
            displayTwo.innerText = ''
            firstValue = firstValue * secondValue
            displayOne.innerText = firstValue
            secondaryOperator = numberValue
        }
    } else if (primaryOperator === '/'){
        if (secondValue !== null) {
            displayTwo.innerText = ''
            firstValue = firstValue / secondValue
            displayOne.innerText = firstValue
            secondaryOperator = numberValue
        }
    }
}

function calculatorInterfaceOne() {
    if (operatorValue === '+' || operatorValue === '-' || operatorValue === '×' || operatorValue === '/'){
        calculation()
        calculatorInterfaceTwo()
        primaryOperator = operatorValue
        if (secondValue === null){
            secondaryOperator = operatorValue
        }
    }
    if (operatorValue === '+'){
        calculation()
        calculatorInterfaceTwo()
        primaryOperator = operatorValue
        if (secondValue === null){
            secondaryOperator = operatorValue
        }
    } else if (operatorValue === '-'){
        calculation()
        calculatorInterfaceTwo()
        primaryOperator = operatorValue
        if (secondValue === null){
            secondaryOperator = operatorValue
        }
    } else if (operatorValue === '×'){
        calculation()
        calculatorInterfaceTwo()
        primaryOperator = operatorValue
        if (secondValue === null){
            secondaryOperator = operatorValue
        }
    } else if (operatorValue === '/'){
        calculation()
        calculatorInterfaceTwo()
        primaryOperator = operatorValue
        if (secondValue === null){
            secondaryOperator = operatorValue
        }
    }
}

function calculatorInterfaceTwo() {
    if (secondValue !== null){
        displayTwo.innerText = ''
        displayOne.innerText = firstValue
    }
}



// when the user presses a number button
function numberBtnPressed(event) {
    let numberVal = event.target.value;
    if(firstValue === null){
        displayTwo.innerText += numberVal;
        numberValue += numberVal;
    } else {
        displayTwo.innerText += numberVal;
        numberValue += numberVal;
        secondValue = parseFloat(numberValue)
    }
}

// when the user presses a operator button
function operatorBtnPressed(event) {
    operatorValue = event.target.value;
    if (operatorValue === '+' || operatorValue === '-' || operatorValue === '×' || operatorValue === '/') {
        if (secondaryOperator === '') {
            displayTwo.innerText = ''
            displayOne.innerText = numberValue
        }
    }
    if (secondaryOperator === '') {
        firstValue = parseFloat(numberValue)
    }
    calculatorInterfaceOne()
    numberValue = '';
}

// when the use presss equal. You must show the result
function equalBtnPressed() {
    calculatorInterfaceOne()
    primaryOperator = ''
}

function clearBtnPressed(){
    firstValue = null
    secondValue = null
    numberValue = '';
    operatorValue = '';
    primaryOperator = '';
    secondaryOperator = '';
    displayOne.innerText = '';
    displayTwo.innerText = '';
}