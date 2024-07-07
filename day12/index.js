console.log("This is stack and heap memory");

let myYoutubename = "Sujanmagar";

let anothername = myYoutubename;

anothername = "magarsujan";

console.log(myYoutubename);
console.log(anothername);


let user  = {
    name:"sujan",
    city:"pkr",
    code:3545
}

let user2 = user;
user2.city = "kathmandu"

console.log(user.city);
console.log(user2.city);