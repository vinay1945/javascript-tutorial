// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// function addTwoNumbers(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }
// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// const result = addTwoNumbers(3, 5);
// console.log(result);

// function loginUserMessage(userName = "kumar") {
//   if (!userName) {
//     console.log("please  enter a username");
//     return;
//   } else {
//     return `user just logged in ${userName}`;
//   }
// }

// console.log(loginUserMessage("vinay"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 600, 800, 400));

const user = {
  userName: "vinay",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.userName} and price is ${anyobject.price}`
  );
}

handleObject(user);
handleObject({
  userName: "kumar",
  price: 200,
});

const myArray = [200, 600, 800, 400];
function returnSecondValue(getArray) {
  for (i = 0; i < 4; i++) {
    console.log(`prics is ${getArray[i]}`);
  }
}

returnSecondValue(myArray);
// returnSecondValue([200, 600, 800, 400]);
