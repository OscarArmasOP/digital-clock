(function() {

    var updateTime = function() {
        var date = new Date(),
            hours = date.getHours(),
            ampm,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            weekDay = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getUTCFullYear();

        var pHours = document.getElementById('hours'),
            pAMPM = document.getElementById('ampm'),
            pMinutes = document.getElementById('minutes'),
            pSeconds = document.getElementById('seconds'),
            pWeekDay = document.getElementById('weekDay'),
            pDay = document.getElementById('day'),
            pMonth = document.getElementById('month'),
            pYear = document.getElementById('year');

        var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        pWeekDay.textContent = week[weekDay];
        pDay.textContent = day;

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        pMonth.textContent = months[month];

        pYear.textContent = year;

        if (hours >= 12) {
            hours = hours - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }

        if (hours == 0) {
            hours = 12;
        }
        if (hours < 10) { hours = "0" + hours; }
        pHours.textContent = hours;

        pAMPM.textContent = ampm;

        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        pMinutes.textContent = minutes;

        pSeconds.textContent = seconds;
    };
    updateTime();
    var intervalo = setInterval(updateTime, 1000);
}())