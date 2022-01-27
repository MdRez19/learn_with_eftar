// const prompt = require('prompt-sync')();
// let value1 = parseFloat(prompt('Enter the first number: '))
// let value2 = parseFloat(prompt('Enter the second number: '))
// let operator = prompt('Choose operator: ')
// let total = 0;
//
// if (operator === '+'){
//     total = value1 + value2
// } else  if (operator === '-'){
//     total = value1 - value2
// } else  if (operator === '*'){
//     total = value1 * value2
// } else  if (operator === '/'){
//     total = value1 / value2
// }
// console.log(total)




// const prompt = require('prompt-sync')();
//
// class Caclulator {
//
//     value1 = null
//     operator = null
//     value2 = null
//
//     constructor() {
//     }
//
//     calculate() {
//         let total;
//         if (this.operator === '+'){
//             total = this.value1 + this.value2
//         } else  if (this.operator === '-'){
//             total = this.value1 - this.value2
//         } else  if (this.operator === '*'){
//             total = this.value1 * this.value2
//         } else  if (this.operator === '/'){
//             total = this.value1 / this.value2
//         }
//         return total;
//     }
// }
//
// let calc = new Caclulator();
// calc.value1 = parseFloat(prompt('Enter the first number: '))
// calc.value2 = parseFloat(prompt('Enter the second number: '))
// calc.operator = prompt('Choose operator: ')
// let total = calc.calculate();
// console.log(total)


// const prompt = require('prompt-sync')();
//
// class Caclulator {
//     constructor(value1, value2, operator) {
//         this.value1 = value1
//         this.value2 = value2
//         this.operator = operator
//     }
//     calculate() {
//         let total;
//         if (this.operator === '+'){
//             total = this.value1 + this.value2
//         } else  if (this.operator === '-'){
//             total = this.value1 - this.value2
//         } else  if (this.operator === '*'){
//             total = this.value1 * this.value2
//         } else  if (this.operator === '/'){
//             total = this.value1 / this.value2
//         }
//         return total;
//     }
// }
//
// let calc = new Caclulator();
// calc.value1 = parseFloat(prompt('Enter the first number: '))
// calc.value2 = parseFloat(prompt('Enter the second number: '))
// calc.operator = prompt('Choose operator: ')
// let total = calc.calculate();
// console.log(total)


// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log("My name is: " + this.name);
//         console.log("My age is: " + this.age);
//     }
// }
//
// let john = new User("John", 30);
// let robert = new User("robert", 35);
//
// john.sayHi()
// robert.sayHi()


// const prompt = require('prompt-sync')();
//
// class Caclulator {
//
//     constructor(value1,operator,value2) {
//         this.value1 = value1;
//         this.operator = operator;
//         this.value2 = value2;
//     }
//
//     calculate() {
//         let total;
//         if (this.operator === '+'){
//             total = this.value1 + this.value2
//         } else  if (this.operator === '-'){
//             total = this.value1 - this.value2
//         } else  if (this.operator === '*'){
//             total = this.value1 * this.val
//             total = this.value1 * this.value2
//         } else  if (this.operator === '/'){
//             total = this.value1 / this.value2
//         }
//         return total;
//     }
// }
//
//
// let value1 = parseFloat(prompt('Enter the first number: '))
// let value2 = parseFloat(prompt('Enter the second number: '))
// let operator = prompt('Choose operator: ')
//
//
// let calc = new Caclulator(value1, operator, value2);
// let total = calc.calculate();
// console.log(total)
//
// const prompt = require('prompt-sync')();
//
// class Caclulator {
//
//     constructor(value1,operator,value2) {
//         this.value1 = value1;
//         this.operator = operator;
//         this.value2 = value2;
//     }
//
//     calculate() {
//         let total;
//         if (this.operator === '+'){
//             total = this.value1 + this.value2
//         } else  if (this.operator === '-'){
//             total = this.value1 - this.value2
//         } else  if (this.operator === '*'){
//             total = this.value1 * this.val
//             total = this.value1 * this.value2
//         } else  if (this.operator === '/'){
//             total = this.value1 / this.value2
//         }
//         return total;
//     }
// }
//
//
// let value1 = parseFloat(prompt('Enter the first number: '))
// let value2 = parseFloat(prompt('Enter the second number: '))
// let operator = prompt('Choose operator: ')
//
//
// let calc = new Caclulator(value1, operator, value2);
// let total = calc.calculate();
// console.log(total)


// const prompt = require('prompt-sync')();
//
// class Caclulator {
//     constructor() {
//         this.value1
//         this.operator
//         this.value2
//         this.total
//     }
//     calculate() {
//         let total;
//         let operator = this.operator
//         if (operator === '+'){
//             total = this.value1 + this.value2
//         } else  if (operator === '-'){
//             total = this.value1 - this.value2
//         } else  if (operator === '*'){
//             total = this.value1 * this.value2
//         } else  if (operator === '/'){
//             total = this.value1 / this.value2
//         }
//         this.total = total
//         return this.total;
//     }
// }
// //
// let calc = new Caclulator();
//
// calc.value1 = parseFloat(prompt('Enter the first number: '))
// calc.operator = prompt('Choose operator: ')
// calc.value2 = parseFloat(prompt('Enter the second number: '))
//
// console.log(calc.calculate());
// // console.log(calc.total)
//
// let cont = '';
// while (cont === 'yes' || cont === ''){
//     cont = prompt("do you want to continue? ")
//     if (cont === 'yes'){
//         calc.operator = prompt('Choose operator: ')
//         calc.value2 = parseFloat(prompt('Enter the second number: '))
//         calc.value1 = calc.total
//         calc.calculate();
//         console.log(calc.total)
//     } else {
//         console.log("good bye!")
//     }
//
// }

const prompt = require('prompt-sync')();

class Paper_size {
    constructor(mm, cm, m, inches) {
        this.mm = mm
        this.cm = cm
        this.m = m
        this.inches = inches
    }
    // result(){
    //     let choosePaper = this.choosePaper;
    //     if (choosePaper === 'A1'){
    //         let result = this.result
    //         if (result === 'mm'){
    //             console.log(this.mm)
    //         } else if (result === 'cm'){
    //             console.log(this.cm)
    //         } else if (result === 'm'){
    //             console.log(this.m)
    //         } else if (result === 'inches'){
    //             console.log(this.inches)
    //         }
    //         return result
    //     }
    //
    // }
}

const A1 = new Paper_size('594 x 841', '59.4 x 84.1', '0.594 x 0.841', '23.4 x 33.1')
const A2 = new Paper_size('420 x 594', '42.0 x 59.4', '0.420 x 0.594', '16.5 x 23.4')
const A3 = new Paper_size('297 x 420', '29.7 x 42.0', '0.297 x 0.420', '11.7 x 16.5')
const A4 = new Paper_size('210 x 297', '21.0 x 29.7', '0.210 x 0.297', '8.3 x 11.7')


const choosePaper = prompt('Choose the paper: ')
let result = ''
if (choosePaper === 'A1'){
    result = prompt(`Choose the paper size: `)
    if (result === 'mm'){
        console.log(A1.mm)
    } else if (result === 'cm'){
        console.log(A1.cm)
    } else if (result === 'm'){
        console.log(A1.m)
    } else if (result === 'inches'){
        console.log(A1.inches)
    }
}else if (choosePaper === 'A2'){
    result = prompt(`Choose the paper size: `)
    if (result === 'mm'){
        console.log(A2.mm)
    } else if (result === 'cm'){
        console.log(A2.cm)
    } else if (result === 'm'){
        console.log(A2.m)
    } else if (result === 'inches'){
        console.log(A2.inches)
    }
}else if (choosePaper === 'A3'){
    result = prompt(`Choose the paper size: `)
    if (result === 'mm'){
        console.log(A3.mm)
    } else if (result === 'cm'){
        console.log(A3.cm)
    } else if (result === 'm'){
        console.log(A3.m)
    } else if (result === 'inches'){
        console.log(A3.inches)
    }
}else if (choosePaper === 'A4'){
    result = prompt(`Choose the paper size: `)
    if (result === 'mm'){
        console.log(A4.mm)
    } else if (result === 'cm'){
        console.log(A4.cm)
    } else if (result === 'm'){
        console.log(A4.m)
    } else if (result === 'inches'){
        console.log(A4.inches)
    }
}

