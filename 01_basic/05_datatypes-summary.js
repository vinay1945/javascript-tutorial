// primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const Name = "vinay";
const age = 19;
const isLoggedIn = true;
const outsideTemp = null;
let Email;
const UserId = Symbol("123");
// const anotherUserId = Symbol("050");
const BigNumber = 6574161465635416514n;

// console.log(UserId === anotherUserId);

// console.table([
//   " String " + Name,
//   " Number " + age,
//   " boolearn " + isLoggedIn,
//   " null " + outsideTemp,
//   " undefined " + Email,
//   " Bigint " + BigNumber,
// ]);

// console.table([
//   "typsof String " + typeof Name,
//   "typsof Number " + typeof age,
//   "typsof boolearn " + typeof isLoggedIn,
//   "typsof null " + typeof outsideTemp,
//   "typsof undefined " + typeof Email,
//   "typsof Bigint " + typeof BigNumber,
// ]);

// console.log(UserId);
// console.log(typeof UserId);

/*
The error you're encountering is because you're declaring a constant variable UserEmail without assigning it a value. In JavaScript, constants must be initialized with a value at the time of declaration.
*/

// Reference (Non primitive)

// Array, Ojects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "viany",
  age: 19,
};

const myfunctions = function () {
  console.log("hello world");
};

console.table([heros, myObj, myfunctions]);
console.table([typeof heros, typeof myObj, typeof myfunctions]);

// =================== Stack and Heap memory ============

let myName = "vinay";
let anotherName = myName;
anotherName = "bunny";

console.log(myName); // vinay
console.log(anotherName); // bunny

let UserOne = {
  email: "vinay@google.com",
  upi: "vinay@yble",
};
console.log(UserOne.email); //vinay@google.com
let UserTwo = UserOne;
UserTwo.email = "bunny@google.com";

console.log(UserOne.email); //bunny@google.com
console.log(UserTwo.email); //bunny@google.com
