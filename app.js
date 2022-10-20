///////////////////////////////////////////////////////////////// STRINGS 

let firstVariable = 'Hello World';
let secondVariable = undefined;
let yourName = 'Charles';

firstVariable = 1337;
secondVariable = firstVariable;
secondVariable = 'Hello Hello World';

let output = `Hello, my name is ${yourName}`;
console.log(output);

///////////////////////////////////////////////////////////////// BOOLEANS

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b); //true
console.log(c > d); //true
console.log('Name' === 'Name'); //true

///////////////////////////////////////////////////////////////// the Farm

console.log(true || false); //true
console.log(false && false && false && false && false || true); //true
console.log(false || false) //true
console.log(e && 'Kevin'); //true
console.log(a + b == c); //true
console.log(a && a || d); //true
console.log(48 && '48'); //true

let animal = prompt("Name an animal");
if (animal != "Cow") {
    console.log("Hey! You're not a cow!")
    console.log("You should try Cow.... do it....")
}
else if (animal === "Cow") {
    console.log("Moooooooooooooooo!")
}

/////////////////////////////////////////////////////////////// Driver's Ed

let currentAge;

currentAge = prompt("What is your current age?")
if (currentAge >= 16) {
    console.log("Here are the keys!")
}
else if (current < 16) {
    console.log("Sorry, you're too young.")
}
else if (currentAge > 100) {
    console.log("You're too old to drive! Go home!")
}


///////////////////////////////////////////////////////////////// LOOPS

for(let i1 = 0; i1 < 10; i1++) {
    console.log(i1);
};
for(let i2 = 10; i2 <= 400; i2++) {
    console.log(i2);
};
for(let i3 = 12; i3 <= 4000; i3 += 3) {
    console.log(i3);
};

//The Basics

//Get Even

//Give Me 5

//Savings Account



//ARRAYS & CONTROL FLOW



