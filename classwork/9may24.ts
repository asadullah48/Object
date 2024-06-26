/* Class 9, Thursday Time 9-12 Date 02-May-2024 */

// let student = {
//     username : 'Asadullah',
//     lastName : 'Shafique',
//     slot : 'Thursday',
//     teacher : 'Miss Manaheel',
// }
// console.log(`My name is ${student.username}`)

let student = {
    username : 'asadullahshafique',
    age : 48,
    gender : 'male',
    email : 'xyz@abc.com',
    dob : 3021976
}
console.log(`My name is ${student.username}`)

let vehicle = {
    carName : 'Baleno',
    brand : 'Suzuki',
    make : 2024,
    color : 'Metalic white',
    transmission : 'A/T'
}

let student2 :{
    username : string,
    age : number,
    gender : string,
    email: string,
}= {
    username : 'asadullahshafique',
    age : 48,
    gender : 'male',
    email : 'xyz@abc.com',
    //dob : 3021976 // object can't accept any other value except declared
};

let employees : {name: string, email:string, age: number} = {
    name : '558788', // gives error if type is defined as string and value is given as number
    email : 'asad@xyz.com',
    age : 48
};

let shopList : {biscuit: string, toothpaste:string, budget: number} = {
    biscuit: 'Tuc',
    toothpaste: 'Colgate',
    budget: 1500,
};

type Employees = {
    name: string,
    age: number,
    isAdmin: boolean,
};

let employeeA :Employees ={
    name : 'Badshah',
    age : 21,
    isAdmin : true
}
type HorsePower = number | string // variable can be assigned multiple types
type Vehicle = {carName: string, modelNo: number, isReady?: boolean, color : undefined, power:HorsePower};
// in above type, there is another type nested into it.
let civic : Vehicle= {
carName: 'Civic',
modelNo: 2020,
//isReady: false, // adding ? to a property makes it optional in the object and it won't generate an error
color: undefined,
power: 1000
}
let honda : Vehicle= {
    carName: 'Civic',
    modelNo: 2020,
    isReady: false,
    color: undefined,
    power: '1000'
    }

honda.carName = 'City';
honda.isReady = true
console.log (honda);

//////////////////////////////////////////////////

// declaring a variable value inside a type
// following example makes a default type and value to the variable
type UserName = 'asad'
let userName : UserName = 'asad'

type Faculty = 'Student' | 'Admin' | 'Teacher' | 'TA'
let userName2 : Faculty = 'Teacher'

type Items = 'Biscuits' | 'Toffee' |'Jelly' | 5000;
let items : Items = 5000
items = 'Jelly'