// Loop in js, for loop, for in loop, for of loop, while loop, do while loop
const cars = ["BMW", "Volvo", "Tesla", "Hunda"];
// console.log(cars[0])

let text = "";

for (let counter = 0; counter < cars.length; counter++){
    text += cars[counter] + "\n";
}

console.log(text)

let text2 = "";

for (let i = 0; i <= 10; i++){
    text2 += "The number is " + i + "\n";
}

console.log(text2)

// &&, ||, !
// && logical and 
// || logical or 
// ! logical not

let color = "yellow";
let man = "black"
if((color === "blue") || (man === "black")){
    console.log("The man is black in color");
}else{
    console.log("The man is not black")
}