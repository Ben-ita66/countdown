var timer;
var compareDate = new Date(new Date().getFullYear(), 5, 7); // June 7th of the current year

// Ensure the countdown timer is set correctly
timer = setInterval(function () {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    var now = new Date();
    var difference = toDate - now;

    if (difference <= 0) {
        clearInterval(timer);
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;

        // Hide the counter elements
        document.querySelector('.counter').style.display = 'none';

        // Display the message after countdown finishes
        document.getElementById("message").innerHTML = "now we feast!!!";
    } else {
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // Clear the message if countdown is still ongoing
        document.getElementById("message").innerHTML = "";
    }
}