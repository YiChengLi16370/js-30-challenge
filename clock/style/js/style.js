const secnodHand = document.querySelector('.secHand')
const minHand = document.querySelector('.minHand')
const hourHand = document.querySelector('.hourHand')

function setDate() {
    
    const now = new Date();
    const seconds = now.getSeconds()
    const secondDegrees = ((seconds/60*360)+180)
    secnodHand.style.transform = `rotate(${secondDegrees}deg)`

    const mins = now.getMinutes()
    const minDegrees = (mins/60*360)+180
    minHand.style.transform = `rotate(${minDegrees}deg)`

    const hours = now.getHours()
    const hourDegrees = (hours/12*360)+(mins/2)+180
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    console.log(hours);
}

setInterval(setDate,1000);