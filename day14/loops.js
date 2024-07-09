// for of loops

const arr = [1,2,3,4,5,6];

for (const num of arr) {
    // console.log(`My araay is ${num}`);
}

const greeting = "Hello World";

for (const i of greeting) {
//  console.log(`Each char is ${i}`);   
}

// Maps

const map = new Map();
map.set('IN', '"India')
map.set('USA', "United state of America")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// for in loop
const myObj = {
    js: "Js",
    cpp: "C++",
    rb: "Ruby"
}

for (const key in myObj) {
//    console.log(`${key} shortcut is for ${myObj[key]}`);
}


// foreach looop

const coding = ["Js", "ruby", "java", "python", "cpp"];

// coding.forEach((val) => console.log(val));

function myCod(item){
    // console.log(item);
}

coding.forEach(myCod);


const myLang = [
    {
        langName: "Js",
        price: 2000
    },
    {
        langName: "CSS",
        price: 1000
    },
    {
        langName: "HTML",
        price: 11000
    },
]

myLang.forEach( (item)=> {
    console.log(item.langName);
})