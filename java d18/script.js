const plusPoint = document.querySelector('#increment')
const minusPoint = document.querySelector('#decrement')
 const counterEl = document.getElementById('counter')

 const ulElement = document.getElementById('list-items')
let counter = 0

function incrementCounter(){
    counter++
    counterEl.innerText = counter

    const li = document.createElement('li')
    li.setAttribute('data-counter', counter)
    li.innerHTML = ' <b>Point</b> ' + counter

    ulElement.appendChild(li)
}
function decrementCounter(){
    const li = ulElement.querySelector('[data-counter = "'+counter+'"]')
    const number = parseInt(li.getAttribute('data-counter'),10)
    if(number % 2 === 0){
        li.remove()
    }
    counter--
    counterEl.innerText = counter
    
}
plusPoint.addEventListener('click', incrementCounter)
minusPoint.addEventListener('click', decrementCounter)
