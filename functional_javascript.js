// function hello(name, course, price, messageCallBack){
//     let message = messageCallBack(course, price)
//     console.log(`Hello ${name}, ${message}`)
// }
//
// function courseAvailable(course, price){
//     return `The ${course} course is available. The price of the course is £${price}!`
// }
//
// function courseNotAvailable(course){
//     return `sorry the ${course} course is not available!`
// }
//
// function coursesComingSoon(course, price){
//     return `The ${course} course is coming soon. The price of the course will be £${price}.`
// }
//
// hello('Mohammed', 'math', 50, courseAvailable);
// ##############################################

let hello = (name, course, price, messageCallBack) => {
    let message = messageCallBack(course, price)
    console.log(`Hello ${name}, ${message}`)
}

let courseAvailable = (course, price) => {
    return `The ${course} course is available. The price of the course is £${price}!`
}

let courseNotAvailable = course => `sorry the ${course} course is not available!`

let coursesComingSoon = (course, price) => {
    return `The ${course} course is coming soon. The price of the course will be £${price}.`
}

hello('Mohammed', 'math', 50, courseAvailable);





// let listOfNumber = (number) => {
//     for (let i = 0; i <= number; i++){
//         if(i % 2 !== 0){
//             console.log(i)
//         }
//     }
// }
//
// listOfNumber(20)
// console.log(listOfNumber())