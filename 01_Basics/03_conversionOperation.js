let score = "33abc";
let finalScore = null;

console.log(typeof score); // string

let valueInNumber = Number(score);
let scoreInNumber = Number(finalScore);

console.log(typeof valueInNumber, valueInNumber); // number NaN
console.log(typeof scoreInNumber, scoreInNumber); // number 0

// '33' => 33
// '33abc' => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1;
let booleanIsLoogedIn = Boolean(isLoggedIn);
console.log(booleanIsLoogedIn); // true

// 1 => true; 0 => false
// "" => false
// "abc" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber); // string

// **************** Operations ****************

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 2);

let str1 = "hello";
let str2 = " mom";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(2 + 2 + "1"); // 41

console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101
