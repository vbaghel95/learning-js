function breakNumber(number) {
    let evenNumbers = []


for (let i=0;i<20;i++) {
    if(i === number){
   break
}
if ( i % 2 === 0 ){
    evenNumbers.push(i)
}
}
return evenNumbers
}
console.log(breakNumber(5))