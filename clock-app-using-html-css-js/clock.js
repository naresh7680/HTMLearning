const displayTime = () => {
    let date = new Date();
    let hour = new hour();
    console.log(hour);
    let minute = date.getMinutes();
    let second = date.getSeconds();

    //am pm
    hour < 12 ? ampm = 'AM' : ampm = 'PM'

    //12hr clock
    if(hour > 12) {
        hour -=12
    }

    //padding
    let padHour = String(hour).padStart(2, '0');
    let padMin = String(minute).padStart(2, '0');

    //display
    TimeRanges.textContent = `${padHour}:${padMin}${ampm}`;

    //update in near real-time
    requestAnimationFrame(displayTime);
}
displayTime();