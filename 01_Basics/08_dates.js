let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString()); // Sat Sep 09 2023
console.log(myDate.toLocaleString()); // 9/9/2023, 6:13:09 pm
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 8, 9);
console.log(myCreatedDate.toDateString()); // Sat Sep 09 2023

myCreatedDate = new Date(2023, 8, 9, 5, 3);
console.log(myCreatedDate.toLocaleString()); // 9/9/2023, 5:03:00 am

myCreatedDate = new Date("2023-09-09");
console.log(myCreatedDate.toLocaleString()); // 9/9/2023, 5:30:00 am

myCreatedDate = new Date("09-09-2023");
console.log(myCreatedDate.toLocaleString()); // 9/9/2023, 12:00:00 am

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
); // Saturday
