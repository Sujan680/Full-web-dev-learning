// filter methods....

const myNumbs = [1,2,3,4,5,6,7,8,9,10]

const newnums = myNumbs.filter( (num) => num > 4);
// console.log(newnums);


// const newnums =  [];

// myNumbs.forEach( (num) => {
//     if(num > 4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);


const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960,
        genres: "Fiction",
        isAvailable: true
    },
    {
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949,
        genres: "Classics",
        isAvailable: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925,
        genres: "Fiction",
        isAvailable: true
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publishedYear: 1951,
        genres: "Non-Fiction",
        isAvailable: true
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        publishedYear: 1851,
        genres: "Adventure",
        isAvailable: false
    }
];

// const userBooks = books.filter( (bk) =>  bk.publishedYear > 1900)
const userBooks = books.filter( (bk) =>  bk.isAvailable === true && bk.publishedYear > 1950 )

// console.log(userBooks);


// Map function in js
const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map( (item)=> item + 10)

// chaining in Higher order functions
const newNums = myNumbers
.map( (num) => num * 10)
.map( (num) => num + 1)
.filter((num) => num >= 40)
console.log(newNums);


// Reduce in js

const Nums = [1,2,3,4,5];

// const myTotal = Nums.reduce( function (acc, currval) {
//     console.log(acc);
//     return acc + currval;
// }, 0)

const myTotal = Nums.reduce( (acc, currval) => acc + currval, 0)


console.log(myTotal);


const myCart = [
    {
        itemName: "Js course",
        price: 3637,
    },
    {
        itemName: "Java course",
        price: 10637,
    },
    {
        itemName: "Python course",
        price: 30637,
    }
]

const Total = myCart.reduce( (acc,item) => (acc + item.price), 0);

console.log(Total);