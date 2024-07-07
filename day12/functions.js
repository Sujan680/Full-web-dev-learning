// With functions you can reuse code

// You can write code that can be used many times.

// You can use the same code with different arguments, to produce different results.

function sayMyName() {
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
}

sayMyName();

function addTwoNumber(num1,num2){ // parameters
    console.log(num1+num2);
}
let sum = addTwoNumber(3,4); //arguments
// console.log("Results:", sum); // can't be printed casue console.log is used

function myFunction(p1, p2) {
    return p1 * p2;
  }
  let product = myFunction(3,5);
//   console.log("Product is", product);


  function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter your usrname");
        return
    }
    return `${username} has just logged in`
  }
//   console.log(loginUserMessage("SUjan"));
console.log(loginUserMessage());

