console.log("Object De-structure");

const course={
    coursename:"Js",
    teacher:"sujan",
    price:234
}

const {coursename} = course; // object de-structure
console.log(coursename);

// JSON API intro

// {
//     "name": "sujan",
//     "age" : 23,
//     "country": "nepal"

// }

// {
//     "first_name": "John",
//     "last_name": "Smith",
//     "is_alive": true,
//     "age": 27,
//     "address": {
//       "street_address": "21 2nd Street",
//       "city": "New York",
//       "state": "NY",
//       "postal_code": "10021-3100"
//     },
//     "phone_numbers": [
//       {
//         "type": "home",
//         "number": "212 555-1234"
//       },
//       {
//         "type": "office",
//         "number": "646 555-4567"
//       }
//     ],
//     "children": [
//       "Catherine",
//       "Thomas",
//       "Trevor"
//     ],
//     "spouse": null
//   }


// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  // Destructuring does not change the original object.
  let {firstName, lastName} = person;

  console.log(person);
  console.log(firstName);

  // Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;

console.log(fruit1);

const numbers  = [1,2,3,4,5,6,8];

const [a,b, ...rest] = numbers;
console.log(rest);
