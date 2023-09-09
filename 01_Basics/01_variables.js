const accountId = 123;
let accountEmail = "gb@gmail.com";
var accountPassword = "12345";
accountCity = "Hyderabad";
let accountState;

// TypeError: Assignment to constant variable.
// accountId = 450; not allowed

accountEmail = "gb222@gmail.com";
accountPassword = "3456";
accountCity = "Bengaluru";

console.log(accountId);

/*
  Prefer not to use var
  Because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
  https://www.javascripttutorial.net/es6/difference-between-var-and-let/
*/
