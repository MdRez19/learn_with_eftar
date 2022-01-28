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
let firstNumberValue = null;
let secondNumberValue = null;
let currentNumberValue = '';
let currentOperatorValue = '';
let previousOperatorValue = '';

// functions...
function calculation() {
    if (previousOperatorValue === '+'){
        if (secondNumberValue !== null){
            firstNumberValue = firstNumberValue + secondNumberValue
        }
    } else if (previousOperatorValue === '-'){
        if (secondNumberValue !== null) {
            firstNumberValue = firstNumberValue - secondNumberValue
        }
    } else if (previousOperatorValue === '×'){
        if (secondNumberValue !== null) {
            firstNumberValue = firstNumberValue * secondNumberValue
        }
    } else if (previousOperatorValue === '/'){
        if (secondNumberValue !== null) {
            firstNumberValue = firstNumberValue / secondNumberValue
        }
    }
    displayTwo.innerText = ''
    displayOne.innerText = firstNumberValue
}

function calculatorInterfaceOne() {
    if (currentOperatorValue === '+' || currentOperatorValue === '-' || currentOperatorValue === '×' || currentOperatorValue === '/'){
        if (secondNumberValue !== null) {
            calculation()
        }
        previousOperatorValue = currentOperatorValue
    }
    secondNumberValue = null
}



// when the user presses a number button
function numberBtnPressed(event) {
    let numberVal = event.target.value;
    if(firstNumberValue === null){
        displayTwo.innerText += numberVal;
        currentNumberValue += numberVal;
    } else {
        displayTwo.innerText += numberVal;
        currentNumberValue += numberVal;
        secondNumberValue = parseFloat(currentNumberValue)
    }
}

// when the user presses a operator button
function operatorBtnPressed(event) {
    currentOperatorValue = event.target.value;
    if (currentOperatorValue === '+' || currentOperatorValue === '-' || currentOperatorValue === '×' || currentOperatorValue === '/') {
        if (firstNumberValue === null) {
            displayTwo.innerText = ''
            displayOne.innerText = currentNumberValue
        }
    }
    if (firstNumberValue === null) {
        firstNumberValue = parseFloat(currentNumberValue)
    }
    calculatorInterfaceOne()
    currentNumberValue = '';
}

// when the use presss equal. You must show the result
function equalBtnPressed() {
    calculatorInterfaceOne()
    previousOperatorValue = ''
}

function clearBtnPressed(){
    firstNumberValue = null
    secondNumberValue = null
    currentNumberValue = '';
    currentOperatorValue = '';
    previousOperatorValue = '';
    displayOne.innerText = '';
    displayTwo.innerText = '';
}