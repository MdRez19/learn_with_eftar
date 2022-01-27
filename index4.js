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
 let secondryOperator = '';
 let total = null;

// functions...
function calculation() {
    if (primaryOperator === '+'){
        displayTwo.innerText = ''
        firstValue = firstValue + secondValue
        displayOne.innerText = firstValue
    } else if (primaryOperator === '-'){
        displayTwo.innerText = ''
        firstValue = firstValue - secondValue
        displayOne.innerText = firstValue
    } else if (primaryOperator === '×'){
        displayTwo.innerText = ''
        firstValue = firstValue * secondValue
        displayOne.innerText = firstValue
    } else if (primaryOperator === '/'){
        displayTwo.innerText = ''
        firstValue = firstValue / secondValue
        displayOne.innerText = firstValue
    }
}

function calculatorInterface() {
    if (operatorValue === '+'){
        calculation()
        if (secondValue !== null){
            displayTwo.innerText = ''
            displayOne.innerText = firstValue
            secondValue = null
        }
        primaryOperator = operatorValue
    } else if (operatorValue === '-'){
        calculation()
        if (secondValue !== null){
            displayTwo.innerText = ''
            displayOne.innerText = firstValue
            secondValue = null
        }
        primaryOperator = operatorValue
    } else if (operatorValue === '×'){
        calculation()
        if (secondValue !== null){
            displayTwo.innerText = ''
            displayOne.innerText = firstValue
            secondValue = null
        }
        primaryOperator = operatorValue
    } else if (operatorValue === '/'){
        calculation()
        if (secondValue !== null){
            displayTwo.innerText = ''
            displayOne.innerText = firstValue
            secondValue = null
        }
        primaryOperator = operatorValue
    }
}



// when the user presses a number button
function numberBtnPressed(event) {
    let numberVal = event.target.value;
    if(firstValue === null){
        displayTwo.innerText += numberVal;
        numberValue += numberVal;
    } else if (total === null){
        displayTwo.innerText += numberVal;
        numberValue += numberVal;
        secondValue = parseFloat(numberValue)
    } else if (total !== null){
        firstValue = total
        displayTwo.innerText += numberVal;
        numberValue += numberVal;
        secondValue = parseFloat(numberValue)
    }
}

// when the user presses a operator button
function operatorBtnPressed(event) {
    operatorValue = event.target.value;
    if (operatorValue === '+' || operatorValue === '-' || operatorValue === '×' || operatorValue === '/'){
        displayTwo.innerText = ''
        displayOne.innerText = numberValue
    }
    if (secondValue === null) {
        firstValue = parseFloat(numberValue)
    }
    calculatorInterface()
    numberValue = '';
}

// when the use presss equal. You must show the result
function equalBtnPressed() {
     if (operatorValue === '+'){
         displayTwo.innerText = ''
         total = firstValue + secondValue
         displayOne.innerText = total;
     } else if (operatorValue === '-'){
         displayTwo.innerText = ''
         total = firstValue - secondValue
         displayOne.innerText = total;
     } else if (operatorValue === '×'){
         displayTwo.innerText = ''
         total = firstValue * secondValue
         displayOne.innerText = total;
     } else if (operatorValue === '/'){
         displayTwo.innerText = ''
         total = firstValue / secondValue
         displayOne.innerText = total;
     }

}

function clearBtnPressed(){
    firstValue = null
    secondValue = null
    numberValue = '';
    operatorValue = '';
    primaryOperator = '';
    total = null
    displayOne.innerText = ''
    displayTwo.innerText = ''
}