// const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
// let info = 'My cats are called ';
//
// for (let i = 0; i < cats.length; i++) {
//     info += cats[i] + ', ';
// }
//
// console.log(info)



// const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
// const input = 'rofy';
//
// function findContact(searchName) {
//     for (let i = 0; i < contacts.length; i++) {
//         let splitContact = contacts[i].split(':');
//         if (splitContact[0].toLowerCase() === searchName) {
//             console.log(splitContact[0] + '\'s number is ' + splitContact[1] + '.');
//             break;
//         } else if (i === contacts.length - 1) {
//             console.log('Contact not found.');
//         }
//     }
// };
// findContact(input)



// const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
// let info = 'My cats are called ';
// const para = document.querySelector('p');
//
// for (let i = 0; i < cats.length; i++) {
//     info += cats[i] + ', ';
// }
//
// para.textContent = info;




const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const input = "Bill"

// find the name in the list
// if it does not find the name, it outputs Contact not found.
function findContact(searchName) {
    for (let i = 0; i < contacts.length; i++) {
        let splitContact = contacts[i].split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            console.log(splitContact[0] + '\'s number is ' + splitContact[1] + '.');
            break;
        } else if (i === contacts.length - 1) {
            console.log('Contact not found.');
        }
    }
}
findContact('bill')

// find the contact in the list using their name
// if it does not find the name, it outputs Contact not found.
// function findContact2(searchName) {
//     let found = false;
//     let foundContact = [];
//
//     for (let i = 0; i < contacts.length; i++) {
//         let splitContact = contacts[i].split(':');
//         if (splitContact[0].toLowerCase() === searchName) {
//             found = true;
//             foundContact = splitContact;
//             break;
//         }
//     }
//
//     if (found) {
//         console.log(foundContact[0] + '\'s number is ' + foundContact[1] + '.');
//     } else {
//         console.log('Contact not found.');
//     }
// }
//
//
// // find the contact in the list using their name
// // if it does not find the name, it outputs Contact not found.
// function findContact3(searchName) {
//     let foundContact = [];
//
//     for (let i = 0; i < contacts.length; i++) {
//         let splitContact = contacts[i].split(':');
//         if (splitContact[0].toLowerCase() === searchName) {
//             foundContact = splitContact;
//             break;
//         }
//     }
//
//     if (foundContact.length !== 0) {
//         console.log(foundContact[0] + '\'s number is ' + foundContact[1] + '.');
//     } else {
//         console.log('Contact not found.');
//     }
// }
