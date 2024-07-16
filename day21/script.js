console.log("Error handling using try catch in js");
let a = prompt("Enter a first numbr");
let b = prompt("Enter a second numbr");
if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("Soorry not acceptable")
}
let sum = parseInt(a) + parseInt(b);

try {
    console.log("The sum is", sum*x);
} catch (error) {
    console.log("Error occured");
}

