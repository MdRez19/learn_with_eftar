// Exercise 1 - Mastermind
// Generate a random four digit number. The player has to keep inputting four digit numbers until they guess the
// randomly generated number. After each unsuccessful try it should say
// how many numbers they got correct, but not which position they got right. At the end of the game should congratulate
// the user and say how many tries it took.
//
// Extensions:
// 1. Let the user pick an easy mode which shows the user which position that they guessed correctly
// 2. Let the user pick a hard mode that gives five digits instead of four
// 3. After the game is finished, ask the user for their name and input their score into a table. Show them the high
// score at the start of the game so that it gives a sense of competition.


// const prompt = require('prompt-sync')();
// let randomNumber = Math.floor(1000 + Math.random() * 9000);
// randomNumber = randomNumber.toString();
// console.log(randomNumber)
//
// let userName = prompt('Please enter your name: ')
// userName = userName.charAt(0).toUpperCase() + userName.slice(1)
// console.log(`Hello ${userName}, Welcome to the game!`)
//
// let guessNumber = 0;
// let numberOfTurn = 0;
//
// while (guessNumber !== randomNumber){
//     let guessNumberMach = 0;
//     guessNumber = prompt('Please enter four digits number: ')
//     if(guessNumber.length === 4){
//         for(let i = 0; i < guessNumber.length; i++){
//             if(randomNumber.includes(guessNumber[i])){
//                 guessNumberMach++
//             }
//         }
//         if(guessNumberMach > 1 && guessNumberMach < 4){
//             console.log(`You have guessed correct ${guessNumberMach} numbers`)
//         }else if (guessNumberMach < 2) {
//             console.log(`You have guessed correct ${guessNumberMach} number`)
//         }
//     }else if (guessNumber.length < 4){
//         console.log('You entered number less then 4 digits!')
//     }else if (guessNumber.length > 4){
//         console.log('You entered number more then 4 digits!')
//     }
//     numberOfTurn++
// }
//
// if(numberOfTurn > 1){
//     console.log(`Congratulate ${userName}, you have guessed the correct number in ${numberOfTurn} turns!`)
// } else {
//     console.log(`Congratulate ${userName}, you have guessed the correct number in ${numberOfTurn} turn!`)
// }

// #################################################################

// Solution no - 2
// const prompt = require('prompt-sync')();
//
// let userName = prompt('Please enter your name: ')
// userName = userName.charAt(0).toUpperCase() + userName.slice(1)
// console.log(`Hello ${userName}, Welcome to the game!`)
//
// let randomNumber = 0
// let gameMode = '';
// let guessNumber = 0;
// let numberOfTurn = 0;
//
// while (gameMode !== 'EASY' && gameMode !== 'HARD'){
//     gameMode = prompt('Please chose the game mode: ')
//     gameMode = gameMode.toUpperCase()
//     if (gameMode !== 'EASY' && gameMode !== 'HARD'){
//         console.log(`${userName}, you have chosen wrong word. Please choose only EASY or HARD!`)
//     }else {
//         if (gameMode === 'EASY'){
//             console.log(`${userName}, you have chosen ${gameMode} mode!`)
//             randomNumber = Math.floor(1000 + Math.random() * 9000);
//             randomNumber = randomNumber.toString();
//             console.log(randomNumber)
//             while (guessNumber !== randomNumber){
//                 let guessNumberMach = 0;
//                 guessNumber = prompt('Please enter four digits number: ')
//                 if(guessNumber.length === 4){
//                     for(let i = 0; i < guessNumber.length; i++){
//                         if(randomNumber.includes(guessNumber[i])){
//                             guessNumberMach++
//                         }
//                     }
//                     if(guessNumberMach > 1 && guessNumberMach < 4){
//                         console.log(`You have guessed correct ${guessNumberMach} numbers`)
//                     }else if (guessNumberMach < 2) {
//                         console.log(`You have guessed correct ${guessNumberMach} number`)
//                     }
//                 }else if (guessNumber.length < 4){
//                     console.log('You entered number less then 4 digits!')
//                 }else if (guessNumber.length > 4){
//                     console.log('You entered number more then 4 digits!')
//                 }
//                 numberOfTurn++
//             }
//
//         }else if (gameMode === 'HARD'){
//             console.log(`Hello ${userName}, Welcome to the game. You have chosen ${gameMode} mode!`)
//             randomNumber = Math.floor(10000 + Math.random() * 90000);
//             randomNumber = randomNumber.toString();
//             console.log(randomNumber)
//             while (guessNumber !== randomNumber){
//                 let guessNumberMach = 0;
//                 guessNumber = prompt('Please enter five digits number: ')
//                 if(guessNumber.length === 5){
//                     for(let i = 0; i < guessNumber.length; i++){
//                         if(randomNumber.includes(guessNumber[i])){
//                             guessNumberMach++
//                         }
//                     }
//                     if(guessNumberMach > 1 && guessNumberMach < 5){
//                         console.log(`You have guessed correct ${guessNumberMach} numbers`)
//                     }else if (guessNumberMach < 2) {
//                         console.log(`You have guessed correct ${guessNumberMach} number`)
//                     }
//                 }else if (guessNumber.length < 5){
//                     console.log('You entered number less then 5 digits!')
//                 }else if (guessNumber.length > 5){
//                     console.log('You entered number more then 5 digits!')
//                 }
//                 numberOfTurn++
//             }
//
//         }
//     }
// }
//
// if(numberOfTurn > 1){
//     console.log(`Congratulate ${userName}, you have guessed the correct number in ${numberOfTurn} turns!`)
// } else {
//     console.log(`Congratulate ${userName}, you have guessed the correct number in ${numberOfTurn} turn!`)
// }

// #########################################################

// Solution no - 2
const prompt = require('prompt-sync')();
let easy = function () {
    let randomNumberOne = Math.floor(1000 + Math.random() * 9000);
    randomNumberOne = randomNumberOne.toString();
    return randomNumberOne
}
console.log(easy())

// let heard = function () {
//     let randomNumberTwo = Math.floor(10000 + Math.random() * 90000);
//     randomNumberTwo = randomNumberTwo.toString();
//     return randomNumberTwo
// }
// console.log(heard())

let guessFourDigit = function () {
    let guessNumber = prompt('Please enter four digits number: ')
    if (guessNumber === easy){
        console.log('hello')
    }
}

console.log(guessFourDigit())

// let call = 'everyone'
// function hello1() {
//     return 'Hello World';
// }
//
// let fun = hello1;
//
// function hello2(add) {
//     return `${fun()} ${add}`
// }
// console.log(hello2(call))

// let randomNumberOne = Math.floor(1000 + Math.random() * 9000);
// randomNumberOne = randomNumberOne.toString();
// console.log(randomNumberOne)

// let randomNumberTwo = Math.floor(10000 + Math.random() * 90000);
// randomNumberTwo = randomNumberTwo.toString();
// console.log(randomNumberTwo)
//
//
//
// let userName = prompt('Please enter your name: ')
// userName = userName.charAt(0).toUpperCase() + userName.slice(1)
// console.log(`Hello ${userName}, Welcome to the game!`)
//
// let guessNumber = 0;
// let numberOfTurn = 0;
//
// while (guessNumber !== randomNumberOne){
//     let guessNumberMach = 0;
//     guessNumber = prompt('Please enter four digits number: ')
//     if(guessNumber.length === 4){
//         for(let i = 0; i < guessNumber.length; i++){
//             if(randomNumberOne.includes(guessNumber[i])){
//                 guessNumberMach++
//             }
//         }
//         if(guessNumberMach > 1 && guessNumberMach < 4){
//             console.log(`You have guessed correct ${guessNumberMach} numbers`)
//         }else if (guessNumberMach < 2) {
//             console.log(`You have guessed correct ${guessNumberMach} number`)
//         }
//     }else if (guessNumber.length < 4){
//         console.log('You entered number less then 4 digits!')
//     }else if (guessNumber.length > 4){
//         console.log('You entered number more then 4 digits!')
//     }
//     numberOfTurn++
// }
//
// if(numberOfTurn > 1){
//     console.log(`Congratulate ${userName}, you have guessed the correct number in ${numberOfTurn} turns!`)
// } else {
//     console.log(`Congratulate ${userName}, you have guessed the correct number in ${numberOfTurn} turn!`)
// }




// function greaterThanLessThan (a,b,c) {
// //write your code here!
//     if(a < b < c && c < b < a){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
//
// greaterThanLessThan(1, 2, 3)

// const bill = (products, tax) => {
//     let total = 0;
//     let taxOfTotal = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i];
//     }
//     taxOfTotal = total * tax;
//     total += taxOfTotal;
//     return total;
// }
//
// console.log(bill([10, 15, 30], 0.20));