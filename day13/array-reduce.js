// reduce() method executes a reducer function for array elements;
// reduce() method returns a single value, the function's accumulated result
// reduce() method does not change a original array

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const numbers = [10,0,30,2,3,4,5];

const total = numbers.reduce(sum,0);

function sum(accumulator, value, index, arr){
    return accumulator +  value;
}

// console.log(total);

// const maxValue = numbers.reduce(callback, -Infinity);

// function callback(accumulator, value){
//     if(accumulator > value){
//         return accumulator;
//     }else{
//         return value;
//     }
// }
// console.log(maxValue);

// const minValue = numbers.reduce(callback, Infinity);

// function callback(accumulator, value){
//     if(accumulator < value){
//         return accumulator;
//     }else{
//         return value;
//     }
// }
// console.log(minValue);

const store = [
    {
        product: "Laptop",
        price: 1000,
        count: 2
    },
    {
        product: "Laptop",
        price: 4000,
        count: 4
    },
    {
        product: "Laptop",
        price: 5000,
        count: 3
    }
    
]

const totalProdcuts  = store.reduce((acc,item) => acc + (item.price * item.count),0);

console.log(totalProdcuts);