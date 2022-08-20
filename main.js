const tokyoSecondsHand = document.getElementById("tokyo-seconds-hand")
const tokyoMinutesHand = document.getElementById("tokyo-minutes-hand")
const tokyoHoursHand = document.getElementById("tokyo-hours-hand")

const brisbaneSecondsHand = document.getElementById("brisbane-seconds-hand")
const brisbaneMinutesHand = document.getElementById("brisbane-minutes-hand")
const brisbaneHoursHand = document.getElementById("brisbane-hours-hand")



function getTokyoTime() {
    const now = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000))
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6


    tokyoSecondsHand.style.transform = "rotate(" + (seconds * timeInterval) + "deg)"
    tokyoMinutesHand.style.transform = "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)"
    tokyoHoursHand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)"
}

setInterval(getTokyoTime, 100)



function getBrisbaneTime() {
    const now = new Date(Date.now() + ((new Date().getTimezoneOffset() + (10 * 60)) * 60 * 1000))
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6


    brisbaneSecondsHand.style.transform = "rotate(" + (seconds * timeInterval) + "deg)"
    brisbaneMinutesHand.style.transform = "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)"
    brisbaneHoursHand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)"
}

setInterval(getBrisbaneTime, 100)

