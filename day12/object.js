console.log(`This is an object in js`);

const mySymbol = Symbol("unique")

const JsUser = {
    name: "sujan",
    age: 12,
    [mySymbol]:"unique1", // symbol adding in object as key
    country:"ktm",
    address:"pkr",
    isLoggedIn: true,
    lastLogined: ["monday", "sunday"]
}
console.log(JsUser.name);  // ways of accessing object
console.log(JsUser["name"]); //  '' '' '' ''
console.log(typeof JsUser[mySymbol]); // symbol acces in object
console.log(JsUser);

JsUser.address="sujan11111111111";
console.log(JsUser);
// console.log(newadd);
// Object.freeze(JsUser);  // it will make freeze that is unchangable

// console.log(JsUser.address="sujan");

JsUser.greetingOne = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hwllo Js user, ${this.name}`);
}
console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());