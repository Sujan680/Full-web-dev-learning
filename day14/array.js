const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.length);

fruits.push("Namita")

console.log(fruits);

console.log(fruits.pop());

fruits.unshift("Nimmi", "Sabin", "Babin")
console.log(fruits);

const myNewArr = fruits.slice(1,4);
console.log(myNewArr);

console.log(fruits.slice(2,3));

console.log(fruits);

const newArr = fruits.map( (item) => item + "Sujan")
console.log(newArr);

const newArray = fruits.filter( (item) => item === "Sujan")
console.log(newArray);