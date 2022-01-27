function countNum(str){
    let countNo7 = 0;
    let countNo3 = 0;
    let countNo5 = 0;
    for(let i = 0; i < 11; i++){
        let char = str.charAt(i)
        if(char === '7'){
            countNo7++
        }else if(char === '3'){
            countNo3++
        }else if(char === '5'){
            countNo5++
        }else {

        }
    }
    if(countNo7 > 0){
        console.log(`7 is ${countNo7} times in the string!`)
    }
    if(countNo3 > 0){
        console.log(`3 is ${countNo3} times in the string!`)
    }
    if(countNo5 > 0){
        console.log(`5 is ${countNo5} times in the string!`)
    }
}

countNum('07462373777')
console.log('**************')
countNum('77777777777')
console.log('**************')
countNum('99999999999')
console.log('**************')
countNum('55555555555')
// console.log(`7 is ${countNo7} times in the string!`);
// console.log(`3 is ${countNo3} times in the string!`);
// console.log(`5 is ${countNo5} times in the string!`);
