const user = {
    name: "Sujan",
    price: 500,
    welcomeMessage: function(){
        console.log(`${this.name} , welcome to my home`);
        // console.log(this);
    }
}
// user.welcomeMessage();
user.name = "Mili";
// user.welcomeMessage();

console.log(this);


// function chai1(){
//     let username = "Magar";
//     console.log(this);
// }
// chai1()

// const chai = () => {
//     let username = "sujan";
//     console.log(this);
// }



const addtwo = (n1, n2) => {
    return n1 + n2
}

console.log(addtwo(3,2));


// const diftwo = (num1, num2) => num1 -num2;
const diftwo = (num1, num2) => (num1 -num2);
console.log(diftwo(9,4));

// (a,b) => a + b;
// console.log((6,7));