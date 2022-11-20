const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
 const counterEl = document.getElementById('counter')

 const ulElement = document.getElementById('list-items')
let counter = 0

function incrementCounter(){
    counter++
    counterEl.innerText = counter

    const li = document.createElement('li')
    li.innerHTML = ' <b>Point</b> ' + counter

    ulElement.appendChild(li)
}
function decrementCounter(){
    counter--
    counterEl.innerText = counter
    
}
incrementBtn.addEventListener('click', incrementCounter)
decrementBtn.addEventListener('click', decrementCounter)
