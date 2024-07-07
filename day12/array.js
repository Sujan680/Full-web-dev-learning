const myArray = ['apple', 'banana', 'mango', 'orange'];

// console.log(myArray);

// myArray.push('Sujan'); //inserting value at last index
// myArray.pop(); // delete from last index
// myArray.shift(); // delete the value from first pos
// myArray.unshift("Magar"); // insert value at first position


// console.log(myArray.toString()); // string 

// const cars = new Array('saab', 'Volvo', 'BMW')

// console.log(`The value at index 2 is ${cars[2]}`);

// console.log(typeof myArray);
// console.log(typeof cars);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length);
// console.log(fruits.sort());
//  let fruit = fruits[fruits.length-1];
//  console.log(fruit);


//  for (const i of fruits) {
//     console.log(i);
//  }

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
//  console.log(fruits.splice(1,2,'Sujan','Magar'));

// console.log(fruits.splice(2,2, "LEmon", "Kiwi")); // at 2 index , delete 2 value from array, and add two items lemon and kiewi
// console.log(fruits.splice(1,0, "LEmon", "Kiwi")); // 1 defines position where new item should be added and 0 defines how many items to be removed and rest parameters (Lemon, Kiwi) defines the elements to be added

// console.log(fruits.slice(1,3));


// revision array

// const myArr = [1,2,3,4,5,6,7];
// console.log(myArr[4]);

// const myHeros = ["sujan", "magar"];


// const myArr1 = new Array(1,3,5,7)

// console.log(myArr1[2]);

// In JavaScript, there are two ways to copy objects: shallow copy and deep copy. Shallow copying creates a new object with references to the same memory locations as the original object, while deep copying creates a new object with new memory locations for all of its properties and nested objects or arrays.

//(Primitives value) A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.

//(Non primitive) A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.

let object = {
    name:"sujan",
    age:9,
    city:"ktm"
}
let obj1 =object;
obj1.address="pokhara";
console.log(object);
console.log(obj1);

let name = "This is the best gift";
let nam2 = name;
// nam2= "sujan";

console.log(nam2);
console.log(name);
console.log(nam2);