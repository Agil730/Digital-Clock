function updateDateTime() {
    const clockElement = document.getElementById('Time');
    const currentTime = new Date();
    
    let hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    
    const dateTimeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);

updateDateTime();