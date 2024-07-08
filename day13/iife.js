// Immediately invoked function expression

(function chai(){
    console.log(`Database connected successfully`);
}) ();


((name)=> {
    console.log(`DB connected to ${name}`);
})('Sujan')