const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minuts = document.getElementById('seconds');
const seconds = document.getElementById('seconds');

const endDate = new Date ('December 25 2023');
const endDateInMs = endDate.getTime();
console.log(endDateInMs);


const secondInMs = 1000;
const minutsInMs = 60 * secondInMs;
const hoursInMs = 60 * minutsInMs;
const daysInMs = 24 * hoursInMs;

const counterTimer = setInterval(timer, 1000);

function timer() {
    // oggi in ms
    const nowInMs = new Date().getTime();

    const diff = endDateInMs - nowInMs;

        days.innerHTML = Math.floor( diff / daysInMs);
        hours.innerHTML = Math.floor( (diff % daysInMs) / hoursInMs );
        minuts.innerHTML = Math.floor( (diff % hoursInMs ) / minutsInMs );
        seconds.innerHTML = Math.floor( (diff % minutsInMs ) / secondInMs );
}