'use strict';

function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeLeft = newYear - now;
    const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30.436875));
    const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30.436875)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.querySelector('.countdown').innerHTML =
        `До нового года осталось: 
        ${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
