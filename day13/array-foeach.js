// The forEach() method calls a function (a callback function) once for each array element.
const numbers = [1,2,3,4,5];

numbers.forEach(myEachFunction);

function myEachFunction(item, index){
    // console.log(item);
    console.log('a['+index+'] =' +item);
}

let sum = 0;

numbers.forEach((item) => {
    sum+=item;
});
console.log(sum);


// to count the numbers oof letters in an array using foreach methods
const letters = ['a', 'b','c', 'd', 'a', 'b', 'd', 'b'];

let count = {};

letters.forEach(item => {
    if(count[item]){
        count[item]++;
    }else{
        count[item] =1;
    }
})
console.log(count);


// Js Array some() methods
// The some() method checks if some array values pass a test.

const number = [45, 4, 9, 16, 25];
let someOver18 = number.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18);

// The every() method checks if all array values pass a test.
const number2 = [45, 4, 9, 16, 25];
let someOver16 = number2.every(myFunction);

function myFunction(value, index, array) {
  return value > 16;
}
console.log(someOver16);


const string = "ABCDEFG";
const myArr = Array.from(string);
console.log(myArr);

const keys = number2.keys();
for (const i of keys) {
    console.log(i);
}
const index = number2.entries();
for (const i of index) {
    console.log(i);
}