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

// function getData(dataId, getNextData){
//     setTimeout( () => {
//         console.log("Data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000)
// }

// callback hell forming a pyramid structure
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () =>{
//             getData(4);
//         })
//     })
// })

// *******************Promises*******************
// let promise = new Promise( (resolve, reject) => {  })

// Js promises has three state; Pending, Fulfilled, and Rejected

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

// Note: How to use Promise???
// promise.then(): Promise.then() takes two arguments, a callback for success and another for failure.
// promise.catch(): it is for displaying error messges

// let promise = new Promise( (resolve,reject) => {
//     console.log("I am a Promise");
//     resolve("Hi");
// })

function getData(dataId, getNextData){
     return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Data", dataId);
            resolve("Success");
            if(getNextData){
                getNextData();
            }
        }, 2000)
    })
}

// ***********this is promise chaining in Js***********
// getData(1).then((res)=> {
//     console.log(res);
//     getData(2).then((res)=> {
//         console.log(res);
//     })
// })

// *********we can also do this for the above code******
// getData(1)
// .then((res) => {
//     return getData(2)
// }).then((res) => {
//     console.log(res);
// })

// above olp is:
// Data 1
// script.js:99 Data 2
// script.js:121 Success


// async-await*********for the above code
async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}



// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         // resolve("Success");
//         reject("Error")
//     })
// }

// //**************** */ Using promise**************
// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise Fulfilled");
// })

// promise.catch(() => {
//     console.log("Error occured");
// })

//*********** */ Promise chaining**************

// function asyncFunc(){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             console.log("[1,2,3,4,5]");
//             resolve("Success")
//         }, 3000)
//     })
// }

// console.log("Fetching  some data....");
// let p1 = asyncFunc();
// p1.then((res)=> {
//     console.log(res);
// })

// how chainig work promise in js
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data one");
//       resolve("Success");
//     }, 3000);
//   });
// }

// console.log("Fetching  some data one....");
// let p1 = asyncFunc1();
// p1.then((res)=> {
//     console.log(res);
// })

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 2");
//       resolve("Success");
//     }, 3000);
//   });
// }

// console.log("Fetching  some data....");
// let p2 = asyncFunc2();
// p1.then((res)=> {
//     console.log(res);
// })

// in the above both are coming parallely but we dont want in that style
// so in this time we have to use promise chaining...

// console.log("Fetching  some data one....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
//   console.log("Fetching data 2");
//   let p2 = asyncFunc2();
//   p1.then((res) => {
//     console.log(res);
//   });
// });



// Async- Await

// async function always return a promise
// await pauses the execution of its surrounding async function until the promise is settled...

// async function hello(){
//     console.log("hello");
// }

function api(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200)
        }, 3000)
    })
}

async function getWeatherData(){
    await api();
}

// this is IIFE
// ( async function (){
//     await api();
//     await api();
// } () )




// IIFE:Immediately Invoked function Expression

(function () {
    //code
} ())