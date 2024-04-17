// if
// <, >, <=, >=, ==, !=, ===, !==

// const isUserloggedIn = true;
// const temperature = 41;
// if (temperature === 40) {
//   console.log("temperature is less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

// const score =200
// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

// don't write code like this this
// if (balance > 500) console.log("test"), console.log("test2");

// const balance = 1000;

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = true
// const loggedInFromEmail =true

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy coures")
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("user logged in")
// }

// =================== part 2 ===============

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
// const month = 3;

// switch (month) {
//   case 1:
//     console.log("jan");
//     break;
//   case 2:
//     console.log("feb");
//     break;
//   case 3:
//     console.log("march");
//     break;
//   case 4:
//     console.log("april");
//     break;

//   default:
//     console.log("default case match");
//     break;
// }

// const userEmail = "h@itesh.ai"
// if(userEmail){
//     console.log("got user email")
// }else{
//     console.log("don't hava user email")
// }

// falsy values
/*
false, 0, -0, bigint 0n, "", null, undefind, NaN
*/

// truthy values
/*
"0", "false"," ", [], {}, function(){}
*/
// const userEmail = 2

// if(userEmail){
//     console.log("got user 3 email");
// }else{
//     console.log("dont hava 3 user email");
// }

// const emptuarr = []
// if(emptuarr.length === 0){
//     console.log("Array is empty")
// }
// const emptuobj = {}
// if(Object.keys(emptuobj).length === 0){
//     console.log("object is empty")
// }

// Nullish Coalescing Operator (??) : null undefined
/*
The nullish coalescing (??) operator is a logical operator 
that returns its right-hand side operand when its 
left-hand side operand is null or undefined, 
and otherwise returns its left-hand side operand.
*/

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1)

// Terniary Operator
// condition ? true ? false;
// const iceteaPrice = 100
// iceteaPrice <=80 ? console.log("less then 80") : console.log("more then 80")
