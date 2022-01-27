const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function(bYear){
    //     return 2037 - bYear
    // }

    // calcAge: function(){
    //     return 2037 - this.birthYear
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear
        return this.age
    },
    drivingLicense: function (){
        if (this.hasDriversLicense === true){
            return 'a'
        } return 'no'
    },
    getSummary: function (){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.drivingLicense()} Driving License!`
    }
}
console.log(jonas.getSummary())
// console.log(jonas.calcAge())
// console.log(jonas.age)
// console.log(jonas['calcAge'](1991))






// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function() {
//         console.log("My name is: " + this.name);
//         console.log("My age is: " + this.age);
//     };
// }
//
// let john = new User("John", 30);
// let robert = new User("robert", 35);
//
// john.sayHi()
// robert.sayHi()

// What is the difference between these two method. These two does exactly same thing...
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
// let value1 = parseFloat(prompt('Enter the first number: '))
// let value2 = parseFloat(prompt('Enter the second number: '))
// let operator = prompt('Choose the operator: ')
// let total = 0;
//
// if (operator === 'add'){
//     total = value1 + value2
// } else  if (operator === 'sub'){
//     total = value1 - value2
// } else  if (operator === 'milt'){
//     total = value1 * value2
// } else  if (operator === 'div'){
//     total = value1 / value2
// }
// console.log(total)