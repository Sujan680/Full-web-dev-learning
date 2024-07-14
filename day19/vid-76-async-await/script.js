// async function getData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(45454);
//     }, 3000);
//   });
// }

async function getData() {
  //    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     //   console.log(x);
  //     let data = await x.json();
  //     console.log(data);
  //     return 34

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();
  console.log(data);
}

async function main() {
  console.log("Loading Module");

  console.log("Do something else");

  console.log("Load data");

  let data = await getData();

  console.log(data);

  console.log("Process data");

  console.log("Task 2");
}

main();

// data.then((a)=> {
//     console.log(a);
//     console.log("Process data");

// console.log("Task 2");
// })
