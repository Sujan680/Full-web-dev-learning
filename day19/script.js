let btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     document.querySelector(".box").innerHTML = "<b></b>You are changed</b> to Sujan Magar "
// })

btn.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b></b>You are changed</b> to Sujan Magar "
})


// document.addEventListener("keydown", (e) => {
//     document.querySelector("#para").innerHTML = e.key
//     console.log(e.key);
// })


// btn.addEventListener('click', () =>{
//     document.querySelector(".box-1").innerHTML = "hi"
// })

document.querySelector('.box-1').addEventListener('mouseleave', () =>{
    document.querySelector(".box-1").innerHTML = "hi"
})

