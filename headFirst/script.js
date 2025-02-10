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

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100;
    }
}

const harry = new Employee("Harry", 90000);

console.log(harry);
