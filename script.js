document.querySelector('h1').textContent = "Latihan JavaScript Selesai";
let name = "John";
const age = 30;
document.getElementById("output").innerHTML = `Nama: ${name}, Umur: ${age}`;

let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => {
    document.getElementById("output").innerHTML += `<br>Buah: ${fruit}`;
});

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
document.getElementById("output").innerHTML += `<br>Nama Lengkap: ${person.firstName} ${person.lastName}`;
function checkValue() {
    let userValue = parseInt(document.getElementById("userInput").value);
    let output = document.getElementById("output");

    if (userValue > 10) {
        output.innerHTML = "Nilai lebih besar dari 10";
    } else if (userValue === 10) {
        output.innerHTML = "Nilai sama dengan 10";
    } else {
        output.innerHTML = "Nilai kurang dari 10";
    }

    for (let i = 1; i <= userValue; i++) {
        output.innerHTML += `<br>Angka: ${i}`;
    }
}
function greet(name) {
    return `Hello, ${name}`;
}

document.getElementById("output").innerHTML = greet("Alice");

function calculateSquare(number) {
    return number * number;
}

document.getElementById("output").innerHTML += `<br>Kuadrat dari 4 adalah: ${calculateSquare(4)}`;

const addNumbers = (a, b) => a + b;
document.getElementById("output").innerHTML += `<br>Penjumlahan 3 + 5 adalah: ${addNumbers(3, 5)}`;
let students = ["Alice", "Bob", "Charlie"];
students.push("David");

students.forEach(student => {
    document.getElementById("output").innerHTML += `<br>Siswa: ${student}`;
});

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let prop in car) {
    document.getElementById("output").innerHTML += `<br>${prop}: ${car[prop]}`;
}

let cars = [
    { brand: "Toyota", model: "Corolla", year: 2020 },
    { brand: "Honda", model: "Civic", year: 2019 },
    { brand: "Ford", model: "Mustang", year: 2018 }
];

cars.forEach(car => {
    document.getElementById("output").innerHTML += `<br>${car.brand} ${car.model}, Tahun: ${car.year}`;
});
