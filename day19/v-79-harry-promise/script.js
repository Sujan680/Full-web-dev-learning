// console.log("I am a hacker");
// console.log("I am a dancer");

// setTimeout(()=> {
//     console.log("I am a BIG HKER");
// },2000)

// setTimeout(()=> {
//     console.log("I am a BIG Banger");
// },0)

// console.log("I am a coder");
// console.log("I am a coder in nepal");

console.log("Hi i'm promise");

let prom1  = new Promise((resolve, reject) => {
    let a = Math.floor(Math.random()*10 + 1);
    console.log(a);
    if(a < 10){
        reject("No random num is not supported")
    }
   else{
    setTimeout(()=>{
        console.log("Yes i am done");
        resolve("Sujan")
    }, 3000)
   }
})

let prom2  = new Promise((resolve, reject) => {
    let a = Math.floor(Math.random()*10 + 1);
    console.log(a);
    if(a < 10){
        reject("No random num is not supported")
    }
   else{
    setTimeout(()=>{
        console.log("Yes i am done 2");
        resolve("Sujan magar")
    }, 1000)
   }
})

let p3 = Promise.reject([prom1, prom2])  // this is caled when both promise is resolved  .race, .allSettled, any, resolve
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

// prom1.then((a)=>{
//     console.log(a);
// }).catch((err)=>{     // .catch is used to dsplay error when occurs
//     console.log(err);
// })