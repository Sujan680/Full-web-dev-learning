// if condition

// const isLoggedIn = true;

// if(isLoggedIn){
//     console.log("You are logged In");
// }

// if(2 === "2"){
//     console.log("Executed");
// }

// const temp = 20;
// if(temp < 40){
//     console.log("Tempeerature is less than 40");
// }else{
//     console.log("Temp is greater than 40");
// }

// const score = 200;
// if(score > 200){
//     const power = "fly";
//     console.log(`user power:${power}`);
// }else if(score === 200){
//     console.log('You have accesed in');
// }else{
//     console.log("You are not member of class");
// }

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log(("You are allowed to acces"));
}

//The switch statement is used to perform different actions based on different conditions.

// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }
let day = 5;
switch (day) {
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
//   console.log(day);


const myString = [];

// if(myString){
//     console.log("You are selected");
// }else{
//     console.log("You arae not selected");
// }


// falsy value:  false, 0 ,-0, BigInt On, "", undefined, NaN
// truthy value:  "0" , 'false', " ", [], {}, function(){}


const myArray = [];
if(myArray.length === 0){
    // console.log("Array is empty");
}

const emptyObject = {};
if(Object.keys(emptyObject).length === 0){
    // console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 8 ?? 10; 
// val1 = null ?? 4;
// val1 = undefined ?? 12;
val1 = null ?? 10 ?? 20
// console.log(val1);


// Terniary operator

// condition ? true : false;

// const icecreamPrice = 100;
// icecreamPrice <= 40 ? console.log("Less than 40"): console.log("Greater than 40");


// For Loop iteration

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }


for(let i=0; i<=10; i++){
    // console.log(`Outer loop value:${i}`);
    for( let j=0; j<=10; j++){
        // console.log(`Inner loop value ${j} and outer looop ${i}`);
        // console.log(`${i}*${j} = `+i*j);
    }
}


const myArray1 = ["SUJAN", "MAGAR", "HJUR"]
for (let index = 0; index < myArray1.length; index++) {
    const element = myArray1[index];
    console.log(element);
}

// break keyword
for (let index = 0; index < 10; index++) {
    // const element = index;
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(index);
}

// continue
for (let index = 0; index < 10; index++) {
    // const element = index;
    if(index == 5){
        // console.log(`Detected 5`);
        continue
    }
    console.log(index);
}