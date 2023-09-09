// Primitive DataType 7 Types
/* 
    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BigInt
*/

// Reference (Non Primitive) 3

/*
   1. Array
   2. Objects
   3. Functions
*/

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

const bigNumber = 23213213233454545n;

const heros = ["shaktiman", "shinchan", "ben10"];

let myObj = {
  name: "abc",
  age: 22,
};

const myFun = function () {
  console.log("Hello world");
};

console.log(typeof bigNumber); // bigint

console.log(typeof myFun); // function

// +++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "abcdotnet";

let anothername = myYoutubename;
anothername = "xyzdotnet";
console.log(myYoutubename); // abcdotnet
console.log(anothername); // xyzdotnet

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "abc@google.com";

console.log(userOne.email); // abc@google.com
console.log(userTwo.email); // abc@google.com
