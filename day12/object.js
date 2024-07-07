// console.log(`This is an object in js`);

// const mySymbol = Symbol("unique")

// const JsUser = {
//     name: "sujan",
//     age: 12,
//     [mySymbol]:"unique1", // symbol adding in object as key
//     country:"ktm",
//     address:"pkr",
//     isLoggedIn: true,
//     lastLogined: ["monday", "sunday"]
// }
// console.log(JsUser.name);  // ways of accessing object
// console.log(JsUser["name"]); //  '' '' '' ''
// console.log(typeof JsUser[mySymbol]); // symbol acces in object
// console.log(JsUser);

// JsUser.address="sujan11111111111";
// console.log(JsUser);
// console.log(newadd);
// Object.freeze(JsUser);  // it will make freeze that is unchangable

// console.log(JsUser.address="sujan");

// JsUser.greetingOne = function(){
//     console.log("Hello Js user");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hwllo Js user, ${this.name}`);
// }
// console.log(JsUser.greetingOne());
// console.log(JsUser.greetingTwo());


// singleton object in js

// const tinerUser = new Object(); 
const tinderUser = {} //non singleton object in js

tinderUser.id = "12sdd";
tinderUser.name = "sujan magar"
tinderUser.address="pokhara"

// console.log(tinderUser);

const bankUser = {
    email:"bankusr@bank.com",
    fullname:{
        usrname:{
        fname:"sujan",
        lname:"magar",
        }
    },
    state:"ktm",
    province:"gandaki",
}

// console.log(bankUser.fullname.usrname.fname);


const obj1 = {
    1:"a",
    2:"b",
    3:"c"
}

const obj2 = {4:"s",5:"t"}

const objeone = {...obj1, ...obj2}
console.log(objeone);

const obj3 = Object.assign({},obj1, obj2); //assign(target,source)
console.log(obj3);


console.log(Object.keys(bankUser));
console.log(Object.values(bankUser));

console.log(bankUser.hasOwnProperty('email'));

// console.log(bankUser.toLocaleString());


let num = new Number(23)
console.log(typeof num);