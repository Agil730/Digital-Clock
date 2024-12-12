function updateDateTime() {
    const clockElement = document.getElementById('Date');
    const currentTime = new Date();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[currentTime.getDay()];

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[currentTime.getMonth()];

    const day = currentTime.getDate();
    const year = currentTime.getFullYear();

    const dateTimeString = `${dayOfWeek} ${day} ${month} ${year}`;
    clockElement.textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);

updateDateTime();