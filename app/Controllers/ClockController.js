function _startClock() {

    let clock = () => {
        let date = new Date();
        let hrs = date.getHours();
        let mins = date.getMinutes();
        let sec = date.getSeconds();
        let period = "AM";
        if (hrs == 0) {
            hrs = 12
        } else if (hrs >= 12) {
            hrs = hrs - 12;
            period = "PM";
        }
        // hrs = hrs < 10 ? "0" + hrs : hrs;
        mins = mins < 10 ? "0" + mins : mins;
        sec = sec < 10 ? "0" + sec : sec;

        let time = `<h1 class="clocksize">${hrs}:${mins}</h1>`
        document.getElementById('clock').innerHTML = time
        setTimeout(clock, 1000);
    }
    clock();

}

export class ClockController {

    constructor() {
        _startClock()
    }


}