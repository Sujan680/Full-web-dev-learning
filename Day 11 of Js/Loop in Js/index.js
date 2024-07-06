// For loop
// for (expression 1; expression 2; expression 3) {
//    //code block to be executed
// }

let a =1;
for (let i = 0; i < 11; i++) {
   console.log(`The number is`, a+i);
}


let obj = {
    name:"hujna",
    country:"nepal",
}


// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];     
//     }
// }

for (const key in obj) {
  
     console.log(key );
    
}

// for (const iterator of object) {
    
// }

for (const iterator of "hujna") {
    console.log(iterator);
}


let b = 10;
while (b < 20) {
    console.log(b);
    b++;
}


let num = 1;
do {
    console.log(num);
    num++;

} while (num <10);


const person = {
    fname:"John",
    lname:"Doe",
    age:23
}
for (const key in person) {
        const element = person[key];
        console.log(element);
}


const numbers = [1,2,3,4,5,6]
for (const key in numbers) {
  
        const element = numbers[key];
        console.log(element);
}


const cars = ["BMW", "Volvo", "Mini"];

for (const i of "BMW") {
    console.log(i);
}

const string= "SUJAN MAGAR"
for (const i of string) {
    console.log(i);
}