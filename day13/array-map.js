// map() creates a new araay from calling function for every element
// map() doesnot execute a function for empty elements
// map() does not change the original array
// array.map(function(currentValue, index, arr), thisValue)

const numbers = [1,2,3,4,5];

const numberDouble = numbers.map(double);

function double(value, index, array){
    return value *2;
}
console.log(numberDouble);

function multiply(value, index, array){
    return value * index;
}
const numberMultiply  = numbers.map(multiply)

console.log(numberMultiply);

// array of objects 
const products = [
    {
        name: "Laptop",
        price: 5000,
        count:2
    },
    {
        name:"Desktop",
        price:4000,
        count:3
    }
]

const totalProducts = products.map(item => ({
    name: item.name,
    totalValue: item.price * item.count
}));
console.log(totalProducts);

// to convet array of string to array of number
const mystring = ['1', '2', '3', '4'];

const number = mystring.map(item => Number(item));

console.log(number);

