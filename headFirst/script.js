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
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `This is a ${this.model} car from ${this.year}`;
    }

    age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}


const myCar = new Car("Toyota", 2020);

console.log(myCar.getInfo());
console.log(myCar.age());


