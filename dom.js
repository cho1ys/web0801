// let div = document.querySelector("div")
// function changeContent(){
//     div.outerHTML = "<h1>DOM API<p>선수 조건 : 있음</p></h1>"
// }
// const ele = document.getElementsByTagName('li');
// [...ele].forEach(ele => {ele.style.color = 'red'})

// const elems = document.getElementsByClassName('fruit');
// [...elems].forEach((ele)=>{ele.style.color = 'blue'});

// const apple = document.getElementsByClassName('apple');
// [...apple].forEach((ele)=>{ele.style.color = 'red'});

// const box = document.querySelector('.box');
// box.addEventListener('click',()=>{
//     console.log('clicked!')
//     box.classList.toggle('active')
// })

// const box = document.querySelectorAll('.box')
// box.forEach((box, index)=>{
//     box.classList.add(`order-${index+1}`)
// })

// const mdiv = document.getElementById('my_div')
// const clear = document.getElementById('clear')
// const result = document.getElementById('result')

// mdiv.addEventListener('click',()=>{
//     result.innerHTML += '<div>click</div>'
// })

// mdiv.addEventListener('mousedown',()=>{
//     result.innerHTML += '<div>mousedown</div>'
// })

// mdiv.addEventListener('mouseup',()=>{
//     result.innerHTML += '<div>mouseup</div>'
// })
// clear.addEventListener('click',()=>{
//     result.innerHTML = ""
// })
// function sayHi(name){
//     console.log(`hi ${name}`)
// }
// const button = document.querySelector('button')

// const handleClick = () => console.log('button clicked')
// button.addEventListener('click',()=>{
//     console.log('button click 1')
// })

// button.addEventListener('click',()=>{
//     console.log('button click 2')
// })

// const msg = document.querySelector('.message')

// function showCoords(e){
//     msg.textContent = `clientX: ${e.clientX}, clientY = ${e.clientY}`
// }

// document.onclick = showCoords

// const fruits = document.getElementById('fruits')
// function activate({target}){
//     if(!target.matches('#fruits > li')){
//         return
//     }
//     [...fruits.children].forEach(fruit =>{
//         fruit.classList.toggle('active',fruit === target)
//     })
// }
// document.getElementById('apple').onclick = activate
// document.getElementById('banana').onclick = activate
// document.getElementById('cherry').onclick = activate
// fruits.onclick = activate

// const buttons = document.querySelectorAll('.check')
// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         button.classList.toggle('active')
//     })
// })

// const box = document.querySelector(".box")
// const initial = {x:0,y:0}
// const offset = {x:0,y:0}
// const move = e => {
//     }
// document.addEventListener('click',(e)=>{
//     // const newX = e.clientX
//     // const newY = e.clientY
//     const boxWidth = box.offsetWidth 
//     const boxHeight = box.offsetHeight

//     // initial.x = e.clientX-offset.x
//     // initial.y = e.clientY-offset.y
//     // offset.x = e.clientX - initial.x;
//     // offset.y = e.clientY - initial.y;
//     offset.x = e.clientX - boxWidth/2
//     offset.y = e.clientY - boxHeight/2
//     box.style.transform = `translate3d(${offset.x}px, ${offset.y}px,0)`

// })
// box.addEventListener('mousedown',(e)=>{
//     initial.x = e.clientX-offset.x
//     initial.y = e.clientY-offset.y

//     document.addEventListener('mousemove',move)
// })
// document.addEventListener('mouseup',()=>{
//     document.removeEventListener('mousemove',move)
// })