const name = "vinay";
const repoCount = 5;

// console.log(`${name} ${repoCount}`)

const Channel = new String("Chai-aur-code");
const Channel2 = new String("        Chai-aur-js        ");

console.log(`lengt of channel string ${Channel.length}`);
console.log(`indix of 5 character is ${Channel.at(5)}`);
console.log(`indix of 8 character is ${Channel.charAt(8)}`);
console.log(`the charcode on index 8 is ${Channel.charCodeAt(8)}`);
console.log(
  `the concat of channel and channel2 ${Channel.concat(" & ", Channel2)}`
);
console.log(`the channel end with code ${Channel.endsWith("code")}`);
console.log(`aur word include in channel ${Channel.includes("aur")}`);
console.log(`d char index of ${Channel.indexOf("d")}`);
console.log(`index of the last code is ${Channel.lastIndexOf("code")}`);
console.log(`to upper case ${Channel.toUpperCase("code")}`);
console.log(`to upper case ${Channel.toLowerCase("code")}`);
console.log(`code replace with ${Channel.replace("programming")}`);
console.log(`slice method ${Channel.slice(0, 4)}`);
console.log(`substring method ${Channel.substring(0, 4)}`);
console.log(`trim method ${Channel2.trim()}`);
console.log(`trimEnd method ${Channel2.trimEnd()}`);
console.log(`trimStart method ${Channel2.trimStart()}`);
console.log(`trimRight method ${Channel2.trimRight()}`);
console.log(`trimLeft method ${Channel2.trimLeft()}`);
console.log(`split method ${Channel.split("-")}`);
