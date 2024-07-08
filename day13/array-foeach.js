// The forEach() method calls a function (a callback function) once for each array element.
const numbers = [1,2,3,4,5];

numbers.forEach(myEachFunction);

function myEachFunction(item, index){
    // console.log(item);
    console.log('a['+index+'] =' +item);
}

let sum = 0;

numbers.forEach((item) => {
    sum+=item;
});
console.log(sum);


// to count the numbers oof letters in an array using foreach methods
const letters = ['a', 'b','c', 'd', 'a', 'b', 'd', 'b'];

let count = {};

letters.forEach(item => {
    if(count[item]){
        count[item]++;
    }else{
        count[item] =1;
    }
})
console.log(count);