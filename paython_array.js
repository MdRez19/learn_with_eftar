// Chapter 18
// const numbers = [2, 2, 2, 2, 2]
// numbers[3] = 4;
// numbers[0] = 1;
// console.log(numbers)

// Chapter 19
// 88...
// const numbers = [0, 0, 0, 0, 0]
// numbers[2] = 33;
// numbers[4] = 22;
// numbers[3] = 11;
// console.log(numbers)

// 89...
// const numbers = [9, 9, 9, 9, 9]
// numbers[0] = 5;
// numbers[2] = 9;
// numbers[4] = 0;
// console.log(numbers)

// 90...
// const numbers = [0, 1, 2, 3, 4]
// numbers[1] = 4;
// numbers[4] = 1;
// numbers[3] = 2;
// console.log(numbers)

// 91...
// const numbers = [5, 5, 5, 5, 5]
// numbers[2] = 2 * 4;
// numbers[4] = 20 / 2;
// numbers[3] = 6 + 6;
// numbers[2] = 5;
// console.log(numbers)

// 92...
// const numbers = [12, 2, 24, 4, 36] // 12, 18, 6, 4, 3
// // 0 = 12
// numbers[2] = 3; // 2 = 3
// numbers[4] = numbers[2]; // 4 = 3
// numbers[2] = 6; // 6
// numbers[1] = 20 + numbers[3] - numbers[2]; // 1 = 18
// console.log(numbers)

// 93...
// const numbers = [5, 5, 5, 5, 5]
// numbers[3] = Math.ceil(numbers[1] * 3 / 2) - 3; // 5 * 1.5 - 3= 8-3= 5
// numbers[0] = Math.pow(numbers[3], 2) - 16; // 25 - 16 = 9
// numbers[4] = Math.round(numbers[0] / 4); // 2
// console.log(numbers)

// 94...
// const numbers = [10, 10, 10, 10, 10] // 10, 10, 25, 5, 10
// numbers[2] = numbers[1] + 15;
// numbers[3] = numbers[0] - 5;
// if (numbers[2] + numbers[4] >= 35){ // 2 = 25, 4 = 10 == 35
//     numbers[0] = numbers[0] + 10; // 0 = 10 + 10 == 20
// }else {
//     numbers[0] = numbers[0] - 10;
// }
//
// if (numbers[0] % 2 === 1){
//     numbers[4] = numbers[3] + 2;
// }else {
//     numbers[4] = numbers[0] + 10; // 4 = 20 + 10 = 30
// }
//
// console.log(numbers) // 20, 10, 25, 5, 30

// 95...
// const numbers = [0, 0, 0, 0, 0]
// for (let i = 0; i < 5; i++){
//     console.log(numbers[i] = 3)
// }

// 96...
// const numbers = [0, 0, 0, 0, 0]
// let counter = 0;
// for (let i = 0; i < 5; i++){
//     numbers[i] = counter
//     counter++;
//     console.log(counter)
// }

// 97...
// const numbers = [0, 0, 0, 0, 0]
// for (let i = 0; i < 5; i++){
//     numbers[i] = i;
//     console.log(i)
// }

// 98...
// const numbers = [2, 2, 2, 2, 2]  // 0, 1, 2, 3, 4
// for (let i = 0; i <= 4; i++){    // 2, 3, 5, 8, 12
//     numbers[i + 1] = numbers[i] + i + 1;
//     console.log(numbers[i])
// }

// 0 = 2
// 1 = 3
// 2 = 5
// 3 = 8
// 4 = 12

// 99...
// const wordLength = [0, 0, 0, 0, 0]
// const words = ['silly', 'humorous', 'funny', 'side-splitting', 'amusing']
// for (let i = 0; i < 5; i++){
//     wordLength[i] = words[i].length;
//     console.log(wordLength[i])
// }

// 100...
// const nameList1 = ['Bob', 'Derek', 'Fred', 'Usman', 'Abubakar'];
// const nameList2 = ['Mary', 'Nida', 'Jill', 'Tracy', 'Helen'];
// for (let i = 0; i < 5; i++){
//     nameList1[i] = nameList2[i]
//     console.log(nameList1[i])
// }

// 101...
// const townList1 = ['Dover', 'Maidstone', 'Ayr', 'Shepway', 'Pembroke']
// const townList2 = ['', '', '', '', '']
// for (let i = 0; i < 5; i++){
//     townList2[i] = townList1[i].toLowerCase()
//     console.log(townList1[i])
// }

// // 102...
// const places = ['Glasgow', 'Swansea', 'Lisburn', 'Thurso', 'Bolton'];
// const letterCount = ['', '', '', '', ''];
// for (let i = 0; i < 5; i++){
//     letterCount[i] = places[i].length;
//     console.log(letterCount[i]);
// }

// 103...
// const elements = ['Copper', 'Titanium', 'Iron', 'Lead', 'Silicon'];
// const reverseElements = []
// for (let i = 0; i < 5; i++) {
//     if (elements[i].length > 1) {
//         reverseElements[i] = elements[4 - i]
//         console.log(reverseElements[i])
//     }
// }

// 104...
// const numbers = [45, 9, 35, 92, 67];
// let temporary = 0;
// for (let i = 0; i < 4; i++){
//     if (numbers[i] > numbers[i + 1]){
//         temporary = numbers[i];
//         numbers[i] = numbers[i + 1];
//         numbers[i + 1] = temporary;
//         console.log(numbers[i])
//         // console.log(temporary)
//     }
// }

// 105...
// const nameList1 = ['Bob', 'Derek', 'Fred', 'Usman', 'Abubakar']
// const nameList2 = ['Mark', 'Nide', 'Jill', 'Tracy', 'Helen']
// let temporary = '';
// for (let i = 0; i < 5; i++){
//     if (nameList1[i].substring(0, 1) < nameList2[i].substring(0, 1)){
//         temporary = nameList1[i]; // temporary = Bob;
//         nameList1[i] = nameList2[i]; // nameList1[0] = Mark
//         nameList2[i] = temporary; // nameList2[0] = Bob
//         console.log(nameList2[i])
//         console.log(temporary)
//     }
// }

// 106...
// const values = [45.78, 12.34, 102.14, 5.26, 1034.99]
// // 450, 120, 1020, 50, 10340
// let temp1 = 0;
// for (let i = 0; i < 5; i++){
//     temp1 = Math.floor(values[i])
//     temp1 = temp1 * 10;
//     console.log(temp1)
// }

//107...
// const firstValue = [7.7, 3.2, 5.2, 6.4, 8.9]
// const secondValue = [9, 6, 4, 12, 10]
//
// for (let i = 0; i < 5; i++){
//     if (Math.round(firstValue[i]) > firstValue[i]){
//         secondValue[i] = secondValue[i] * Math.ceil(firstValue[i])
//     } else {
//         secondValue[i] = secondValue[i] * Math.ceil(firstValue[i]) / 2
//     }
//
//     if (secondValue[i] > 50){
//         firstValue[i] = 99
//     } else {
//         firstValue[i] = 0
//     }
//     console.log(`${firstValue[i]} : ${secondValue[i]}`)
// }

// 114 and 115...
// let grid = [[5, 8, 6], [3, 4, 5], [6, 1, 0]]
// for (let i = 0; i < 3; i++){
//     console.log(grid[0][0] + grid[0][1] + grid[0][2])
// }

// 116...
// let grid = [[5, 8, 6], [3, 4, 5], [6, 1, 0]]
// if (grid[0][1] / grid[1][1] === 2){
//     console.log(grid[2][1])
// }else {
//     console.log(grid[2][2])
// }

// 117...
// let grid = [[5, 8, 6], [3, 4, 5], [6, 1, 0]]
// for (let i = 0; i < grid[0].length; i++){
//     console.log(grid[i][1])
// }

// 118...
// let grid = [[5, 8, 6], [3, 4, 5], [6, 1, 0]]
// let total = 0;
// grid[2][2] = 2;
// grid[0][1] = 3;
// grid[0][1] = grid[1][2]
// for (let i = 0; i < 3; i++){
//     console.log(grid[i])
//     total = total + grid[i]
// }
// console.log(total)


// Chapter 19 - Programming challenges for Section 4...
// Program 46 - For sale
// const forSale = ['Mountain Bike', 'Ski Jacket', 'Electric Guitar', 'PS3 - 500GB', 'Badminton Racquet']
// for (let i = 0; i < forSale.length; i++){
//     console.log(forSale[i])
// }

// Program 47 - For sale(part 2)
// const forSale = ['Mountain Bike', 'Ski Jacket', 'Electric Guitar', 'PS3 - 500GB', 'Badminton Racquet']
// const eachItemPrice = [200, 67, 330, 120, 15]
// for (let i = 0; i < forSale.length; i++){
//     console.log(`${forSale[i]} - £${eachItemPrice[i]}`)
// }

// const calculateTip = bill => {
//     if (bill >= 50 && bill <= 300){
//         return bill * 0.15;
//     }
//     return bill * 0.2;
// }
//
// const bills = [125, 555, 44]
// const tips = [];
// const totals = [];
// let total = 0;
// for (let i = 0; i < bills.length; i++){
//     tips.push(calculateTip(bills[i]))
//     totals.push(bills[i] + tips[i])
//     total += totals[i]
// }
// console.log(bills)
// console.log(tips)
// console.log(totals)
// console.log(total)

// Program 48 - Cricket(part 2)...
// const prompt = require('prompt-sync')();
// const scores = [];
// let eachBallScore = 0;
// let totalScore = 0;
// for (let i = 0; i < 6; i++){
//     eachBallScore = parseInt(prompt(`Please enter the score of the ball ${i + 1}: `))
//     scores.push(eachBallScore)
//     totalScore += eachBallScore
// }
// console.log(scores)
// console.log(`This over's score was: ${totalScore}`)

// Program 49 - Dance group...
// Jean Gray, Max Eisenhardt, James Howlett, Aleksy Nowak
// const prompt = require('prompt-sync')();
// const names = [];
// const ages = [];
// for (let i = 0; i < 4; i++){
//     names.push(prompt('Please enter a name: '))
//     ages.push(parseInt(prompt(`Please enter ${names[i]}'s age: `)))
// }
// console.log('Names and Competiton List:')
// for (let i = 0; i < names.length; i++){
//     if (ages[i] < 12){
//         console.log(`${names[i]} - Junior`)
//     } else if (ages[i] >= 12 && ages[i] <= 17){
//         console.log(`${names[i]} - Teen`)
//     } else if (ages[i] >= 18){
//         console.log(`${names[i]} - Senior`)
//     }
// }

// Program 50 - Horse hands...
// const prompt = require('prompt-sync')();
// const names = [];
// const ages = [];
// const heights = [];


// 03453033040
// Program 51 - House size...
// const prompt = require('prompt-sync')();
// console.log('House floor area calculator...')
// const totalRoom = parseInt(prompt('Please enter the number of room: '))
// const roomNames = [];
// const eachRoomTotalSizes = [];
// let totalHouseArea = 0;
// for (let i = 0; i < totalRoom; i++){
//     roomNames.push(prompt(`Please enter the name of room ${i + 1}: `))
//     let eachRoomLengths = prompt(`Please enter the length(m) of ${roomNames[i]}: `)
//     let eachRoomWidths = prompt(`Please enter the width(m) of ${roomNames[i]}: `)
//     let totalAreaOfEachRoom = eachRoomLengths * eachRoomWidths
//     totalAreaOfEachRoom = Number(totalAreaOfEachRoom.toFixed(1))
//     eachRoomTotalSizes.push(totalAreaOfEachRoom)
//     totalHouseArea += totalAreaOfEachRoom
// }
//
// console.log('House details:')
// for (let i = 0; i < totalRoom; i++){
//     console.log(`Room - ${roomNames[i]}, and it's ${eachRoomTotalSizes[i]} metres squared!`)
// }
// console.log(`The total area is calculated as: ${totalHouseArea} metres squared!`)
// 08085015200

// Program 51 - House size...2
// const prompt = require('prompt-sync')();
// console.log('House floor area calculator...')
// const totalRoom = parseInt(prompt('Please enter the number of room: '))
// const roomDetails = [];
// let totalHouseArea = 0;
// for (let i = 0; i < totalRoom; i++){
//     roomDetails[i] = [];
//     roomDetails[i][0] = prompt(`Please enter the name of room ${i + 1}: `)
//     let eachRoomLengths = prompt(`Please enter the length(m) of ${roomDetails[i][0]}: `)
//     let eachRoomWidths = prompt(`Please enter the width(m) of ${roomDetails[i][0]}: `)
//     let totalAreaOfEachRoom = eachRoomLengths * eachRoomWidths
//     totalAreaOfEachRoom = Number(totalAreaOfEachRoom.toFixed(1))
//     roomDetails[i][1] = totalAreaOfEachRoom
//     totalHouseArea += roomDetails[i][1]
// }
//
// console.log('House details:')
// for (let i = 0; i < totalRoom; i++){
//     console.log(`Room - ${roomDetails[i][0]}, and it's ${roomDetails[i][1]} metres squared!`)
// }
// console.log(`The total area is calculated as: ${totalHouseArea} metres squared!`)


// // Program 52 - Who's going to the party?...
// const prompt = require('prompt-sync')();
// const katesFriends = ['Melissa', 'Evelyn', 'Emmy', 'Karen', 'Norma', 'Dorek', 'Agnes', 'Billy', 'Gawel', 'Arthur'];
// const goingToTheParty = []
//
// for (let i = 0; i < katesFriends.length; i++){
//     goingToTheParty[i] = [];
//     let attendTheParty = '';
//         attendTheParty = prompt(`${katesFriends[i]}? `)
//         if(attendTheParty === 'yes'){
//             goingToTheParty[i][0] = katesFriends[i]
//             goingToTheParty[i][1] = true
//         } else if (attendTheParty === 'no'){
//             goingToTheParty[i][0] = katesFriends[i]
//             goingToTheParty[i][1] = false
//         }
// }
// console.log('Party Attendance List:')
// for (let i = 0; i < goingToTheParty.length; i++){
//     if (goingToTheParty[i][1] === true) {
//         console.log(goingToTheParty[i][0])
//     }
// }
//
// console.log(goingToTheParty)

// Denzell
// Hubub
// Jessica
// Talisha
// Andrew
// Program 53 - Bowling club trip...
// const prompt = require('prompt-sync')();
// const busSeats = [
//     ['Empty', 'Empty', 'Empty', 'Empty'],
//     ['Empty', 'Empty', 'Empty', 'Empty'],
//     ['Empty', 'Empty', 'Empty', 'Empty'],
//     ['Empty', 'Empty', 'Empty', 'Empty'],
//     ['Empty', 'Empty', 'Empty', 'Empty']
// ]
// let totalMemberRequested = 0;
// while (totalMemberRequested <= 0 || totalMemberRequested > 20){
//     totalMemberRequested = Number(prompt('How many members have requested a seat: '))
//     if ((totalMemberRequested <= 0 || totalMemberRequested > 20)){
//         console.log('This bus available seat limit is 20, Please request member only between number 1 to 20. Please try again!')
//     }
// }
//
// for (let i = 0; i < totalMemberRequested; i++){
//     let nameOfTheMember = prompt('Please enter your name: ');
//     let chooseTheRow = 0;
//     while (chooseTheRow <= 0 || chooseTheRow > 5){
//         chooseTheRow = Number(prompt('Which row would you like to sit in: '))
//         if ((chooseTheRow <= 0 || chooseTheRow > 5)){
//             console.log('This Bus has 5 row of seat, Please choose a row only between 1 to 5')
//         }
//     }
//     let chooseTheSeat = 0
//     while (chooseTheSeat <= 0 || chooseTheSeat > 4){
//         chooseTheSeat = Number(prompt('Which seat number would you like to sit in: '))
//         if ((chooseTheSeat <= 0 || chooseTheSeat > 4)){
//             console.log('This Bus has 4 seats in each row, Please choose a seat only between 1 to 4 from the selected row!')
//         }
//     }
//     busSeats[chooseTheRow - 1][chooseTheSeat - 1] = nameOfTheMember
//     console.log(`Thank you ${nameOfTheMember}, your name has been added.`)
// }
//
// console.log(`Bus seats have been booked as follows:`)
// for (let i = 0; i < busSeats.length; i++){
//     console.log(`${i}. ${busSeats[i]}`)
// }

// Program 54 - Counting weeds...
// const prompt = require('prompt-sync')();
// let weedsQuadrat = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0]
// ]
// let totalNumberOfWeeds = 0
//
// for (let i = 0; i < weedsQuadrat.length; i++){
//     for (let j = 0; j < weedsQuadrat[i].length; j++){
//         let weedsInEachCoordinate = Number(prompt(`Please enter the number of weeds counted at ${i + 1},${j + 1}: `))
//         while (weedsInEachCoordinate < 0){
//             console.log(`Less then '0' is invalid number, Please enter number '0' or more then '0'!`)
//             weedsInEachCoordinate = Number(prompt(`Please enter the number of weeds counted at ${i + 1},${j + 1}: `))
//         }
//         weedsQuadrat[i][j] = weedsInEachCoordinate;
//         totalNumberOfWeeds += weedsInEachCoordinate
//     }
// }
// console.log('The results are shown below:')
// for (let i = 0; i < weedsQuadrat.length; i++){
//     console.log(weedsQuadrat[i])
// }
// console.log(`The total number of weeds found was: ${totalNumberOfWeeds}`)

// Program 55 - Cricket over(part 3)...
// const prompt = require('prompt-sync')();
// const scores = [];
// let totalScoreTeam1 = 0
// let totalScoreTeam2 = 0
// let eachBallScore = 0;
// let game = '';
// while (game === '' || game === 'yes') {
//     for (let i = 0; i < 2; i++) {
//         scores[i] = []
//         for (let j = 0; j < 3; j++) {
//             scores[i][j] = 0
//             console.log(`Please enter over ${j + 1} for Team ${i + 1}...`)
//             for (let n = 0; n < 6; n++) {
//                 eachBallScore = Number(prompt(`Please enter the score of the ball ${n + 1}: `))
//                 if (i === 0) {
//                     scores[i][j] += eachBallScore
//                 } else if (i === 1) {
//                     scores[i][j] += eachBallScore
//                 }
//             }
//         }
//     }
//     for (let i = 0; i < 2; i++){
//         for (let j = 0; j < 3; j++){
//             if(i === 0){
//                 totalScoreTeam1 += scores[i][j];
//             } else if (i === 1){
//                 totalScoreTeam2 += scores[i][j];
//             }
//         }
//     }
//     console.log(`Score for Team 1's three over: ${totalScoreTeam1}`)
//     console.log(`Score for Team 2's three over: ${totalScoreTeam2}`)
//     if (totalScoreTeam1 > totalScoreTeam2){
//         console.log('Team 1 won the game!')
//     } else if (totalScoreTeam2 > totalScoreTeam1){
//         console.log('Team 2 won the game!')
//     }
//     game = prompt('Do you wish to calculate the result of another game: ')
// }
// if (game === 'no'){
//     console.log('Good bye!')
// }

let studentsData = [['Jack', 24], ['Sara', 23]];

// iterating over the studentsData
studentsData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});












// function squareSum(numbers){
    // for loop...
    // let totalSum = 0
    // for (let i = 0; i < numbers.length; i++) {
    //     let eachResult = Math.pow(numbers[i], 2)
    //     totalSum += eachResult
    // }
    // return totalSum

    // foeEach loop...
//     let totalSum = 0
//     numbers.forEach(number => {
//         let eachResult = Math.pow(number, 2)
//         totalSum += eachResult
//     })
//     return totalSum
// }
//
// console.log(squareSum([10,10,10]))

// function sum (numbers) {
//     let total;
//     // for(let i = 0; i < numbers.length; i++){
//     //     total += numbers[i]
//     // }
//
//     // numbers.forEach(number => {
//     //     total += number
//     // })
//
//     const  reducer = (preValue, curValue) => preValue + curValue
//     total = numbers.reduce(reducer, 110)
//
//     return total
// };
//
// console.log(sum([1, 2, 3, 4]))