//? singleton
// Object.create

const mySym = Symbol("key1");

//? object literals
const JsUser = {
  name: "hattori",
  "full name": "ninja hattori",
  [mySym]: "myKey1",
  age: 20,
  location: "japan",
  email: "hattori@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser);

console.log(JsUser.name); //! hattori
console.log(JsUser["email"]); //! hattori@google.com

//? console.log(JsUser.full name); error
console.log(JsUser["full name"]); //! ninja hattori

console.log(typeof JsUser[mySym]); //! string
console.log(JsUser[mySym]); //! myKey1

JsUser.email = "hattori@nick.com";
console.log(JsUser["email"]); //! hattori@nick.com

/* //! Lock the object uing freeze

Object.freeze(JsUser);
JsUser.email = "hattori@hungama.com";
console.log(JsUser["email"]); //! hattori@nick.com

*/

JsUser.greeting = function () {
  console.log("Hello JS user");
};

console.log(JsUser.greeting());

JsUser.greeting2 = function () {
  console.log(`Hello JS user, ${this["full name"]}`);
};

console.log(JsUser.greeting2());
