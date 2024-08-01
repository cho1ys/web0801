// const x = document.forms[0].id
// console.log(x)
// document.getElementById('show').innerHTML = x

// function getInput(){
//     const x = document.forms["form1"]
//     let text = ""
//     for ( let i = 0; i< x.length;i++){
//         text += x.elements[i].value + '<br>'
//     }   
//     document.getElementById('show').innerHTML = text
// }

// function myFunction(){
//     let id = document.getElementById("id").value
//     let pw = document.getElementById("pw").value

  
//     if(!pw){
//         document.getElementById('show').innerHTML = '비밀번호를 입력해주세요'
//     }else if(pw.length>10){
//         document.getElementById('show').innerHTML = '비밀번호는 10자리 이하로 입력해야 합니다.'
//     }else{
//         document.getElementById('show').innerHTML = '로그인 중'
//     }
//     ['id', 'pw'].forEach(field => document.getElementById(field).value="")
//     setTimeout(()=>{
//         document.getElementById('show').innerHTML=""
//     },2000)
// }

// const x = document.getElementById('name')
// x.onfocus = ()=>{changeBgcolorFo()}
// x.onblur = () =>{changeBgcolorBl()}
// function changeBgcolorFo(){
//     x.style.backgroundColor = 'pink'
// }
// function changeBgcolorBl(){
//     x.style.backgroundColor = 'gray'
// }
// const keyInput = document.getElementById('keyInput')
// let text = ""
// keyInput.addEventListener('keydown',showKey)
// function showKey(e){
//     text += e.key
//     document.getElementById('show').innerHTML = text
// }

// keyInput.addEventListener('keyup',changeUpper)
// function changeUpper(){
//     keyInput.value = keyInput.value.toUpperCase()
// }

// const select = document.getElementById('select')
// select.addEventListener('change',(e)=>{
//     document.getElementById('show').innerHTML = '내가 좋아하는 과일은 ' +e.target.value + "입니다"
// })