let hour1 = document.getElementById('hour-1');
let hour2 = document.getElementById('hour-2');
let minute1 = document.getElementById('minute-1');
let minute2 = document.getElementById('minute-2');
let second1 = document.getElementById('second-1');
let second2 = document.getElementById('second-2');
let burger = document.querySelector('.menu-burger');

//сегодняшняя дата
let date_now = new Date();
//дата окончания
let date_end = +new Date() + (3600 * 1000 * 24);
//оставшееся время до конечной даты в мс
let time_left = date_end - date_now;

let timerId = setInterval(() => {
    time_left -= 1000;
    displayTimeLeft();
}, 1000);

function displayTimeLeft() {
    let seconds = Math.floor((time_left / 1000) % 60);
    let minutes = Math.floor((time_left / (1000 * 60)) % 60);
    let hours = Math.floor((time_left / (1000 * 60 * 60)) % 24);

    if(seconds === 0 && minutes === 0 && hours === 0) {
        clearInterval(timerId);
    }

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    hour1.innerText = String(hours).substring(0, 1);
    hour2.innerText = String(hours).substring(1, 2);
    minute1.innerText = String(minutes).substring(0, 1);
    minute2.innerText = String(minutes).substring(1, 2);
    second1.innerText = String(seconds).substring(0, 1);
    second2.innerText = String(seconds).substring(1, 2);
}

burger.addEventListener('click', () => {
    document.querySelector('.header__bottom-wrapper').classList.toggle('header__bottom-wrapper--active');
    document.querySelector('body').classList.toggle('off-scroll');
});