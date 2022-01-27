// Exercise No: 21 and 22
// const prompt = require('prompt-sync')();
// let ticket = prompt('Do you wish to buy a ticket: ')
// if (ticket === 'Y'){
//     console.log('Welcome to the ticket office!')
// }else {
//     console.log('We are sorry to hear that!')
//     console.log('Please return soon!')
// }

// Exercise No: 23
// const prompt = require('prompt-sync')();
// let moonYear = prompt('Please enter a year: ')
// moonYear = parseInt(moonYear)
// if(moonYear >= 1992){
//     console.log('Man has walked on the moon!')
// }else {
//     console.log('No moon landing yet!')
// }

// // Exercise No: 24
// const prompt = require('prompt-sync')();
// let ticket = prompt('Do you wish to buy a ticket: ')
// if (ticket === 'Y'){
//     console.log('Welcome to the ticket office!')
//     let age = prompt('Please entre your age: ')
//     age = parseInt(age)
//     if(age > 17 && age < 66){
//         console.log('Please purchase an adult ticket: ')
//     } else if( age <= 17) {
//         console.log('Please purchase a junior ticket: ')
//     }
// }else {
//     console.log('We are sorry to hear that!')
//     console.log('Please return soon!')
// }

// // Exercise No: 25
// const prompt = require('prompt-sync')();
// let ticket = prompt('Do you wish to buy a ticket: ')
// if (ticket === 'Y'){
//     console.log('Welcome to the ticket office!')
//     let age = prompt('Please entre your age: ')
//     age = parseInt(age)
//     if(age > 17 && age < 65){
//         console.log('Please purchase an adult ticket: ')
//     } else if( age > 0 && age <= 17) {
//         console.log('Please purchase a junior ticket: ')
//     } else if(age <= 0 && age >= 65){
//         console.log('Invalid age!')
//     }
// }else {
//     console.log('We are sorry to hear that. Please return soon!')
// }

// Exercise No: 26
// const prompt = require('prompt-sync')();
// let score = prompt('Please enter your score: ')
// score = parseInt(score)
// if (score !== 76 && score !== 58){
//     console.log('Well done, target is achieved!')
// }

// Exercise No: 27
// const prompt = require('prompt-sync')();
// let score1 = prompt('Please enter your score: ')
// score1 = parseInt(score1)
// let score2 = prompt('Please enter your score: ')
// score2 = parseInt(score2)
// let score3 = prompt('Please enter your score: ')
// score3 = parseInt(score3)
// if(score1 === 24 && score2 === 47 && score3 === 5){
//     console.log('Well done. That is the correct combination of score!')
// }else {
//     console.log('You did not achieve the correct combination of score!')
// }

// Exercise No: 27
// const prompt = require('prompt-sync')();
// let number = prompt('Please enter yor number: ')
// number = parseInt(number)
// if(number <= 3){
//     console.log('Low')
// } else if (number >= 12 && number <= 20){
//     console.log('Middle')
// } else if(number > 20){
//     console.log('High')
// }

// // Program: 20
// const prompt = require('prompt-sync')();
// let advice = prompt('Would you like advice: ')
// if(advice === 'Y'){
//     console.log('Always know where your towel is.')
// }

// Program: 21
// const prompt = require('prompt-sync')();
// let blackScore = prompt("What is Black's score: ");
// blackScore = parseInt(blackScore)
// let whiteScore = prompt("What is White's score: ");
// whiteScore = parseInt(whiteScore) + 6.5
// if(blackScore > whiteScore){
//     console.log('Black is the winner!')
// } else {
//     console.log('White is the winner!')
// }

// Program: 22
// const prompt = require('prompt-sync')();
// let eachAmount = 0;
// let totalAmount = 0;
// for(let i = 0; i < 3; i++){
//     eachAmount = prompt(`Please enter the amount raised by friend ${i + 1}: `)
//     totalAmount += parseInt(eachAmount);
//     if(totalAmount >= 1000){
//         totalAmount += totalAmount
//         console.log(`This will be doubled to £${totalAmount}`)
//     }
// }

// Program: 23
// const prompt = require('prompt-sync')();
// let rectangle1 = 0;
// let rectangle2 = 0;
// for(let i = 0; i < 2; i++){
//     console.log(`Rectangle ${i + 1}`)
//     let length = prompt('Please enter the length: ')
//     length = parseInt(length)
//     let width = prompt('Please enter the width: ')
//     width = parseInt(width)
//     let totalArea = length + width
//     if(i === 0){
//         rectangle1 = totalArea
//     }else{
//         rectangle2 = totalArea
//     }
// }
//
// if(rectangle1 > rectangle2){
//     console.log('Rectangle 1 has the largest area.')
// }else {
//     console.log('Rectangle 2 has the largest area.')
// }

// Program: 24
// const prompt = require('prompt-sync')();
// let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//
// let sentence1 = prompt('Enter sentence 1: ')
// sentence1 = sentence1.split(' ').join('');

// let sentence2 = prompt('Enter sentence 2: ')
// sentence2 = sentence2.split(' ').join('');


// let numberOfVowelsInSentence1 = 0;
// let numberOfVowelsInSentence2 = 0;

// for (let i = 0; i < sentence1.length; i++){
//     if(vowels.includes(sentence1[i])){
//         console.log(numberOfVowelsInSentence1++)
//     }
// }
//
// for (let j = 0; j < sentence2.length; j++){
//     if(vowels.includes(sentence2[j])){
//         numberOfVowelsInSentence2++
//     }
// }
//
// let percentageOfVowelsInSentence1 = 100 / sentence1.length * numberOfVowelsInSentence1;
// percentageOfVowelsInSentence1 = percentageOfVowelsInSentence1.toFixed(2)
// let percentageOfVowelsInSentence2 = 100 / sentence2.length * numberOfVowelsInSentence2;
// percentageOfVowelsInSentence2 = percentageOfVowelsInSentence2.toFixed(2)
//
//
// console.log(`The percentage of vowels in sentence 1 is: ${percentageOfVowelsInSentence1}`)
// console.log(`The percentage of vowels in sentence 2 is: ${percentageOfVowelsInSentence2}`)
//
// console.log(`Sentence 1 has ${numberOfVowelsInSentence1} vowels.`)
// console.log(`Sentence 2 has ${numberOfVowelsInSentence2} vowels.`)
//
// if(percentageOfVowelsInSentence1 > percentageOfVowelsInSentence2){
//     console.log('Sentence 1 has more vowels.')
// }else {
//     console.log('Sentence 2 has more vowels.')
// }

// you can not handle the truth
// Houston, we have a problem


// Program: 25
// const prompt = require('prompt-sync')();
// let advice = prompt('Would you like some advice: ')
// if(advice === 'Y'){
//     console.log('Always know where your towel is.')
// }else if(advice === 'N'){
//     console.log('no problem!')
// }else {
//     console.log('Sorry, you were asked to enter Y or N.')
// }

// Program: 26
// const prompt = require('prompt-sync')();
// let mph = prompt('Please enter the test speed (mph): ');
// mph = parseInt(mph)
// let stoppingDistanceM = prompt('Please enter the tested stopping distance (m): ')
// stoppingDistanceM = parseInt(stoppingDistanceM)
// stoppingDistanceM = Math.round(stoppingDistanceM)
//
// if(mph === 30 && stoppingDistanceM <= 14){
//     console.log('Your car passed the braking distance test!')
// }else  if (mph === 50 && stoppingDistanceM <= 34){
//     console.log('Your car passed the braking distance test!')
// }else {
//     console.log('Your car failed the braking distance test!')
// }

// Program: 27(part 2)
// const prompt = require('prompt-sync')();
// let eachAmount = 0;
// let totalAmount = 0;
// let totalWithBonus = 0
// for(let i = 0; i < 3; i++){
//     eachAmount = prompt(`Please enter the amount raised by friend ${i + 1}: `)
//     totalAmount += parseInt(eachAmount);
// }
// console.log(`A total of ${totalAmount} was raised.`)
// if(totalAmount > 0 && totalAmount < 1000){
//     totalWithBonus = totalAmount + 100
//     console.log(`With the company bonus, now the total amount is £${totalWithBonus}.`)
// } else if(totalAmount >= 1000 && totalAmount <= 2000){
//     totalWithBonus = totalAmount * 2;
//     console.log(`With the company bonus, now the total amount is £${totalWithBonus}.`)
// } else  if (totalAmount > 2000){
//     let additionalMoney = totalAmount - 2000;
//     let bonusMoney = totalAmount - additionalMoney
//     totalWithBonus = (2 * bonusMoney) + additionalMoney
//     console.log(`With the company bonus, now the total amount is £${totalWithBonus}.`)
// }




// Program 28 - Lines cheat
// const prompt = require('prompt-sync')();
// let linesCheat = prompt('Which sentence would you like copied: ')
// for(let i = 0; i < 20; i++){
//     console.log(`${i + 1}. ${linesCheat}`)
// }

// Program: 29 - charity collection(part 3)
// const prompt = require('prompt-sync')();
// let eachAmount = 0;
// let totalAmount = 0;
// let totalWithBonus = 0
// for(let i = 0; i < 3; i++){
//     eachAmount = prompt(`Please enter the amount raised by friend ${i + 1}: `)
//     totalAmount += parseInt(eachAmount);
// }
// console.log(`A total of ${totalAmount} was raised.`)
// if(totalAmount > 0 && totalAmount < 1000){
//     totalWithBonus = totalAmount + 100
// } else if(totalAmount >= 1000 && totalAmount <= 2000){
//     totalWithBonus = totalAmount * 2;
// } else  if (totalAmount > 2000){
//     let additionalMoney = totalAmount - 2000;
//     let bonusMoney = totalAmount - additionalMoney
//     totalWithBonus = (2 * bonusMoney) + additionalMoney
// }
// for (let i = 0; i < 3; i++){
//     console.log(`With the company bonus, now the total amount is £${totalWithBonus}!!!`)
// }

// Program: 30 - name switch
// const prompt = require('prompt-sync')();
// let firstName = prompt('Please enter first name: ')
// firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
// let surName = prompt('Please enter surname: ')
// surName = surName.charAt(0).toUpperCase() + surName.slice(1)
// let upperLetter1 = firstName.charAt(0).toUpperCase();
// let upperLetter2 = surName.charAt(0).toUpperCase();
// let lowerLetter1 = firstName.charAt(0).toLowerCase()
// let lowerLetter2 = surName.charAt(0).toLowerCase()
// let firstNameUpper = firstName.toUpperCase();
// let surNameUpper = surName.toUpperCase();
// let firstNameLower = firstName.toLowerCase();
// let surNameLower = surName.toLowerCase();
// for(let i = 0; i < 3; i++){
//     console.log(`${upperLetter1} ${upperLetter2} ${firstNameUpper} ${surNameLower} ${firstName}${surName}`)
//     console.log(`${firstName}${surName} ${surNameUpper} ${firstNameLower} ${lowerLetter2} ${lowerLetter1}`)
// }

// Program: 31 - Cricket over
// const prompt = require('prompt-sync')();
// let totalScore = 0;
// for (let i = 0; i < 6; i++){
//     let eachBallScore = prompt(`Please enter the score of the ball ${i + 1}: `)
//     totalScore += parseInt(eachBallScore)
// }
// console.log(`This over's score was: ${totalScore}`)

// Program: 32 - Average temperature
// const prompt = require('prompt-sync')();
// let totalTemperature = 0;
// let averageTemperature = 0;
// for (let i = 0; i < 7; i++){
//     let eachDayTemperature = prompt(`Please entre the temperature of the day ${i + 1}: `)
//     totalTemperature += parseInt(eachDayTemperature)
// }
// averageTemperature = (totalTemperature / 7).toFixed(2);
// console.log(`This week's average was: ${averageTemperature} degrees centigrade!`)

// Program: 33 - Lines cheat (part 2)
// const prompt = require('prompt-sync')();
// let sentence = prompt('Which sentence would you like copied: ')
// let howManyTimeToCopy = prompt('How many times would you like to copied: ')
// howManyTimeToCopy = parseInt(howManyTimeToCopy);
//
// for (let i = 0; i < howManyTimeToCopy; i++){
//     console.log(sentence)
// }

// Program: 34 - Charity collection (part 4)
// const prompt = require('prompt-sync')();
// let eachAmount = 0;
// let totalAmount = 0;
// let totalWithBonus = 0;
// let charityRaisers = prompt('How many charity raisers were there: ')
// charityRaisers = parseInt(charityRaisers)
// for(let i = 0; i < charityRaisers; i++){
//     eachAmount = prompt(`Please enter the amount raised by person ${i + 1}: `)
//     totalAmount += parseInt(eachAmount);
// }
// console.log(`A total of ${totalAmount} was raised.`)
// if(totalAmount > 0 && totalAmount < 1000){
//     totalWithBonus = totalAmount + 100
// } else if(totalAmount >= 1000 && totalAmount <= 2000){
//     totalWithBonus = totalAmount * 2;
// } else  if (totalAmount > 2000){
//     let additionalMoney = totalAmount - 2000;
//     let bonusMoney = totalAmount - additionalMoney
//     totalWithBonus = (2 * bonusMoney) + additionalMoney
// }
// for (let i = 0; i < 3; i++){
//     console.log(`With the company bonus, now the total amount is £${totalWithBonus}!!!`)
// }

// Program: 35 - Press up challenge
// const prompt = require('prompt-sync')();
// let numberOfStudent = prompt('Please enter the number of students: ')
// numberOfStudent = parseInt(numberOfStudent)
// let totalTime = 0;
// for (let i = 0; i < numberOfStudent; i++){
//     let timeForEachStudent = prompt(`Enter the time in seconds for student number ${i + 1}: `)
//     totalTime += parseInt(timeForEachStudent)
// }
// let averageTime = (totalTime / numberOfStudent).toFixed(2)
// console.log(`The average time for the ${numberOfStudent} students was ${averageTime} seconds.`)

// Program: 36 - Number patterns
// const prompt = require('prompt-sync')();
// let number = prompt('please enter the number: ')
// number = parseInt(number)
// console.log('Odd number list:')
// for (let i = 1; i <= number; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// Program: 37 - Number patterns(part 2)
// const prompt = require('prompt-sync')();
// let firstNumber = prompt('Please enter the first number: ')
// firstNumber = parseInt(firstNumber)
// let lastNumber = prompt('please enter the last number: ')
// lastNumber = parseInt(lastNumber)
// for (let i = firstNumber; i <= lastNumber; i++){
//     if (i % 2 !== 0){
//         console.log(i)
//     }
// }

// Program: 38 - Password
// const prompt = require('prompt-sync')();
// let password = '';
// while (password !== 'ornery'){
//     password = prompt('Please enter the password: ')
//     if (password !== 'ornery'){
//         console.log('Sorry, incorrect password! Try again.')
//     }
// }
// console.log('Entry gained!')

// Program: 39 - Number patterns(part 3)
const prompt = require('prompt-sync')();
let firstNumber = prompt('Please enter the first number: ')
firstNumber = parseInt(firstNumber)
let lastNumber = 0;
while (lastNumber <= 20){
    lastNumber = prompt('please enter the last number: ')
    lastNumber = parseInt(lastNumber)
    if (lastNumber <= 20){
        console.log(`Sorry, the number must be at last ${firstNumber} + 20`)
    }
}
for (let i = firstNumber; i <= lastNumber; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}

// Program: 40 - Advise please (part 3)
// const prompt = require('prompt-sync')();
// let advice = '';
// while (advice !== 'Y'){
//     advice = prompt('Would you like some advice: ')
//     advice = advice.toUpperCase();
//     if (advice !== 'Y' && advice !== 'N'){
//         console.log('please enter Y or N only')
//     } else if (advice === 'N'){
//         console.log(`Don't be silly, You definitely need advice!`)
//     } else {
//         console.log(`Do not get married, you will just kill yourself!`)
//     }
// }

// Program: 41 - No more presents
// const prompt = require('prompt-sync')();
// let totalMoney = 200;
// let presentPrice = 0
// let i = 1;
// while (totalMoney >= 0){
//     presentPrice = prompt(`Please enter the price of present ${i++}: `);
//     presentPrice = parseInt(presentPrice);
//     totalMoney -= presentPrice
// }
// console.log(`Limit Exceeded, You can't include the present of £${presentPrice}!`)

// Program: 42 - Menu system
// const prompt = require('prompt-sync')();
// let menu = ['q', 'a', 'k', 'l','Q', 'A', 'K', 'L']
// let choiceMenu = '';
// while (!(menu.includes(choiceMenu))){
//     choiceMenu = prompt('Enter your menu choice (Q, A, K or L): ')
//     if (!(menu.includes(choiceMenu))){
//         console.log(`${choiceMenu} is not valid!`)
//     }
// }
// console.log(`${choiceMenu} selected!`)

// Program: 43 - Guess the number
// const prompt = require('prompt-sync')();
// let number = Math.floor(Math.random() * 100 + 1)
// console.log(number)
// let guessNumber = 0;
// console.log('Guess the hidden number between 1 and 100!')
// while (guessNumber !== number){
//     guessNumber = prompt('Enter your guess: ')
//     guessNumber = parseInt(guessNumber)
//     if(guessNumber > 100){
//         console.log('Your guess is not valid!')
//     } else if (guessNumber > number){
//         console.log('Your guess is too high!')
//     } else if (guessNumber < number){
//         console.log('Your guess is too low!')
//     }
// }
// console.log('Correct, Well Done!')

// Program: 44 - Average temperature(part 2)
// const prompt = require('prompt-sync')();
// let averageTemperatureWeek1 = 0;
// let averageTemperatureWeek2 = 0;
// let averageTemperatureWeek3 = 0;
// let averageTemperatureWeek4 = 0;
// for(let i = 0; i < 4; i++){
//     let totalTemperature = 0;
//     console.log(`week ${i + 1}`)
//     for (let i = 0; i < 7; i++) {
//         let eachDayTemperature = prompt(`Please entre the temperature of the day ${i + 1}: `)
//         totalTemperature += parseInt(eachDayTemperature)
//     }
//     let averageTemperature = (totalTemperature / 7).toFixed(2);
//     if (i === 0){
//         averageTemperatureWeek1 = averageTemperature;
//     }else if (i === 1){
//         averageTemperatureWeek2 = averageTemperature;
//     }else if (i === 2){
//         averageTemperatureWeek3 = averageTemperature;
//     } else {
//         averageTemperatureWeek4 = averageTemperature;
//     }
// }
//
// console.log(`Week 1 average was: ${averageTemperatureWeek1} degrees centigrade!`)
// console.log(`Week 2 average was: ${averageTemperatureWeek2} degrees centigrade!`)
// console.log(`Week 3 average was: ${averageTemperatureWeek3} degrees centigrade!`)
// console.log(`Week 4 average was: ${averageTemperatureWeek4} degrees centigrade!`)





// [1, 2, 3].includes(2)         // true
// [1, 2, 3].includes(4)         // false
// [1, 2, 3].includes(3, 3)      // false
// [1, 2, 3].includes(3, -1)     // true
// [1, 2, NaN].includes(NaN)     // true
// ["1", "2", "3"].includes(3)


// Program 45 - Pailwater darts tournament
// const prompt = require('prompt-sync')();
// let playerOne = 0;
// let playerTwo = 0;
// for (let i = 0; i < 2; i++){
//     let turn = 0;
//     while (turn < 3){
//         let validHit = prompt(`Please enter the scores for player ${i + 1}: `);
//         validHit = parseInt(validHit);
//         if (validHit > 0 && validHit <= 180){
//             if (i === 0){
//                 playerOne += validHit;
//             }else {
//                 playerTwo += validHit;
//             }
//             turn++
//         }else {
//             console.log('Invalid Score!')
//         }
//     }
// }
//
// if (playerOne > playerTwo){
//     console.log(`Player one scored the highest individual score. Player one wines!`)
// } else {
//     console.log(`Player two scored the highest individual score. Player two wines!`)
// }


// let msgArray = [
//     [],
//     [],
//     []
// ]
// msgArray[0] = 'Hello'
// msgArray[99] = 'world'
// console.log(msgArray)
//
// if (msgArray.length === 100) {
//     console.log('The length is 100.')
// }

// let name =['pol', 'david', 'jon', 'brian', 'kuba', 'jean', 'kye', 'pat', 'anna', 'dennis']
// let age = [13, 14,]

// const caleAge = function (birthday) {
//     return 2021 - birthday
// }
//
// const years = [1986, 1988, 1985, 1993, 2000]
// const age1 = caleAge(years[0])
// const age2 = caleAge(years[1])
// const age3 = caleAge(years[2])
// const age4 = caleAge(years[3])
// const age5 = caleAge(years[years.length - 1])
//
// const ages = [age1, age2, age3, age4, age5]
// console.log(ages.sort())





