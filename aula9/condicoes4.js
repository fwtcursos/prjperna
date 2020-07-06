var now = new Date()
var time = now.getHours ()

console.log(`${time} o'clock`)

if (time < 12) {
    console.log('Good morning!')
    } else if (time <= 18) {
    console.log('Good afternoon!')
    } else {
    console.log('Good evenning')
}

