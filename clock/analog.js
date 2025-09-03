function setAnalogClock() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours() % 12;
    document.getElementById("ac-hour").style.transform =
        `translate(-50%, 0) rotate(${hr * 30 + min / 2}deg)`;
    document.getElementById("ac-minute").style.transform =
        `translate(-50%, 0) rotate(${min * 6}deg)`;
    document.getElementById("ac-second").style.transform =
        `translate(-50%, 0) rotate(${sec * 6}deg)`;
}
setInterval(setAnalogClock, 1000);
setAnalogClock();
