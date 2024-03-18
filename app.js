'use strict'
class Car {
    constructor(brand, model, mileage) {
        this._brand = brand;
        this._model = model;
        this._mileage = mileage;
    }

    get mileage() {
        return this._mileage;
    }

    set mileage(newMileage) {
        if (newMileage >= 0) {
            this._mileage = newMileage;
        }
    }

    info() {
        console.log(`Brand: ${this._brand}, Model: ${this._model}, Mileage: ${this._mileage}`);
    }
}

const myCar = new Car('Toyota', 'Corolla', 50000);
myCar.info();

myCar.mileage = 60000;
myCar.info();