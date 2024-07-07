console.log("Date and Time in js");

let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString()); // Sun Jul 07 2024
console.log(myDate.toISOString()); // 2024-07-07T09:41:45.677Z
console.log(myDate.toJSON()); // 2024-07-07T09:41:45.677Z
console.log(myDate.toLocaleDateString()); // 7/7/2024

console.log(myDate.toLocaleString()); // 7/7/2024, 9:42:55 AM

console.log(myDate.toTimeString()); //09:44:24 GMT+0000 (Coordinated Universal Time)

console.log(myDate.getTimezoneOffset()); // 0

console.log(myDate.getHours());

let myNewdate = new Date("2024-1-23");
console.log(myNewdate.toLocaleString());


let myTimestamp = Date.now();
console.log(myTimestamp);

let newDate =  new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);