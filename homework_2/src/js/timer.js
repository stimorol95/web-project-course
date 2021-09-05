import { formatError } from "./common.js";
import { setTimer } from "./timerCalc.js";

export const timerForm = document.getElementById("timer_form");

const start = document.getElementById("start");
const pause = document.getElementById("pause");
const error = document.querySelector(".error");
const ring = new Audio("./src/assets/example.mp3");

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);

let timerId = null;

function startTimer(event) {
  event.preventDefault();

  error.innerHTML = "";
  let time = timerForm.elements.time.value;

  if (time && !timerId) {
    timerId = setInterval(() => {
      const timer = setTimer(time);

      if (timer) {
        timerForm.elements.time.value = timer;
        time = timer;
      } else {
        clearInterval(timerId);
        ring.play();
      }
    }, 100);
  } else if (timerId) {
    error.innerHTML = "Таймер уже запущен";
    setTimeout(() => (error.innerHTML = ""), 5000);
  } else {
    error.innerHTML = formatError("Введите время");
  }
}

function pauseTimer(event) {
  event.preventDefault();
  clearInterval(timerId);
  timerId = null;
  error.innerHTML = "Таймер на паузе";
  ring.pause();
}
