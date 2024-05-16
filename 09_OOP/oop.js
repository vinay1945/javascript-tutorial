// Javascript and classes
// oop is programing style
//object i s collection of properties and methods
//toLowerCase etc.

// why use oop is
// code become a big mashup and there is a concept by doing spaghetti

// parts of  oop
// object literal

// constructor
// prototypes
// classes
// instances(new, this)

// 4 pillars
// abstraction
// encapsulation
// inheritance
// polymorphism

// const user = {
//     username:"viany",
//     loginCount:8,
//     signedIn : true,

//     getUserDetails: function(){
//         // console.log("aklsjdflk");
//         // console.log(`username:${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn) {
  this.myusername = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // return this
}

const userOne = new User("vinay", 5, false);
const userTwo = new User("kumar", 6, true);
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);
