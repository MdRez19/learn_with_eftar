
// for(let i = 0; i < 3; i++){
//     console.log('Graphics')
// }

// for(let i = 1; i < 3; i++){
//     console.log('Processor')
// }

// type = 'pug'
// for(i = 0; i < 5; i++){
//     console.log(type)
// }


// for(let i = 2; i < 20; i+=3){
//     console.log(i)
// }

// for(let i = 10; i < 55; i+=10){
//     console.log(i)
// }

// for(let i = 35; i > 7; i-=5){
//     console.log(i)
// }

// let number = 1;
// for(let i = 0; i < 4; i++){
//     number+=3
//     console.log(number)
// }

// for(let i = 0; i < 6; i++){
//     console.log(i)
// }

// for(let i = 2; i < 6; i++){
//     console.log(i)
// }

// for(let i = 7; i > 4; i--){
//     console.log(i)
// }

// for(let i = 1; i < 11; i+=3){
//     console.log(i)
// }

// for(let i = 45; i >= 9; i-=9){
//     console.log(i)
// }

// example number 70:
// let num1 = 80;
// let num2 = 40;
//
// for(let i = 0; i < 2; i++){
//     num1 = num1 + num2;
//     num2 = num2 / 2;
//     console.log(num1)
//     console.log(num2)
// }

// example no: 71
// let num1 = 2;
// let num2 = 4;
// let num3 = 6;
//
// for(let i = 0; i < 4; i++){
//     num1 = (num1 + num2 - 8) * 2;
//     num2 = num2 + num3;
//     console.log(num1)
//     console.log(num2)
//     console.log(num3)
// }

// example no: 72
// let num1 = 1;
// let num2 = 3;
// let num3 = 5;
//
// for(let i = 0; i < 5; i++){
//     num3 = num1 + 3;
//     num2 = num3 -2;
//     num1 = num3 + num2;
//     console.log(`num1 is ${num1}`)
//     console.log('=====')
//     console.log(`num2 is ${num2}`)
//     console.log('=====')
//     console.log(`num3 is ${num3}`)
//     console.log('=====')
// }

// example no: 73
// let num1 = 5;
// let num2 = 5;
// let num3 = 5;
//
// for(let i = 0; i < 5; i++){
//     num3 = num1 - (num2 + 2);
//     num2 = (num2 - 2) - num3;
//     num3 = num3 + 7
//     console.log(num1)
//     console.log('=====')
//     console.log(num2)
//     console.log('=====')
//     console.log(num3)
//     console.log('=====')
//
// }

// example no: 74
// let num1 = 2;
// let num2 = 4;
//
// for(let i = 0; i < 4; i++){
//     num1 = num2 + num1;
//     num2 = num1 - i;
//     console.log(num1)
//     console.log(num2)
// }

// example no: 75
// let num1 = 4;
// let num2 = 6;
// let num3 = 0
//
// for(let i = 3; i < 7; i++){
//     num1 = (num1/2 + num2/3) * i;
//     num3 = num2 + num1;
//     console.log(num1)
//     console.log(num3)
// }

// example no: 76
// let start = 1;
// for(let i = 1; i < 6; i++){
//     start = start * 10;
//     var mid = start % i;
//     var end = mid + i;
//     start = end
//
// }
//
// console.log(start);
// console.log(mid);
// console.log(end)

// example no: 77
// let text1 = 'a';
// let text2 = 'b';
// let text3 = '';
// for(let i = 0; i < 4; i++){
//     var phrase1 = i + text1;
//     var phrase2 = text2 + i;
//     if(i <= 2){
//         text3 = text3 + phrase1
//     }else {
//         text3 = text3 + phrase2
//     }
//
// }
// console.log(text3);

// example no: 78
// let text1 = 'this';
// let text2 = 'is';
// let text3 = 'hard';
// let words = '';
// let number = 0
// function count(word, letter) {
//     return word.split(letter).length-1;
// }
// for(let i = text2.length; i < text3.length; i++){
//     words = words + text1 + text2;
//     number = number + count(words, 's');
//     words = words.substring(2, 5) + text3;
//     number = i + number + count(text3, 'h');
// }
// console.log(number)

// const prompt = require('prompt-sync')();
//
// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);

// example no: 79
// const prompt = require('prompt-sync')();
// let num1 = 0;
// while (num1 != 22){
//     num1 = prompt('Please enter a number')
//     if(num1 == 22){
//         console.log('program finished')
//     }
// }

// example no: 80
// const prompt = require('prompt-sync')();
// let guess = 0;
// while (guess != 34){
//     guess = prompt('Please enter a number')
//     if(guess == 34){
//         console.log('program finished')
//     }
// }

// example no: 81
// const prompt = require('prompt-sync')();
// let num = 34;
// while (num == 34 || num == 22 || num == 20){
//     num = prompt('Please enter a number')
// }
// console.log('program finished')

// example no: 82
// const prompt = require('prompt-sync')();
// let temperature = 0;
// while (temperature <= 45){//     temperature = prompt('Please enter a temperature')
//     if(temperature > 45){
//         console.log('program is finished')
//     }
// }

// example no: 83
// const prompt = require('prompt-sync')();
// let number = 0;
// while (number < 5 || number > 17){
//     number = prompt('Please enter a number')
//     if(number > 5 && number < 17){
//         console.log('program finished')
//     }
// }

// example no: 84
// const prompt = require('prompt-sync')();
// let length = 0;
// while(!(length >= 22 && length <= 45)){
//     length = prompt('Please enter a length')
// }
// console.log('Program finished')

// example no: 85
// const prompt = require('prompt-sync')();
// let text = '';
// while(text.length < 4){
//     text = prompt('Please enter a word')
// }
// console.log('Program finished')

// example no: 86
// const prompt = require('prompt-sync')();
// String.prototype.count=function(c) {
//     var result = 0, i = 0;
//     for(i;i<this.length;i++)if(this[i]==c)result++;
//     return result;
// };
// let word = '';
// while(word.count('s') < 2){
//     word = prompt('please enter a word')
// }
// console.log('program finished')

// example no: 87
// const prompt = require('prompt-sync')();
// String.prototype.count=function(c) {
//     var result = 0, i = 0;
//     for(i;i<this.length;i++)if(this[i]==c)result++;
//     return result;
// };
// let text = '';
// while(text.count('a') <= 1 || text.length < 4){
//     text = prompt('please enter a word')
// }
// console.log('program finished')

// CHAPTER 16:
// Program 28: Lines cheat...
// const prompt = require('prompt-sync')();
// let ask = prompt('Which sentence would yor like copied')
// for(let i = 0; i <= 20; i++){
//     console.log(ask)
// }

// // Program 29: Charity collection (part 3)...
// const prompt = require('prompt-sync')();
// let money = 0;
// let totalRaised = 0;
// for(let i = 0; i < 3; i++){
//     money = prompt(`Please enter the amount raised no ${i + 1}: `)
//     totalRaised += parseInt(money)
// }
// let doubleTheMoney = totalRaised * 2;
// console.log(doubleTheMoney)

// Program 30: Name switch...
// const prompt = require('prompt-sync')();
// let firstName = prompt('Please enter first name:')
// let surName = prompt('Please enter last name:')
// let str1 = firstName.substring(0, 1)
// let str2 = surName.substring(0, 1)
// let upper1 = str1.toUpperCase();
// let upper2 = str2.toUpperCase();
// let str3 = firstName.substring(1)
// let str4 = surName.substring(1)
// let upper3 = firstName.toUpperCase()
// let upper4 = surName.toUpperCase()
// let lower1 = firstName.toLowerCase()
// let lower2 = surName.toLowerCase()
//
// console.log(upper1 + ' ' + upper2 + ' ' + upper3 + ' ' + lower2 + ' ' + upper1 + str3 + upper2 + str4);
// console.log(upper1 + str3 + upper2 + str4 + ' ' + upper4 + ' ' + ' ' + lower1 + ' ' + str1 + ' ' + str2);
// console.log(upper1 + ' ' + upper2 + ' ' + upper3 + ' ' + lower2 + ' ' + upper1 + str3 + upper2 + str4);
// console.log(upper1 + str3 + upper2 + str4 + ' ' + upper4 + ' ' + ' ' + lower1 + ' ' + str1 + ' ' + str2);
// console.log(upper1 + ' ' + upper2 + ' ' + upper3 + ' ' + lower2 + ' ' + upper1 + str3 + upper2 + str4);
// console.log(upper1 + str3 + upper2 + str4 + ' ' + upper4 + ' ' + ' ' + lower1 + ' ' + str1 + ' ' + str2);

// =============================================
// Program 31: cricket over...
// const prompt = require('prompt-sync')();
// let ball1 = prompt('Please enter the score')
// let ball2 = prompt('Please enter the score')
// let ball3 = prompt('Please enter the score')
// let ball4 = prompt('Please enter the score')
// let ball5 = prompt('Please enter the score')
// let ball6 = prompt('Please enter the score')
// let sum = parseInt(ball1) + parseInt(ball2) + parseInt(ball3) + parseInt(ball4) + parseInt(ball5) + parseInt(ball6);
// console.log(sum)

// Program 31: cricket over(simple 2)...
// const prompt = require('prompt-sync')();
// let totalScores = 0;
// let ball = 0
// for(let i = 0; i < 6; i++){
//     ball = prompt(`Please enter the score ball${i + 1}: `)
//     totalScores += parseInt(ball)
// }
// console.log(totalScores)
// ==========================================

// =======================================
// Program 32: average temperature...
// const prompt = require('prompt-sync')();
// let tem1 = prompt('Please enter the score')
// let tem2 = prompt('Please enter the score')
// let tem3 = prompt('Please enter the score')
// let tem4 = prompt('Please enter the score')
// let tem5 = prompt('Please enter the score')
// let tem6 = prompt('Please enter the score')
// let tem7 = prompt('Please enter the score')
// let totalTem = parseInt(tem1) + parseInt(tem2) + parseInt(tem3) + parseInt(tem4) + parseInt(tem5) + parseInt(tem6) + parseInt(tem7)
// let averageTem = totalTem / 7
// console.log(averageTem.toFixed(2))

// Program 32: average temperature(simple 2)...
// const prompt = require('prompt-sync')();
// let day = 0;
// let totalTemperature = 0;
// for(let i = 0; i < 7; i++){
//     day = prompt(`Please enter the temperature of day ${i + 1}: `);
//     totalTemperature += parseInt(day);
// }
// let averageTemperature = totalTemperature / 7;
// console.log(averageTemperature.toFixed(2))
// ============================================

// Program 33: Lines cheat(part 2)...
// const prompt = require('prompt-sync')();
// let ask = prompt('Which sentence would yor like copied: ')
// let toCopy = prompt('How many times would you like to copied? ')
// for(let i = 0; i < toCopy; i++){
//     console.log(ask)
// }

// Program 34: Charity collection (part 4)...
// const prompt = require('prompt-sync')();
// let totalPeople = prompt('How many charity raisers were there? ')
// let money = 0;
// let totalRaised = 0;
// for(let i = 0; i < totalPeople; i++){
//     money = prompt(`Please enter the amount raised no ${i + 1}: `)
//     totalRaised += parseInt(money)
// }
// let doubleTheMoney = totalRaised + 2000;
// console.log(doubleTheMoney)

// Program 35: Press up challenge...
// const prompt = require('prompt-sync')();
// let totalStudents = prompt('Please enter the number of student: ')
// console.log('Enter the time in seconds for each student:...')
//
// let totalTime = 0;
// let studentTime = 0;
//
// for(let i = 0; i < totalStudents; i++){
// studentTime = prompt(`Student ${i + 1}: `);
// totalTime += parseInt(studentTime);
// }
//
// let averageTimes = totalTime / totalStudents;
// console.log(averageTimes.toFixed(2));

// Program 36: Number patterns...
// for(let i = 0; i < 12; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }


// Program 37: Number patterns(part 2)...
// const prompt = require('prompt-sync')();
// let firstNumber = prompt('Please enter the first number: ');
// firstNumber = parseInt(firstNumber)
// let lastNumber = prompt('Please enter the last number: ')
// lastNumber = parseInt(lastNumber)
// for(let i = firstNumber; i <= lastNumber; i++){
//         if(i % 2 !== 0){
//             console.log(i)
//         }
// }


// Program 38: Password...
// const prompt = require('prompt-sync')();
// let password = '';
// while (password !== 'ornery'){
//     password = prompt('Please enter your password: ')
//     if(password !== 'ornery') {
//         console.log('Sorry, incorrect! Try again.')
//     }
//     if(password === 'ornery'){
//         console.log('Entry gained')
//     }
// }

// Program 39: Number patterns(part 3)...
// const prompt = require('prompt-sync')();
// let firstNumber = prompt('Please enter the first number: ');
// firstNumber = parseInt(firstNumber)
// let lastNumber = 0;
// while (lastNumber <= (firstNumber + 20)){
//     lastNumber = prompt('Please enter the last number: ')
//     lastNumber = parseInt(lastNumber)
//     if(lastNumber <= (firstNumber + 20)) {
//         console.log(`Sorry, the number must be more then at last ${firstNumber}+20!`)
//     }
// }
//     for(let i = firstNumber; i <= lastNumber; i++){
//             if(i % 2 !== 0){
//                 console.log(i)
//             }
//     }

// Program 40: Advice please(part 3)...solution 1
// const prompt = require('prompt-sync')();
// let advice = '';
// while (advice !== 'Y' && advice !== 'N') {
//     advice = prompt('Would you like some advice? ')
//     advice = advice.toUpperCase()
//     if(advice !== 'Y' && advice !== 'N'){
//         console.log('Please enter Y or N only.')
//     }
//     while (advice === 'N'){
//         if(advice !== 'Y'){
//             console.log('Do not be silly. You definitely need advice!')
//         }
//         advice = prompt('Would you like some advice? ')
//         advice = advice.toUpperCase()
//     }
//     if (advice === 'Y') {
//         console.log('Do not feed the trolls.')
//     }
// }

// Program 40: Advice please(part 3)...solution 2
// const prompt = require('prompt-sync')();
// let advice = '';
// while (advice !== 'Y') {
//     advice = prompt('Would you like some advice? ')
//     advice = advice.toUpperCase()
//     if(advice !== 'Y' && advice !== 'N'){
//         console.log('Please enter Y or N only.')
//     }
//     if(advice === 'N'){
//         console.log('Do not be silly. You definitely need advice!')
//     }
//     if (advice === 'Y') {
//         console.log('Do not feed the trolls.')
//     }
// }

// Program 41: No more presents...
// const prompt = require('prompt-sync')();
// let totalMoney = 200;
// let present = 0;
// let presentNumber = 0;
// let totalPresent = 0;
// while(totalPresent <= totalMoney){
//     presentNumber += 1;
//     present = prompt(`Please enter the price of present no ${presentNumber}: `);
//     present = parseInt(present);
//     if(totalMoney >= present) {
//         totalPresent += present;
//     }
//     if(totalPresent > totalMoney){
//         console.log('Limit Exceeded!');
//         console.log(`You can't include the last £${present} present!`)
//         console.log(`Total present limit is £${totalMoney}!`)
//     }
// }

// Program 42: Menu system...
// const prompt = require('prompt-sync')();
// let letter;
// letter = prompt('Enter your menu choice (Q, A, K or L)! ')
// letter = letter.toUpperCase();
// while(letter !== 'Q' && letter !== 'A' && letter !== 'K' && letter !== 'L'){
//         letter = prompt(`${letter} is not valid. Enter (Q, A, K or L)! `)
//         letter = letter.toUpperCase();
// }
// console.log(`${letter} selected!`)
//
// // Program 42: Guess the number...
const prompt = require('prompt-sync')();
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber)
let guessNumber;
    guessNumber = prompt('Guess the hidden number between 1 and 100. Enter your guess: ')
    guessNumber = parseInt(guessNumber)
    while (guessNumber !== randomNumber) {
        if (guessNumber > 100) {
            guessNumber = prompt('Your guess was not valid. Enter it again: ')
        } else if (guessNumber > randomNumber && guessNumber <= 100) {
            guessNumber = prompt('Your guess is too high. Try again: ')
        } else if (guessNumber < randomNumber){
            guessNumber = prompt('Your guess is too low. Try again: ')
        }
        guessNumber = parseInt(guessNumber)
    }
if(guessNumber === randomNumber){
    console.log('Correct! Well Done.')
}

// Program 32: average temperature(simple 2)...
// Solution No 1:
// const prompt = require('prompt-sync')();
// let day = 0;
// let averageTemperatureWeek1 = 0;
// let averageTemperatureWeek2 = 0;
// let averageTemperatureWeek3 = 0;
// let averageTemperatureWeek4 = 0;
//
// for(let i = 0; i < 4; i++){
//     let totalTemperature = 0;
//     console.log(`Week ${i + 1}`)
//     let j = 0;
//     while(j < 7){
//         day = prompt(`Please enter the temperature of day ${j + 1}: `);
//         day = parseInt(day);
//         if(day >= -40 && day <= 55){
//             totalTemperature += day;
//             j++
//         }else {
//             console.log('Temperature should be between -40 and 55!')
//         }
//     }
// if(i === 0){
//     averageTemperatureWeek1 = (totalTemperature / 7).toFixed(2);
// } else if(i === 1){
//     averageTemperatureWeek2 = (totalTemperature / 7).toFixed(2);
// } else if(i === 2){
//     averageTemperatureWeek3 = (totalTemperature / 7).toFixed(2);
// } else {
//     averageTemperatureWeek4 = (totalTemperature / 7).toFixed(2);
// }
// }
// console.log(`Week 1 average was: ${averageTemperatureWeek1} degree centigrade.`)
// console.log(`Week 2 average was: ${averageTemperatureWeek2} degree centigrade.`)
// console.log(`Week 3 average was: ${averageTemperatureWeek3} degree centigrade.`)
// console.log(`Week 4 average was: ${averageTemperatureWeek4} degree centigrade.`)

// Solution No 2:
// const prompt = require('prompt-sync')();
// let day = 0;
// const averageTemperatures = new Array(0, 0, 0, 0)
//
// for(let i = 0; i < 4; i++){
//     let totalTemperature = 0;
//     console.log(`Week ${i + 1}`)
//     for(let j = 0; j < 7; j++){
//         day = prompt(`Please enter the temperature of day ${j + 1}: `);
//         totalTemperature += parseInt(day);
//     }
//     averageTemperatures[i] =  (totalTemperature / 7).toFixed(2);
// }
// for (let n = 0; n < 4; n++){
//     console.log(`Week ${n + 1} average was: ${averageTemperatures[n]} degree centigrade.`)
// }

// Solution No 3:
// const prompt = require('prompt-sync')();
// let day = 0;
// const averageTemperatures = new Array(0, 0, 0, 0)
//
// for(const [index] of averageTemperatures.entries()){
//     let totalTemperature = 0;
//     console.log(`Week ${index + 1}`)
//     for(let i = 0; i < 7; i++){
//         day = prompt(`Please enter the temperature of day ${i + 1}: `);
//         totalTemperature += parseInt(day);
//     }
//     averageTemperatures[index] =  (totalTemperature / 7).toFixed(2);
// }
//
// for(const [index, averageTemperature] of averageTemperatures.entries()){
//     console.log(`Week ${index + 1} average was: ${averageTemperature} degree centigrade.`)
// }


//What is functional programming and what is callback function?
// And also why do we use return key word in function


// Solution No 4:
// const prompt = require('prompt-sync')();
// let day = 0;
// let totalTemperatureWeek1 = 0;
// let totalTemperatureWeek2 = 0;
// let totalTemperatureWeek3 = 0;
// let totalTemperatureWeek4 = 0;
// console.log('Week: 1')
// for(let i = 0; i < 7; i++){
//     day = prompt(`Please enter the temperature of day ${i + 1}: `);
//     totalTemperatureWeek1 += parseInt(day);
// }
// let averageTemperatureWeek1 = (totalTemperatureWeek1 / 7).toFixed(2);
//
// console.log('Week: 2')
// for(let i = 0; i < 7; i++){
//     day = prompt(`Please enter the temperature of day ${i + 1}: `);
//     totalTemperatureWeek2 += parseInt(day);
// }
// let averageTemperatureWeek2 = (totalTemperatureWeek2 / 7).toFixed(2);
// console.log('Week: 3')
// for(let i = 0; i < 7; i++){
//     day = prompt(`Please enter the temperature of day ${i + 1}: `);
//     totalTemperatureWeek3 += parseInt(day);
// }
// let averageTemperatureWeek3 = (totalTemperatureWeek3 / 7).toFixed(2);
// console.log('Week: 4')
// for(let i = 0; i < 7; i++){
//     day = prompt(`Please enter the temperature of day ${i + 1}: `);
//     totalTemperatureWeek4 += parseInt(day);
// }
// let averageTemperatureWeek4 = (totalTemperatureWeek4 / 7).toFixed(2);
//
// console.log(`Week 1 average was: ${averageTemperatureWeek1} degree centigrade.`)
// console.log(`Week 2 average was: ${averageTemperatureWeek2} degree centigrade.`)
// console.log(`Week 3 average was: ${averageTemperatureWeek3} degree centigrade.`)
// console.log(`Week 4 average was: ${averageTemperatureWeek4} degree centigrade.`)


// Program 32: Pailwater darts tournament...
/*
 --Variable storing scores for each player.
 --Variable for keeping count each score.
 --for_loop for total players.
 --for_loop for each player turn.
 --if statement for displaying score for winning player.
 */
// Solution no: 1...
// const prompt = require('prompt-sync')();
// let playerOne = 0;
// let playerTwo = 0;
// let score = 0;
//
// for(let i = 0; i < 2; i++){
//         for (let j = 0; j < 3; j++) {
//             score = prompt(`Please enter the score for player ${i + 1}: `)
//             score = parseInt(score)
//             if (i === 0) {
//                 if (score > playerOne) {
//                     playerOne = score
//                 }
//             } else {
//                 if (score > playerTwo) {
//                     playerTwo = score
//                 }
//             }
//         }
// }
// if(playerOne > playerTwo){
//     console.log(`Player one scored the highest individual score is ${playerOne}. Player one wins!!`)
// }else {
//     console.log(`Player two scored the highest individual score is ${playerTwo}. Player two wins!!`)
// }


// Solution no: 2...
// const prompt = require('prompt-sync')();
// let playerOne = 0;
// let playerTwo = 0;
// let score = 0;
//
// for(let i = 0; i < 2; i++){
//     let j = 0;
//     while ( j < 3) {
//         score = prompt(`Please enter the score for player ${i + 1}: `)
//         score = parseInt(score)
//         if (score >= 0 && score <= 180) {
//             if (i === 0) {
//                 if (score > playerOne) {
//                     playerOne = score
//                 }
//             } else {
//                 if (score > playerTwo) {
//                     playerTwo = score
//                 }
//             }
//             j++;
//         } else {
//             console.log('Invalid score!')
//         }
//     }
// }
// if(playerOne > playerTwo){
//     console.log(`Player one scored the highest individual score is ${playerOne}. Player one wins!!`)
// }else {
//     console.log(`Player two scored the highest individual score is ${playerTwo}. Player two wins!!`)
// }


// Eftar Solution...
// let playerOne = 0;
// let playerTwo = 0;
//
// for(let i = 0; i < 2; i++){
//     let validHits = 0;
//     let highScore = 0;
//     while (validHits < 3) {
//         let currentScore = prompt(`Please enter the score for player ${i + 1}: `);
//         currentScore = parseInt(currentScore);
//
//         if (currentScore >= 0 && currentScore <= 180) {
//             validHits++; //correct value has been input, update the valid hit
//             //highScore = currentScore > highScore ? currentScore : highScore;
//             if (currentScore > highScore) {
//                 highScore = currentScore
//             }
//         } else {
//             console.log('Invalid score!')
//         }
//     }
//     // at the end of 3 turns, we then figure out which player it is and assign it to them
//     if (i === 0) {
//         playerOne = highScore
//     } else {
//         playerTwo = highScore
//     }
// }
// if(playerOne > playerTwo){
//     console.log(`Player one scored the highest individual score is ${playerOne}. Player one wins!!`)
// }else {
//     console.log(`Player two scored the highest individual score is ${playerTwo}. Player two wins!!`)
// }

// Solution no: 3...
// for(let i = 0; i < 2; i++){
//     for(let j = 0; j < 3; j++){
//         while (score >= 0 && score <= 180){
//             score = prompt(`Please enter the score for player ${i + 1}: `)
//             score = parseInt(score)
//         }
//             players[i] += score
//     }
// }
// if(players[0] > players[1]) {
//     console.log(`player 1 is win`)
// }else {
//     console.log(`player 2 is win`)
// }
// for(const [index, player] of players.entries()){
//     if(player[0] > player[1]){
//
//     }
//     console.log(`player ${index + 1} score is: ${player}`)
// }





// !=
// !==
// ==
// ===

// >=  greater than or equal
// <=  less than or equal
// >  greater than
// <  less than
// ==  equals
// ===  strictly equals
// !=  not equals
// !==  strictly not equals
// % remainder


// const prompt = require('prompt-sync')();
// let funds = 50;
// const bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0}
// let totalBet = prompt('Please place your bet: ');
// totalBet = parseInt(totalBet)
//
//
// funds = funds - totalBet
// console.log(funds)








// simple 1:

// const prompt = require('prompt-sync')();
// let totalStudents = prompt('Please enter the number of student: ');
// console.log("Enter the time in seconds for each student");
//
// let student1Time = prompt('Student 1: ');
// let totalTime = parseInt(student1Time) ;
// let averageTime = totalTime / 1
// console.log(averageTime.toFixed(2))
// ------
//     EFF Miah11:33
// const prompt = require('prompt-sync')();
// let totalStudents = prompt('Please enter the number of student: ');
// console.log("Enter the time in seconds for each student");
//
// et student1Time = prompt('Student 1: ');
// let student2Time = prompt('Student 2: ');
// let totalTime = parseInt(student1Time)  + parseInt(student1Time) ;
// let averageTime = totalTime / 2
// console.log(averageTime.toFixed(2))
// ----
// const prompt = require('prompt-sync')();
// let totalStudents = prompt('Please enter the number of student: ');
// console.log("Enter the time in seconds for each student");
//
// let student1Time = prompt('Student 1: ');
// let student2Time = prompt('Student 2: ');
// let student3Time = prompt('Student 2: ');
// let totalTime = parseInt(student1Time)  + parseInt(student2Time) + parseInt(student3Time) ;
// let averageTime = totalTime / 3
// console.log(averageTime.toFixed(2))
//
// const prompt = require('prompt-sync')();
// let totalStudents = prompt('Please enter the number of student: ');
// console.log("Enter the time in seconds for each student");
//
// let student1Time = prompt('Student 1: ');
// let student2Time = prompt('Student 2: ');
// let student3Time = prompt('Student 2: ');
// let totalTime = parseInt(student1Time)  + parseInt(student2Time) + parseInt(student3Time) ;
// let averageTime = totalTime / 3
// console.log(averageTime.toFixed(2))

// optimise code using total student
// const prompt = require('prompt-sync')();
// let totalStudents = prompt('Please enter the number of student: ');
// console.log("Enter the time in seconds for each student");
//
// // change 1: prompt for new student tis
// let student1Time = prompt('Student 1: ');
// let student2Time = prompt('Student 2: ');
// let student3Time = prompt('Student 2: ');
// // change 2:  add new student time to the total
// let totalTime = parseInt(student1Time)  + parseInt(student2Time) + parseInt(student3Time) ;
// //change 3: change the divisor (in this case its 3)
// let averageTime = totalTime / totalStudents;
// console.log(averageTime.toFixed(2))




