let userId = document.querySelector('#id')
let pw1 = document.querySelector('#pw1')
let pw2= document.querySelector('#pw2')

userId.onchange = checkID
pw1.onchange = checkPW
pw2.onchange = comparePW
function checkID(){
    if(userId.value.length <4 || userId.value.length >15){
        alert('4~15사이의 영문과 숫자로 아이디를 입력하세요')
        userId.select()
    }
}
function checkPW(){
    if(pw1.value.length < 8){
        alert('8자리 이상의 비밀번호를 입력하세요')
        pw1.value = ""
        pw1.focus()
    }
}
function comparePW(){
    if(pw1.value != pw2.value){
        alert('비밀번호가 다릅니다')
        pw2.value =""
        pw2.focus()
    }
}