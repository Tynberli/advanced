'use strict'

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);
for (let i = 0; i < 5; i++) {
    const el = document.createElement('button');
    el.innerText = `Нажми меня`;
    el.classList.add('button');
    wrapper.append(el);
}
const btn = document.querySelectorAll('.button');
const text = document.querySelector('.text');
let count = 0;

btn.forEach((button) => {
    button.innerText = 'Нажми меня';
    button.addEventListener('click', () => {
        button.innerText = 'Нажата';
        text.innerText = `Количество нажатий ${count += 1}`
    })
})