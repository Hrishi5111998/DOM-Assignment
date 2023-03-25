const decrementBtn = document.getElementById('btnDecrement')
const incrementBtn = document.getElementById('btnIncrement')
const resetBtn = document.getElementById('btnReset')
let display = document.getElementById('displayValue')
let count = 0

decrementBtn.addEventListener('click', function decreaseCountOne(){
        count -= 1  
    display.textContent = count
   if(count < 0){
    display.style.background = "red"
    display.style.color = "#fff"
   }
})

incrementBtn.addEventListener('click', function increaseCountOne(){
    count += 1
    display.textContent = count
    if(count > 0){
        display.style.background = "green"
        display.style.color = "#fff"
    }
})

resetBtn.addEventListener('click', function resetCount(){
    count = 0
    display.textContent = count
    if(count === 0){
        display.style.background = "black"
        display.style.color = "#fff"
    }
})