let a = 10;

const b = 30;

var c = 40;

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
    let a = 10;
    const b = 30;
    var c = 40;
    // console.log("Inner :", a);
}
// console.log(a);  // block scope
// console.log(b); // block scope
// console.log(c);   // globe scope


function one(){
    const username = "sujan";
    function two(){
        const website = "Youtube";
        // console.log(username);
    }
    // console.log(website);
    two();
}

one()


// hoisting example in js: can be accesed before initialization

console.log(addOne(3));
function addOne(num){
    return num + 1;
}


// Cannot access 'addTwo' before initialization
console.log(addTwo(3));
const addTwo = function(num){
    return num *3;
}

