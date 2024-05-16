// Level 1: Basic String Manipulation

// Concatenation: Write a function that concatenates two strings and returns the result.
/*
const str = "hello"
const str1 = "vinay"

function Concatenation(){
  return `${str} ${str1}`
}

console.log(Concatenation());
*/

//Uppercase Conversion: Write a function that takes a string as input and returns the string in uppercase.
/*
let str = "web development"
const upperc = function(str){
  let uppercaseStr =  str.toUpperCase()
  return uppercaseStr
}
console.log(upperc(str));
*/

// Substring Extraction: Write a function that extracts a substring from a given string. The function should take the start index and end index as parameters.
/*
let str = "Write a function that extracts a substring from a given string."
function substr(start, end){
  // return str.slice(start, end)
  return str.substring(start, end)
}

console.log(substr(0, 5));

console.log(str);
*/

// Length of String: Write a function that returns the length of a given string.
/*
let str = "web development";
const lan = function (str) {
  let th =  str.length;
  console.log(th);
};

lan(str)
// console.log(lan(str));
*/

// Counting Characters: Write a function that counts the number of occurrences of a specific character in a string.
/*
let str = "Write a function that counts the number of occurrences of a specific character in a string.";

function countchar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i] === char){
      count++
    }
  }
  return count
}

console.log(countchar(str, "c"));
*/

// Level 2: Intermediate String Manipulation

// Palindrome Check: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
/*
let str = "";

function palindrome(str) {
  if (str === "") {
    return false
  } 
  let checkPalindrome = str.split("").reverse().join("");
  return checkPalindrome === str
}

console.log(palindrome(str));
*/

// Reverse Words: Write a function that reverses the order of words in a sentence. For example, "Hello world" should become "world Hello".
/*
let str = "Write a function that reverses the order of words";
function reversefunc(str) {
  if (str === "") {
    return false;
  }
  let reverseword = str.split(" ").reverse().join(" ");
  return reverseword;
}

console.log(reversefunc(str));
*/

// Find First Non-Repeating Character: Write a function that finds the first non-repeating character in a string and returns it.

let str = "vinay"
let str2 = 'non-repeating character'

function nonrepeating(str){
  let nonrepeatingWord;
  for(i =0 ; i<str.length; i++){
    if(str[i]=== str[i]){
      nonrepeatingWord = str[i]
      return nonrepeatingWord
    }
  }
}

console.log(nonrepeating(str));