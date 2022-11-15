let myFriends=[]
function addMyFriends(friend){
    myFriends.unshift(friend)
    console.log(myFriends)
}
for (let i=0;i<19;++i) {
    myFriends.push(i)
}
console.log(myFriends)