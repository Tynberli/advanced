'use strict'
//Базовый класс 
const Base = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Base.prototype.greet = function () {
    console.log(`Меня зовут ${this.name}, я представитель расы ${this.race}. Говорю на ${this.language}.`);
}

//Класс Орка
const Orc = function (race, name, language, weapon) {
    Base.call(this, race, name, language);
    this.weapon = weapon;
}

Orc.prototype = Object.create(Base.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.attack = function () {
    console.log(`${this.name} атакует с помощью ${this.weapon}!`);
}
//Класс Эльфа
const Elf = function (race, name, language, spellType) {
    Base.call(this, race, name, language);
    this.spellType = spellType;
}

Elf.prototype = Object.create(Base.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.castSpell = function () {
    console.log(`${this.name} создает заклинание типа ${this.spellType}!`);
}

const person1 = new Base('Человек', 'Арагорн', 'Русский');
person1.greet();

const orc1 = new Orc('Орк', 'Гром', 'Орочий', 'топор');
orc1.greet();
orc1.attack();

const elf1 = new Elf('Эльф', 'Леголас', 'Эльфийский', 'воздух');
elf1.greet();
elf1.castSpell();
