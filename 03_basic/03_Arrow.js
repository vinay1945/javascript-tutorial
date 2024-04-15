const user = {
  username: "vinay",
  price: 199,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "kumar";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "vinay"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//         let username = "vinay"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "vinay"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({username:"kumar"});

console.log(addTwo(3, 5));
