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
let lastClickedButton = null;
btn.forEach((button) => {

    button.addEventListener('click', () => {
        if (lastClickedButton && lastClickedButton !== button) {
            lastClickedButton.innerText = 'Нажми меня';
        }
        button.innerText = 'Нажата';
        lastClickedButton = button;
        text.innerText = `Количество нажатий ${count += 1}`
    })
})