// using let, const and var in js 
let a = 5;
a = 6;
console.log(a);
// The values of a let can be re-assigned
// const name = "Davis";
// console.log(name);
// Data types in javascript... 

// if(a === name){
//     let b = 'age'
//     var c = 'name'
// }

// console.log(c)

// function example() {
//     var x = 10;
//     if (true) {
//         var y = 20;
//         let z = 30;
//     }
//     console.log(x); // 10
//     console.log(y); // 20
//     //console.log(z); // ReferenceError: z is not defined
// }

// console.log(example())

// Data types : string, number, boolean, undefine, null 

let name = "Abel"
let age = 22

if(age == 12){
    console.log(age)
}else{
    console.log("not the same")
}

// tenary operator in javascript
const printAge = age == 12 ? age : "not the same";

const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage);
console.log(printAge);

let x = "0";
switch (x){
    case 0:
        text = "OFF";
        break;
    case 1:
        text = "ON";
        break;
    case 2:
        text = "OFF ON"
        break;
    default:
        text = "No value found";
    
}

console.log(text);

// Loop - for, for in, for of, while, do while. 

