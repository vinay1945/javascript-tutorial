// const coding = ["js", "java", "c++", "c", "python"];

// coding.forEach(function (element) {
  //   console.log(element);
// });

// coding.forEach((element) => {
  //   console.log(element);
// });

// coding.forEach((element) => {
  //   console.log(element);
// });

// function printme(item) {
  // console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
// });

const coding = [
  {
    languageName: "javascript",
    languageFillName: "js",
  },
  {
    languageName: "java",
    languageFillName: "java",
  },
  {
    languageName: "c++",
    languageFillName: "cpp",
  },
  {
    languageName: "python",
    languageFillName: "py",
  },
];

coding.forEach((ele) => {
  console.log(`${ele.languageFillName} for ${ele.languageName}`);
});
