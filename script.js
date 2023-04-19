let [seconds, minutes, hours] = [0,0,0];
let displayTimer = document.getElementById("display-time");
let currentInterval = null;

document.getElementById('pause-Watch').addEventListener('click', () => {
  clearInterval(currentInterval);
});

document.getElementById('reset-Watch').addEventListener('click', () => {
  clearInterval(currentInterval);
	[seconds, minutes, hours] = [0, 0, 0];
	displayTimer.innerHTML = '00 : 00 : 00';
});

function displayTime() {
  seconds++;
  if(seconds == 60) {
    seconds = 0;
    minutes++;
    if(minutes == 60) {
      minutes = 0;
      hours++;
   }
  }
  let h = hours < 10 ? "0" + hours: hours;
  let m = minutes < 10 ? "0" + minutes: minutes;
  let s = seconds < 10 ? "0" + seconds: seconds;
  displayTimer.innerHTML = h+ ":" + m + ":" + s;
}

document.getElementById('start-Watch').addEventListener('click', () => {
  if(currentInterval !== null) {
    clearInterval(currentInterval);
    }
    currentInterval = setInterval(displayTime, 1000);
		console.log(currentInterval)
});
