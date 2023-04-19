let [seconds, minutes, hours] = [0, 0, 0]
const displayTimer = document.getElementById('display-time')
let currentInterval = null

document.getElementById('pause-watch').addEventListener('click', () => {
  clearInterval(currentInterval)
})

document.getElementById('reset-watch').addEventListener('click', () => {
  clearInterval(currentInterval);
  [seconds, minutes, hours] = [0, 0, 0]
  displayTimer.innerHTML = '00 : 00 : 00'
})

function displayTime () {
  seconds++
  if (seconds === 60) {
    seconds = 0
    minutes++
    if (minutes === 60) {
      minutes = 0
      hours++
    }
  }
  const h = hours < 10 ? '0' + hours : hours
  const m = minutes < 10 ? '0' + minutes : minutes
  const s = seconds < 10 ? '0' + seconds : seconds
  displayTimer.innerHTML = h + ':' + m + ':' + s
}

document.getElementById('start-watch').addEventListener('click', () => {
  if (currentInterval !== null) {
    clearInterval(currentInterval)
  }
  currentInterval = setInterval(displayTime, 1000)
  console.log(currentInterval)
})
