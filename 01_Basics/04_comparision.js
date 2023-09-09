console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/*
  Comparisions convert null to a number, treating it as 0
*/

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false

// === STRICT CHECK //

console.log("2" === 2); // false
console.log("2" == 2); // true
