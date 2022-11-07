function shouldIGetAlicense(age) {
    if (age > 18) {
        console.log('This person is Qualified')
        return
    }
    else{
        console.log('This person not Qualified')
    }
}
shouldIGetAlicense(11)