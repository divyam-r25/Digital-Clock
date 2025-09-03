function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;
    document.getElementById("hour").textContent = hour.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = now.getMinutes().toString().padStart(2, "0");
    document.getElementById("seconds").textContent = now.getSeconds().toString().padStart(2, "0");
    document.getElementById("ampm").textContent = ampm;
}
setInterval(updateClock, 1000);
updateClock();

