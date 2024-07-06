console.log("Hello I am conditional tutorial");

console.log(7 % 3);

console.log(5 ** 3);

let num1 = 4;
let num2 = 5;

let sum = num1 + num2;

let dif = num2 - num1;
console.log(dif);

console.log(sum);

console.log(3 === "3");
console.log(3 == "3");

let age = 56;

if (age != 18 || age === 34) {
  console.log("You can drive");
} else {
  console.log("You can't drive");
}

if (new Date().getHours() > 18) {
  console.log("Good Day");
} else {
  console.log("Not good Day");
}

let hours = new Date().getHours();
let greeting;

if (hours < 14) {
  greeting = "Good Day";
  console.log(greeting);
} else {
  greeting = "not good day";
  console.log(greeting);
}

let time = new Date().getHours();
console.log(time);
let greetings;

if (time < 10) {
  greetings = "Good morning";
  console.log(greetings);
} else if (time < 20) {
  greetings = " good day";
  console.log(greetings);
} else {
  greetings = "Good evening";
  console.log(greetings);
}

// Switch conditon
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log("Today is:",day);

console.log(new Date().getDay());