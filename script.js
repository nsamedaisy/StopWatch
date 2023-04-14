let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.querySelector("display-time");
let currentInterval = null;

document.getElementById('startWatch').addEventListener('click', () => {
  if(currentInterval !== null) {
    clearInterval(clearInterval);
    }
    currentInterval = setInterval(displayTime, 10);
});

document.getElementById('pauseWatch').addEventListener('click', () => {
  clearInterval(clearInterval);
});

document.getElementById('resetWatch').addEventListener('click', () => {
  clearInterval(clearInterval);
	[seconds, minutes, hours] = [0, 0, 0];
	displayTime.innerHTML = '00 : 00 : 00';
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
  displayTime.innerHTML = h + ":" + m + ":" + s;
}
