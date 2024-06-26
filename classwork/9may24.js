"use strict";
/* Class 9, Thursday Time 9-12 Date 02-May-2024 */
Object.defineProperty(exports, "__esModule", { value: true });
// let student = {
//     username : 'Asadullah',
//     lastName : 'Shafique',
//     slot : 'Thursday',
//     teacher : 'Miss Manaheel',
// }
// console.log(`My name is ${student.username}`)
let student = {
    username: 'asadullahshafique',
    age: 48,
    gender: 'male',
    email: 'xyz@abc.com',
    dob: 3021976
};
console.log(`My name is ${student.username}`);
let vehicle = {
    carName: 'Baleno',
    brand: 'Suzuki',
    make: 2024,
    color: 'Metalic white',
    transmission: 'A/T'
};
let student2 = {
    username: 'asadullahshafique',
    age: 48,
    gender: 'male',
    email: 'xyz@abc.com',
    //dob : 3021976 // object can't accept any other value except declared
};
let employees = {
    name: '558788',
    email: 'asad@xyz.com',
    age: 48
};
let shopList = {
    biscuit: 'Tuc',
    toothpaste: 'Colgate',
    budget: 1500,
};
let employeeA = {
    name: 'Badshah',
    age: 21,
    isAdmin: true
};
// in above type, there is another type nested into it.
let civic = {
    carName: 'Civic',
    modelNo: 2020,
    //isReady: false, // adding ? to a property makes it optional in the object and it won't generate an error
    color: undefined,
    power: 1000
};
let honda = {
    carName: 'Civic',
    modelNo: 2020,
    isReady: false,
    color: undefined,
    power: '1000'
};
honda.carName = 'City';
honda.isReady = true;
console.log(honda);
let userName = 'asad';
let userName2 = 'Teacher';
let items = 5000;
items = 'Jelly';
