// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.


const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(isEven);

function isEven(value){
    return value % 2===0;
}
console.log(even);


const users = [
    {
        name: "florin",
        age: 24,
    },
    {
        name: "tham",
        age :10,
    },
    {
        name: "sujan",
        age: 25,
    },
    {
        name:"dipesh",
        age:20,
    }
]

const isAgeGreater = users.filter(item => item.age > 16);
console.log(isAgeGreater);


const nubmers1 = [1,2,3,4,5,3,,1,2,4,8,0,9];

const num = nubmers1.filter((value, index, array) => {
    return array.indexOf(value) === index;
});

console.log(num);