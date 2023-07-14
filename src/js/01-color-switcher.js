const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyElement = document.body;
let interval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
stopButton.disabled = true;

startButton.addEventListener('click', () => {
  interval = setInterval(() => {
    bodyElement.style.backgroundColor = getRandomHexColor();
    startButton.disabled = true;
    stopButton.disabled = false;
  }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(interval);
  startButton.disabled = false;
  stopButton.disabled = true;
});
