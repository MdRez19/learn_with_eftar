let num = 4;

for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i); // 1
    if (Math.floor(sqRoot) !== sqRoot) {
        continue;
    }
    console.log(i);
}


// for(let i = 0; i < 10; i++){
//     if(i === 5){
//         continue
//     }
//     console.log(i)
// }



