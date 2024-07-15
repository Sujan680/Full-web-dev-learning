// const promiseOne = new Promise(function (resolve, reject) {
//   //Do async task
//   //Db calls, cryptography
//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task two is complete");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Promise two consumed");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve({ usename: "sujan", email: "sujan@123.com" });
//   }, 1000);
// });

// promise3.then((user) => {
//   console.log(user);
// });

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let err = true;
//     if (!err) {
//       resolve({ usename: "sujan", email: "sujan@123.com" });
//     } else {
//       reject("Error: Something wrong happened");
//     }
//   }, 2000);
// });

// promise4
//   .then((user) => {
//     console.log(user);
//     return user.usename;
//   })
//   .then((usename) => {
//     console.log(usename);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Promise is resolved or rejected");
//   });

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let err = true;
//     if (!err) {
//       resolve({ usename: "sujan", email: "sujan@123.com", password: "234" });
//     } else {
//       reject("Error: Something wrong happened");
//     }
//   }, 2000);
// });

// // async-await
// async function consumedPromise5() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumedPromise5();

// async function getAllData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const data = await response.json();
//     console.log(data);
// }
// getAllData();

fetch('https://jsonplaceholder.typicode.com/posts/1')
// it returns promise so
.then((response) => {
    return response.json()
}).then((response) => {
    console.log(response)
}).catch((err) => {
    console.log(err);
})
