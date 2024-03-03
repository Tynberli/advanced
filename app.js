'use strict'
function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeLeft = newYear - now;
    const mouth = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 31));
    const days = Math.floor(timeLeft % (1000 * 60 * 60 * 31) / (1000 * 60 * 60));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.querySelector('.countdown').innerHTML =
        `До нового года осталось: 
        ${mouth} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
