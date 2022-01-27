const prompt = require('prompt-sync')();

class Paper_size {
    id;
    mm;
    cm;
    m;
    inches;
    constructor(id, mm, cm, meters, inches) {
        this.id = id
        this.mm = mm
        this.cm = cm
        this.m = meters
        this.inches = inches
    }
}

const ALL_PAPERS = [
    new Paper_size('A1','594 x 841', '59.4 x 84.1', '0.594 x 0.841', '23.4 x 33.1'),
    new Paper_size('A2', '420 x 594', '42.0 x 59.4', '0.420 x 0.594', '16.5 x 23.4'),
    new Paper_size('A3','297 x 420', '29.7 x 42.0', '0.297 x 0.420', '11.7 x 16.5'),
    new Paper_size('A4','210 x 297', '21.0 x 29.7', '0.210 x 0.297', '8.3 x 11.7')
];

const userInputPaper = prompt('Choose the paper: ');
const UserInputSize = prompt(`Choose the paper size(mm/cm/m/inches): `);

//part 1 - find the paper
let selectedPaper;
for(let n=0; n <ALL_PAPERS.length; n++) {
    if (userInputPaper === ALL_PAPERS[n].id) {
        selectedPaper = ALL_PAPERS[n];
        break;
    }
}

// 2. display size in the selected type
if (UserInputSize === 'mm'){
    console.log(selectedPaper.mm)
} else if (UserInputSize === 'cm'){
    console.log(selectedPaper.cm)
} else if (UserInputSize === 'm' || UserInputSize === 'meters'){
    console.log(selectedPaper.m)
} else if (UserInputSize === 'inches'){
    console.log(selectedPaper.inches)
}
