const prompt = require('prompt-sync')();

class Paper_size {
    // mm;
    // cm;
    // m;
    // inches;
    constructor(mm, cm, m, inches) {
        this.mm = mm
        this.cm = cm
        this.m = m
        this.inches = inches
    }
    // result(){
    //     let choosePaper = this.choosePaper;
    //     if (choosePaper === 'A1'){
    //         let result = this.result
    //         if (result === 'mm'){
    //             console.log(this.mm)
    //         } else if (result === 'cm'){
    //             console.log(this.cm)
    //         } else if (result === 'm'){
    //             console.log(this.m)
    //         } else if (result === 'inches'){
    //             console.log(this.inches)
    //         }
    //         return result
    //     }
    //
    // }
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

// let result = ''
// if (choosePaper === 'A1'){
//     result = prompt(`Choose the paper size: `)
//     if (result === 'mm'){
//         console.log(A1.mm)
//     } else if (result === 'cm'){
//         console.log(A1.cm)
//     } else if (result === 'm'){
//         console.log(A1.m)
//     } else if (result === 'inches'){
//         console.log(A1.inches)
//     }
// }else if (choosePaper === 'A2'){
//     result = prompt(`Choose the paper size: `)
//     if (result === 'mm'){
//         console.log(A2.mm)
//     } else if (result === 'cm'){
//         console.log(A2.cm)
//     } else if (result === 'm'){
//         console.log(A2.m)
//     } else if (result === 'inches'){
//         console.log(A2.inches)
//     }
// }else if (choosePaper === 'A3'){
//     result = prompt(`Choose the paper size: `)
//     if (result === 'mm'){
//         console.log(A3.mm)
//     } else if (result === 'cm'){
//         console.log(A3.cm)
//     } else if (result === 'm'){
//         console.log(A3.m)
//     } else if (result === 'inches'){
//         console.log(A3.inches)
//     }
// }else if (choosePaper === 'A4'){
//     result = prompt(`Choose the paper size: `)
//     if (result === 'mm'){
//         console.log(A4.mm)
//     } else if (result === 'cm'){
//         console.log(A4.cm)
//     } else if (result === 'm'){
//         console.log(A4.m)
//     } else if (result === 'inches'){
//         console.log(A4.inches)
//     }
// }