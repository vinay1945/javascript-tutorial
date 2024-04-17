// for of

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }


// const greeting = "vinay"
// for (const greet of greeting) {
//     console.log(greet);
// }


const map = new Map()
map.set('in', "india")
map.set('usa', "us amarica")
map.set('fr', "france")

console.log(map);

for (const [key, value] of map) {
    console.log(key, value);
}


// const myobj = {
//     "game1" : 'nfs',
//     'game2': 'spiderman'
// }
// for (const [key, value] of myobj) {
//     console.log(key, value);
// }