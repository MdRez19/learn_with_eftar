//CHAPTER 3
// Function:....

// const power = function(base, exponent){
//     let result = 1;
//     for(let count = 0; count < exponent; count++){
//         result *= base;
//     }
//     return result;
// }
//
// console.log(power(2, 10));


const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += 's'
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    }
    ingredient(1, 'can', 'chickpeas')
    ingredient(0.25, 'cup', 'tahini')
    ingredient(0.25, 'cup', 'lemon juice')
    ingredient(1, 'clove', 'garlic')
    ingredient(2, 'tablespoon', 'olive oil')
    ingredient(0.5, 'teaspoon', 'cumin')
}
hummus(10)