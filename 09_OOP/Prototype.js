// let myName = "vinay"

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let HeroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.vinay = function () {
  console.log(`vinay is present in all object`);
};

Array.prototype.heyvinay = function () {
  console.log(`vinay is hey`);
};

// myHeros.vinay()
// myHeros.heyvinay()
// HeroPower.heyvinay()

const teacher = {
  makevider: true,
};

const teachingSupport = {
  isAvailable: true,
};

const TAsupport = {
  makeAssignment: "js assignment",
  fulltime: true,
  __Proto__: teachingSupport,
};

// teacher.__Proto__ = user

// modern syntax
// Object.setPrototypeOf(teachingSupport, teacher)  




 
let AnotherUserName = "jasdklfjkl               "



String.prototype.truelength = function(){
    console.log(this);
    // console.log(this.name);
    console.log(`true length is: ${this.trim().length}`);
}
AnotherUserName.truelength()


"vinay".truelength()