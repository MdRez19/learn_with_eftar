// if...else statements...
// let weather = 'cold';
// let temperature = 30;

// if (weather === 'sunny' || temperature > 30){
//     console.log("its sunny and its really hot")
// } else  if(weather === 'sunny' || temperature <= 30){
//     console.log('its sunny')
// } else if(weather === "cold" || temperature < 0){
//     console.log("its freezing cold")
// } else if(weather === "cold" || temperature > 0) {
//     console.log("its cold")
// }

// if (weather === 'sunny' && temperature > 30 ) {
//     console.log("its sunny and its really hot")
// } else if (weather === 'sunny' && temperature <= 30) {
//     console.log("its sunny")
// } else if (weather === "cold" && temperature <= 0) {
//     console.log("its freezing cold")
// } else if (weather === "cold" && temperature > 0) {
//     console.log("its cold")
// }

// if (weather === "cold" || temperature < 1) {
//     console.log("its cold")
//
// }
//***end***

//Logical operators: OR ...
// let iceCreamVanOutside = false; // here FALSE means the iceCreamVanOutside is not outside.
// let houseStatus = 'normal';
// if (iceCreamVanOutside || houseStatus === 'on fire') {
//     console.log('You should leave the house quickly.');
// } else {
//     console.log('Probably should just stay in then.');
// }

// example 1 - false, true
// let iceCreamVanOutside = false; // false
// let houseStatus = 'on fire';    // true
// if (iceCreamVanOutside || houseStatus === 'on fire') { // true
//     console.log('You should leave the house quickly.'); // this will output.
// } else {
//     console.log('Probably should just stay in then.');
// }

// example 2 - true, true
// let iceCreamVanOutside = true; // true
// let houseStatus = 'on fire';    // true
// if (iceCreamVanOutside || houseStatus === 'on fire') { // true
//     console.log('You should leave the house quickly.'); // this will output.
// } else {
//     console.log('Probably should just stay in then.');
// }

// example 3 - true, false
// let iceCreamVanOutside = true; // true
// let houseStatus = 'normal';    // false
// if (iceCreamVanOutside || houseStatus === 'on fire') { // true
//     console.log('You should leave the house quickly.'); // this will output.
// } else {
//     console.log('Probably should just stay in then.');
// }

// example 4 - false, false
// let iceCreamVanOutside = false; // false
// let houseStatus = 'normal';    // false
// if (iceCreamVanOutside || houseStatus === 'on fire') { // false
//     console.log('You should leave the house quickly.');
// } else {
//     console.log('Probably should just stay in then.'); // this will output.
// }


//Logical operators: NOT...
// example 1 - false, true
// let iceCreamVanOutside = false; // false // here FALSE means the iceCreamVanOutside is not outside.
// let houseStatus = 'normal';     // true
// if (!iceCreamVanOutside || !houseStatus === 'on fire') {
//     console.log('Probably should just stay in then.');
// } else {
//     console.log('You should leave the house quickly.');
// }


// example 2 - true, true
// let iceCreamVanOutside = true; // true
// let houseStatus = 'on fire';    // true
// if (!iceCreamVanOutside || !houseStatus === 'on fire') { // false
//     console.log('You should leave the house quickly.');
// } else {
//     console.log('Probably should just stay in then.'); // this will output.
// }

// example 3 - true, false
let iceCreamVanOutside = true; // true
let houseStatus = 'normal';    // false
if (!(iceCreamVanOutside || houseStatus === 'on fire')) { // true
    console.log('You should leave the house quickly.'); // this will output.
} else {
    console.log('Probably should just stay in then.');
}

// example 4 - false, false
// let iceCreamVanOutside = false; // false
// let houseStatus = 'normal';    // false
// if (iceCreamVanOutside || houseStatus === 'on fire') { // false
//     console.log('You should leave the house quickly.');
// } else {
//     console.log('Probably should just stay in then.'); // this will output.
// }




