const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';

let i = 0;
while (i < cats.length) {
    info += cats[i] + ', ';
    i++
}
console.log(info)