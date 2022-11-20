const incrementBtn = document.querySelector('#increment')
let counter = 0

function incrementCounter(){
    const counterEl = document.getElementById('counter')
    counter++
    counterEl.innerText = counter
    
}
incrementBtn.addEventListener('click', incrementCounter)