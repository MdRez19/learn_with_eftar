const prompt = require('prompt-sync')();

class Paper_size {
    constructor(mm, cm, m, inches) {
        this.mm = mm
        this.cm = cm
        this.m = m
        this.inches = inches
    }
}

const A1 = new Paper_size('594 x 841', '59.4 x 84.1', '0.594 x 0.841', '23.4 x 33.1')
const A2 = new Paper_size('420 x 594', '42.0 x 59.4', '0.420 x 0.594', '16.5 x 23.4')
const A3 = new Paper_size('297 x 420', '29.7 x 42.0', '0.297 x 0.420', '11.7 x 16.5')
const A4 = new Paper_size('210 x 297', '21.0 x 29.7', '0.210 x 0.297', '8.3 x 11.7')


const userInputPaper = prompt('Choose the paper: ');
const UserInputSize = prompt(`Choose the paper size(mm/cm/m/inches): `);

//part 1 - find the paper
let selectedPaper;
if (userInputPaper === 'A1'){
    selectedPaper = A1;
} else if (userInputPaper === 'A2'){
    selectedPaper = A2;
} else if (userInputPaper === 'A3'){
    selectedPaper = A3;
} else if (userInputPaper === 'A4'){
    selectedPaper = A4;
}


// 2. display size in the selected type
if (UserInputSize === 'mm'){
    console.log(selectedPaper.mm)
} else if (selectedPaper === 'cm'){
    console.log(selectedPaper.cm)
} else if (selectedPaper === 'm'){
    console.log(selectedPaper.m)
} else if (selectedPaper === 'inches'){
    console.log(selectedPaper.inches)
}
