// Synchronous means the code runs in a particular sequence of instrunctons given in the program , each instructions waits for the previous instructions to complete its execution.

// console.log("One");
// console.log("Two");
// console.log("Three");



// // Asynchronous concept
// // With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallel.

// console.log("Hi am async");
// console.log("Hi am async 1");
// setTimeout( ()=> {
//     console.log("Hello");
// }, 3000)

// console.log("FOur");
// console.log("FIve");

// // Callback : is a function passed as argument to another function

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b, sumCallback) {
//     sumCallback(a,b)
// }

// calculator(4,4,sum);

// function add(a,b){
//     return a+b;
// }

// function divide(a,b){
//     return a/b;
// }

// function calculator(a,b, operationCallback){
//     return operationCallback(a,b);
// }

// console.log(calculator(8,2, sum));
// console.log(calculator(8,2, divide));


// another e.g.

// (a,b) => a* b;
// setTimeout(() => {
//     console.log(" The value is", (1,2));
// },4000)

// const hello = () => console.log("hello world");
// setTimeout(hello, 2000)

// callback hell

function getData(dataId, getNextData){
    setTimeout( () => {
        console.log("Data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000)
}


// callback hell forming a pyramid structure
getData(1, () => {
    getData(2, () => {
        getData(3, () =>{
            getData(4);
        })
    })
})

