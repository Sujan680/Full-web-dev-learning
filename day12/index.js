// console.log("This is stack and heap memory");

// let myYoutubename = "Sujanmagar";

// let anothername = myYoutubename;

// anothername = "magarsujan";

// console.log(myYoutubename);
// console.log(anothername);


// let user  = {
//     name:"sujan",
//     city:"pkr",
//     code:3545
// }

// let user2 = user;
// user2.city = "kathmandu"

// console.log(user.city);
// console.log(user2.city);


// Strings in Js
console.log("Strings in JS");

let name = "sujan";
let address = "Pokhara"

console.log(`My name is ${name} and I am from ${address}`); //string interpolation

const gameName = new String("sujanmagar");

console.log(gameName.length);

console.log(gameName.charAt(2));

console.log(gameName.indexOf("a"));

console.log(gameName.toUpperCase());

const letter = "This is the first class of Js"

console.log(letter.substring(0,6));
console.log(letter.slice(0,20));
console.log(letter.search("the"));
console.log(letter.includes("the"));

console.log(letter.split(''))
console.log(letter.split(' '))


const newString = "     sujan    ";

console.log(newString);
console.log(newString.trim());

console.log(letter.replace('the','was'));

console.log(letter.lastIndexOf('class',20));

let x= "john";
let y =new String("john");
console.log(x===y); //string and object can't be compared

let x1 = new String("John");
let y1 = new String("John"); //Comparing two JavaScript objects always returns false.
console.log(x1===y1); //Js object can't be compared


let text = "hi, This, is, sujan";
console.log(text.charCodeAt(3));

console.log(text.slice(0,9));

let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(-7);
console.log(part);

let txt1 = "Hello";
let txt2 = "world";

let txt = txt1.concat(txt2)
console.log(txt);

let str = "5";
console.log(str.padStart(4,"x")) // The padEnd() method pads a string at the start ,It pads the string with another string (multiple times) until it reaches a given length.

console.log(str.padEnd(4,"x")); //The padEnd() method pads a string at the end

console.log(letter.replaceAll('is', 'the'));