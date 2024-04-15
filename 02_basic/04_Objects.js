// it is  singleton object
const tinderUser = new Object();

tinderUser.id = "134da";
tinderUser.name = "vinay";
tinderUser.isloggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "vinay",
      lastName: "porandla",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

const obj3 = {obj1,obj2}
const obj4 = {...obj1,...obj2}
const obj5 = Object.assign({}, obj1,obj2)
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);

const users = [
    {
        1:'a',
        email:"jasldkf"
    },
    {
        1:'a'
    },
    {
        1:'a'
    }
]

// console.log(users[1].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('false'));


const course = {
    coursename : "js in hindi",
    price:"999",
    courseInstructor :"vinay"
}

// course.courseInstructor

const {courseInstructor: instr} = course

// console.log(instr);