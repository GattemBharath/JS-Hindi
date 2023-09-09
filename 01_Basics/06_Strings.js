const name = "shinchan";
const repoCount = 50;

// console.log(name + " " + repoCount);

// String Interpolation
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hattori-ninja");

console.log(gameName[0]); // h
console.log(gameName.__proto__); // {}

console.log(gameName.length); // 13
console.log(gameName.toUpperCase()); // HATTORI-NINJA
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf("t")); // 2

const newString = gameName.substring(0, 4);
console.log(newString); // hatt

const anotherString = gameName.slice(3, 7);
console.log(anotherString); // tori

const newStringOne = " ninja  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hungama.com/ninja%20hattori";

console.log(url.replace("%20", "-"));

console.log(url.includes("ninja"));

console.log(gameName.split("-"));
// ["hattori", "ninja"];
