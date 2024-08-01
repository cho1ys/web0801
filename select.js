const select = document.getElementById('major')
const selected = select.value || '선택되지 않음'


const select2 = document.querySelector('input[name="subject"]:checked')
const selected2 =select2 ? select2.value : '선택되지 않음'


const select3 = document.querySelector('input[name="time"]:checked')
const selected3 = select3 ? select3.value : '선택되지 않음'


const submit = document.getElementById('submit')
submit.addEventListener('click',()=>{
    const username = document.getElementById('userName').value
})

document.getElementById('result').innerHTML = `${username}, ${seleted}, ${seleted2}, ${seleted3}`