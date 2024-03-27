'use strict'
function validDice(diceType) {
    return ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'].includes(diceType);
}

function rollDice(diceType) {
    if (!validDice(diceType)) {
        return 'Неподдерживаемый тип кубика. Пожалуйста, выберите d4, d6, d8, d10, d12, d16 или d20.';
    }

    switch (diceType) {
        case 'd4':
            return Math.floor(Math.random() * 4) + 1;
        case 'd6':
            return Math.floor(Math.random() * 6) + 1;
        case 'd8':
            return Math.floor(Math.random() * 8) + 1;
        case 'd10':
            return Math.floor(Math.random() * 10) + 1;
        case 'd12':
            return Math.floor(Math.random() * 12) + 1;
        case 'd16':
            return Math.floor(Math.random() * 16) + 1;
        case 'd20':
            return Math.floor(Math.random() * 20) + 1;
        default:
            return 'Что-то пошло не так.';
    }
}

const result = rollDice('d6');
console.log(`Результат броска кубика: ${result}`);