import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const textData = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let interval = null;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(textData, options);

startButton.addEventListener('click', e => {
  count();
  interval = setInterval(() => {
    count();
  }, 1000);
});

function count() {
  let countTo = new Date(textData.value).getTime();
  let countFrom = new Date().getTime();
  let counted = convertMs(countTo - countFrom);

  if (countTo - countFrom > 0) {
    daysElem.textContent = counted.days;
    hoursElem.textContent = counted.hours;
    minutesElem.textContent = counted.minutes;
    secondsElem.textContent = counted.seconds;
  }
}
