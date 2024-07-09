console.log("Hello wolrd");

// selecting childNodes in JS

// document.body
// <body cz-shortcut-listen=​"true">​…​</body>​<div class=​"container">​…​</div>​<script src=​"script.js">​</script>​<!-- Code injected by live-server --><script>​…​</script>​</body>​
// document.body.childNodes
// NodeList(9) [text, div.container, text, script, text, comment, text, script, text]
// document.body.childNodes[0]
// #text
// document.body.childNodes[2]
// #text
// document.body.childNodes[1]
// <div class=​"container">​…​</div>
// ​<div class=​"box">​1​</div>
// ​<div class=​"box">​2​</div>
// ​<div class=​"box">​3​</div>
// ​<div class=​"box">​4​</div>
// ​<div class=​"box">​5​</div>
// ​</div>​
// document.body.childNodes[1].childNodes[1]
// <div class=​"box">​1​</div>​
// document.body.childNodes[1].childNodes[2]
// #text
// document.body.childNodes[1].childNodes[3]
// <div class=​"box">​2​</div>​
// let cont = document.body.childNodes[1]
// undefined
// cont
// <div class=​"container">​…​</div>​
// cont.firstChild
// #text
// cont.lastChild
// #text
// cont.firstElementChild
// <div class=​"box">​1​</div>​
// cont.lastElementChild
// <div class=​"box">​5​</div>​
// cont.lastElementChild.style.backgroundColor = "green"
// 'green'
// cont.firstElementChild.backgroundColor = "blue"
// 'blue'
// cont.firstElementChild.style.backgroundColor = "blue"
// 'blue'

// parent node
// cont.firstElementChild.parentElement
// <div class=​"container">​…​</div>​
// cont.firstElementChild.parentElement.style.background = 'yellow'

document.body.firstElementChild.childNodes;

document.body.firstElementChild.childNodes;

document.body.firstElementChild.children;

// siblings prev / next 

// document.body.firstElementChild.children[0]

// document.body.firstElementChild.children[1]
// <div class=​"box">​2​</div>​

// document.body.firstElementChild.children[1]
// <div class=​"box">​2​</div>​

// document.body.firstElementChild.children[2]
// <div class=​"box">​3​</div>​

// document.body.firstElementChild.children[3]
// <div class=​"box">​4​</div>​

// document.body.firstElementChild.children[4]
// <div class=​"box" style=​"background-color:​ green;​">​5​</div>​

// document.body.firstElementChild.children[4].previousElementSibling
// <div class=​"box">​4​</div>​

// document.body.firstElementChild.children[2].nextElementSibling
// <div class=​"box">​4​</div>​
