const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
let counter = 0

function incrementCounter(){
    const counterEl = document.getElementById('counter')
    counter++
    counterEl.innerText = counter
}
function decrementCounter(){
    const counterEl = document.getElementById('counter')
    counter--
    counterEl.innerText = counter
    
}
incrementBtn.addEventListener('click', incrementCounter)
decrementBtn.addEventListener('click', decrementCounter)
