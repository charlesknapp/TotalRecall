// ///////////////////////////////////////////////////////////////// STRINGS 

// let firstVariable = 'Hello World';
// let secondVariable = undefined;
// let yourName = 'Charles';

// firstVariable = 1337;
// secondVariable = firstVariable;
// secondVariable = 'Hello Hello World';

// let output = `Hello, my name is ${yourName}`;
// console.log(output);

// ///////////////////////////////////////////////////////////////// BOOLEANS

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b); //true
// console.log(c > d); //true
// console.log('Name' === 'Name'); //true

// ///////////////////////////////////////////////////////////////// THE FARM

// console.log(true || false); //true
// console.log(false && false && false && false && false || true); //true
// console.log(false || false) //true
// console.log(e && 'Kevin'); //true
// console.log(a + b == c); //true
// console.log(a && a || d); //true
// console.log(48 && '48'); //true

// let animal = prompt("Name an animal");
// if (animal != "Cow") {
//     console.log("Hey! You're not a cow!")
//     console.log("You should try Cow.... do it....")
// }
// else if (animal === "Cow") {
//     console.log("Moooooooooooooooo!")
// }

// /////////////////////////////////////////////////////////////// DRIVER'S ED

// let currentAge;

// currentAge = prompt("What is your current age?")
// if (currentAge >= 16) {
//     console.log("Here are the keys!")
// }
// else if (current < 16) {
//     console.log("Sorry, you're too young.")
// }
// else if (currentAge > 100) {
//     console.log("You're too old to drive! Go home!")
// }


///////////////////////////////////////////////////////////////// LOOPS

// for(let i1 = 0; i1 < 10; i1++) {
//     console.log(i1);
// };
// for(let i2 = 10; i2 <= 400; i2++) {
//     console.log(i2);
// };
// for(let i3 = 12; i3 <= 4000; i3 += 3) {
//     console.log(i3);
// };

// B
// for (let i4 = 1; i4 <= 100; i4++) {
//     if (i4 % 2 == 0) {
//         console.log(`${i4} <-- is an even number`)
//     }
//     else {
//         console.log(i4)
//     }
// }
// // C
// for (let i5 = 0; i5 <= 100; i5++) {
//     if (i5 > 0 && !(i5 % 5)) {
//         console.log(`I found a ${i5}. High five!`)
//     }
//     if (i5 > 0 && !(i5 % 3)) {
//         console.log(`I found a ${i5}. Three is a crowd.`)
//     }
// }

// D

// let totalBalance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let bank_account = 0;

// totalBalance.forEach(element => {
//     bank_account += element
// });

// console.log(bank_account)

// OR

// let bank_account_2 = 0;
// for(i = 0; i <= 10; i++) {
//     bank_account_2 += i;
// }

// console.log(bank_account_2)

// let bank_account_3 = 0;
// for(i = 0; i <= 100; i++) {
//     bank_account_3 += i * 2
// }

// console.log(bank_account_3)

/////////////////////////////////////////////////////////// ARRAYS & CONTROL FLOW

quotes = [`Don't get high on your own supply`, `No one owes you anything`, `You vs. you`]

// E

// const myArray = [5, 10, 500, 20]
// myArray.push('Aegon', 'Testing')
// myArray.shift(myArray)
// myArray.unshift('Bob Marley')
// myArray.pop()
// //Array.prototype.reverse();
// myArray.reverse();

// console.log(myArray)

// F

// let biggSmall = prompt("Enter any number within 1-500")
// if ( biggSmall <= 100 ) {
//     console.log("little number")
// }
// else if ( biggSmall >= 100 ) {
//     console.log("big number")
// }

// G

// let monkeyValue = prompt("Enter any number within 1-100")

// if ( monkeyValue < 5 ) {
//     console.log("little number")
// }
// else if (monkeyValue > 10) {
//     console.log("big number")
// }
// else {
//     console.log("monkey")
// }

// H

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

//   console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
//   kristynsCloset.splice(6, 0, "raybans")
//   kristynsCloset.splice(5, 1, "stained knit hat")
//   console.log(kristynsCloset)

  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  thomsCloset[1].pop();
  thomsCloset[1].push('Footie Pajamas')
  console.log(`Thom is lookin' S E X Y while wearing his ${thomsCloset[0][1]}, his ${thomsCloset[1][2]}, while also rockin some ${thomsCloset[2][2]}`)

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// FUNCTIONS

//   printCool = function(name) {
//     this.name = name;
//   }
//   name = prompt("What is your name?")
//   console.log(`${this.name} is cool!`)

//   let calulateCube = (x) => {

//     let volume = x * x * x;
    
//     console.log(`This cube has a volume of: ${volume}`)
//   }
//   calulateCube(5)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// VOWELS

// function isVowel(letter) {

//     let vowels = ["a", "e", "i", "o", "u"]

// for (let i = 0; i < vowels.length; i++) {
//     if (letter === vowels[i]) {
//         return true;
//     }
// }

// return false;
// }

// console.log("e is a vowel?", isVowel("e"))

// E

// function getTwoLengths (a,b) {
//     let array = [];

//     for (i = 0; i < arguments.length; i++) {
//         array.push(arguments[i].length);
//     }
//     return array;
// }

// //Simplified Version
// function getTwoLengths(string1, string2){
//     return [string1.length, string2.length];
// }


// console.log(getTwoLengths("Hank", "Hippopopalous"));

// F

// function getMultipleLengths(strings) {
//     const output = [];
//     for(let string of strings) {
//         output.push(string.length)
//     }
//     return output;
// }

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G

function maxOfThree(value1, value2, value3) {
  let largestNumber = value1;

  if(value2 > largestNumber) {
    largestNumber = value2;
  }
  if(value3 > largestNumber) {
    largestNumber = value3;
  }
  return largestNumber;
}

console.log(maxOfThree(6, 9, 1));