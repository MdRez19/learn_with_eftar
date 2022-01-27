// 1. find html elements
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const display = document.querySelector(".display");
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
 let total = null



// when the user presses a number button
function numberBtnPressed(event) {
    let numberVal = event.target.value;
    if(firstValue === null){
        display.innerText += numberVal;
        numberValue += numberVal;
    } else if (total === null){
        display.innerText += numberVal;
        numberValue += numberVal;
        secondValue = parseFloat(numberValue)
    } else if (total !== null){
        firstValue = total
        display.innerText += numberVal;
        numberValue += numberVal;
        secondValue = parseFloat(numberValue)
    }
}

// when the user presses a operator button
function operatorBtnPressed(event) {
    let operatorVal = event.target.value;
    operatorValue = operatorVal
    if (operatorValue === '+' || operatorValue === '-' || operatorValue === '×' || operatorValue === '/'){
        display.innerText = ''
    }
    if (secondValue === null) {
        firstValue = parseFloat(numberValue)
    }
    numberValue = '';
}

// when the use presss equal. You must show the result
function equalBtnPressed() {
     if (operatorValue === '+'){
         display.innerText = ''
         total = firstValue + secondValue
         display.innerText = total;
     } else if (operatorValue === '-'){
         display.innerText = ''
         total = firstValue - secondValue
         display.innerText = total;
     } else if (operatorValue === '×'){
         display.innerText = ''
         total = firstValue * secondValue
         display.innerText = total;
     } else if (operatorValue === '/'){
         display.innerText = ''
         total = firstValue / secondValue
         display.innerText = total;
     }

}

function clearBtnPressed(){
    firstValue = null
    secondValue = null
    numberValue = '';
    operatorValue = '';
    total = null
    display.innerText = ''
}



// example:
// 1+ 2+ 3

// step 1: press 1
// step 2: press +
// step 3: press 2
// step 4: press +
// step 5: press 3
// step 6: press =
//
// at each step:
// 1. what is the values of your variable
// 2. what should the calculator display








// // when the user presses a number button
// function numberBtnPressed(event) {
//     let numberVal = event.target.value;
//     if(firstValue === null){
//         display.innerText += numberVal;
//         numberValue += numberVal
//         //numberValue = display.innerText;
//     } else if (total === null){
//         numberValue = null;
//         display.innerText += numberVal;
//         //numberValue = display.innerText;
//         secondValue = parseFloat(numberValue)
//     } else if (total !== null){
//         firstValue = total
//         numberValue = null
//         display.innerText += numberVal;
//         //numberValue = display.innerText
//         secondValue = parseFloat(numberValue)
//     }
// }