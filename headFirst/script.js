// let animal = {
//     eats: true,
//     walk() {
//         // alert("Animal walk");
//     }
// };


// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// };

// longEar.walk();
// alert(longEar.jumps);

// rabbit.walk = function() {
//     alert("Rabbit walk");
// };

// rabbit.walk();

// let harry = {
//     name: "Harry",
//     age: 25,
//     city: "Delhi",
//     salary: 90000
// };

// harry = {
//     name: 'Harry',
//     salary: 90000,
//     raiseSalary(percent) {
//         this.salary *= percent / 100;
//     }
// }

// harry.raiseSalary(10);

// console.log(harry.salary);

// function Employee(name, salary) {
//     return {
//         name: name,
//         salary: salary,
//         raiseSalary(percent) {
//             this.salary *= percent / 100;
//         }
//     }

// }

class Car {
    static count = 0;
    constructor(model, year) {
        this.model = model;
        this.year = year;
        Car.count++;
    }
    getInfo() {
        return `This is a ${this.model} car from ${this.year}`;
    }

    age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
    static countCars() {
        return Car.count;
    }
}



const myCar = new Car("Toyota", 2020);


class ElectricCar extends Car {
    #battery;
    constructor(model, year, battery) {

        super(model, year);
        this.#battery = battery;
    }
    getInfo() {
        return `${super.getInfo()} with a ${this.#battery} kWh battery`;
    }


    get battery() {
        return this.#battery;
    }
    set battery(value) {
        if (value > 0) {
            this.#battery = value;
        } else {
            console.error("Battery must be greater than 0");
        }
    }


    getBatteryInfo() {
        return `${super.getInfo()} with a ${this.#battery} kWh battery`;
    }


}
const myElectricCar = new ElectricCar("Tesla", 2022, 100);
console.log(myElectricCar.getInfo());

