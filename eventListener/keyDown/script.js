let container = document.getElementById('container')
let display = document.getElementById('display')

document.addEventListener('keydown', function(){
    display.style.color = "pink"
    display.innerText = e.key + " is keyDown"
})

document.addEventListener("keyup", function(){
    display.style.color = "#540099"
    display.innerText = e.key + " is keyup"
})