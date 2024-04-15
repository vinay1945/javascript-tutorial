let score = "33aaa";

// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// string = number
// string + number = NaN
// true/false = 1/0

let isLoggedIn = "54";

let booleanIsLoggedIN = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIN);

// number 1/0 to true / false
// "" = false
// "jdkl" = true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ===================== Operations ==================

let value = 3;
let negValue = -value;

// console.log(negValue);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + "2" + 2);
// console.log(1 + 2 + "2");
// console.log("1" + 2 + "2");
// console.log("1" + 2 + 2);

let x = 3;
console.log(`before ${x}`);
const y = x++;

console.log(`after x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
console.log(`before ${a}`);

const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
