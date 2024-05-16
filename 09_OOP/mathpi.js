// const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descripter);

const chai = {
  name: "tea",
  price: 250,
  isAvailable: true,

  orderChai: function(){
    console.log('chai nhi bni');
  }
};

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}