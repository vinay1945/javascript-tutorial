// ES 6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptpassword() {
//     return `${this.password}akjdfsl`;
//   }
//   ChangeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai$google.com", "1254");

// console.log(chai.encryptpassword());
// console.log(chai.ChangeUsername());









// behind the scene


function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptpassword = function () {
  return `${this.password}akjdfsl`;
};
user.prototype.ChangeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new user("tea", "tea$google.com", "745");

console.log(tea.encryptpassword());
console.log(tea.ChangeUsername());