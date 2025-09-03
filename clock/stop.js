// Stopwatch logic
let startTime = null,
    updatedTime = null,
    difference = 0,
    timerInterval = null,
    running = false;

const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const msEl = document.getElementById("milis");

const startBtn = document.getElementById("start/resume");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateDisplay(diff) {
    let hours = Math.floor(diff / 3600000);
    let minutes = Math.floor((diff % 3600000) / 60000);
    let seconds = Math.floor((diff % 60000) / 1000);
    let ms = Math.floor((diff % 1000) / 10);

    hourEl.textContent = hours.toString().padStart(2, "0");
    minEl.textContent = minutes.toString().padStart(2, "0");
    secEl.textContent = seconds.toString().padStart(2, "0");
    msEl.textContent = ms.toString().padStart(2, "0");
}

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        timerInterval = setInterval(() => {
            updatedTime = new Date().getTime();
            difference = updatedTime - startTime;
            updateDisplay(difference);
        }, 10);
        running = true;
        startBtn.classList.add('active');
    }
}

function stopTimer() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
        startBtn.classList.remove('active');
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    difference = 0;
    updateDisplay(difference);
    startBtn.classList.remove('active');
}

startBtn.onclick = startTimer;
stopBtn.onclick = stopTimer;
resetBtn.onclick = resetTimer;


document.addEventListener("keydown", (e) => {
    if (e.code === "Space") running ? stopTimer() : startTimer();
});
