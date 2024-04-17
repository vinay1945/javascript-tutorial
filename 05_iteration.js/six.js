const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNums.filter((num)=>{
// return num > 4
// })
// console.log(newNum);

// const newNum = []

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNum.push(num)
//     }
// })

// console.log(newNum);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Science", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Fiction", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Non-Fiction", publish: 1987, edition: 1999 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1966 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2023 },
  { title: "Book Nine", genre: "Horror", publish: 2005, edition: 2023 },
  { title: "Book Ten", genre: "Fantasy", publish: 2010, edition: 2023 },
];

// const userBooks = books.filter((bk)=>{
//     return bk.genre === 'History'
// })
// console.log(userBooks);

// const userBooks =  books.filter((bk)=> {
//     return bk.publish >= 1999 && bk.genre==='History'
// })
// console.log(userBooks);

// let newNums = myNums.map((ele)=>{
//     return ele + 10
// })
// console.log(newNums);

// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);
// console.log(newNums);


const shoppingCard = [
    {
      itemName: "js coures",
      price: 2999,
    },
    {
      itemName: "oy coures",
      price: 999,
    },
    {
      itemName: "web development coures",
      price: 4999,
    },
    {
      itemName: "data science coures",
      price: 12999,
    },
  ];


const sumPrice = shoppingCard.reduce((acc, currvalue)=>{
    console.log(`acc ${acc} and currvalue ${currvalue.price}`);
    return acc + currvalue.price
}, 0)

console.log(sumPrice);