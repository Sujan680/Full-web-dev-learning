console.log("hi this is javascript variables");

var a = 6;
var b = 9;
var c = a+b;

console.log(a+b+c);

console.log(typeof a);

let num = 6;
{
    let num = 90;
    console.log(num)
}
console.log(num);

let sum = 234;
//  Varibles declared with Let have Block Scope
{
    let a1 = 90;
    console.log(a1);
}
// console.log(a1); // not defined : means blcok scope
// Variables declared with let must be declared before use
// let sum = 4; This is wrong with sum it can't be re-declared with same varibales

console.log(sum);

const PI = 3.14216;
console.log(PI)

// const PI; // not allowed const cant be redeclared



// Data Types: Primitive(7) and non primitives

let x="Sujan magar";
let y = 33;
let z = 4.55;
const p =true;
let q = undefined;

let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);


// Object:

let obj = {
    name: "Sujan",
    age: "34",
    id: 1234
}

console.log(obj);

obj.salary = "23434";
obj.country = "Nepal";

console.log(obj);