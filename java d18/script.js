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

    if(counter % 2 ===0){
        li.style.background = 'red'
    } else{
        li.style.background = 'yellow'
    }
    li.innerHTML = ' <b>Point</b> ' + counter

    ulElement.appendChild(li)
}
function decrementCounter(){
    const li = ulElement.querySelector('[data-counter = "'+counter+'"]')
li.remove()
    counter--
    counterEl.innerText = counter
    
}
plusPoint.addEventListener('click', incrementCounter)
minusPoint.addEventListener('click', decrementCounter)
