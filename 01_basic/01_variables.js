const accountId = 1423;
let accountEmail = "vinay@gmail.com";
var accountPassword = "123465";
accountCity = "bhiwandi";
let accountStatus;

// accountId = 2 // we can not change const value node.js not allowed

accountEmail = "kumar@gamil.com";
accountPassword = "6445545";
accountCity = "mumbai";


/*
prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity, accountStatus])
