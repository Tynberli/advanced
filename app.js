'use strict'
/* Повторите упражнение из раздела 7 но используя классы
сделайте переопределение метода говорить для эльфа и орка */
//Базовый класс 
class Base {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }
    greet() {
        console.log(`Меня зовут ${this.name}, я представитель расы ${this.race}. Говорю на ${this.language}.`);
    }
}
//Класс Орка
class Orc extends Base {
    constructor(race, name, language, weapon) {
        super(race, name, language)
        this.weapon = weapon;
    }
    attack() {
        console.log(`${this.name} атакует с помощью ${this.weapon}!`);
    }
}
//Класс Эльфа
class Elf extends Base {
    constructor(race, name, language, spellType) {
        super(race, name, language);
        this.spellType = spellType;
    }
    castSpell() {
        console.log(`${this.name} создает заклинание типа ${this.spellType}!`);
    }
}

const person1 = new Base('Человек', 'Арагорн', 'Русский');
person1.greet();

const orc1 = new Orc('Орк', 'Гром', 'Орочий', 'топор');
orc1.greet();
orc1.attack();

const elf1 = new Elf('Эльф', 'Леголас', 'Эльфийский', 'воздух');
elf1.greet();
elf1.castSpell();