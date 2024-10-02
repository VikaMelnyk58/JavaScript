// Завдання 1
const age = 12;
console.log(age);

// Завдання 2
const name = 'Vika';
console.log(name);

// Завдання 3
const isStudent = true;
console.log(isStudent);

// Завдання 4
const myString = 'Never say never';
console.log(myString);

// Завдання 5
let myNumber = 20;
let myNumberTwo = myNumber + 10;
console.log(myNumberTwo);

// Завдання 6
const myNull = null;
console.log(myNull);

// Завдання 7
const user = prompt('Ведіть своє ім*я');
alert(`Hello ${user}`);

// Завдання 8
const change = confirm('ОK чи Скасувати?');
if(change === true) {
    alert('Дякую за підтвердження!')
} else {
    alert('Дію відмінено!')
}

// Завдання 9
alert('Наступні дії можуть бути небезпечні!');
const danger = confirm('Дія небезпечна, чи підтверджуєте ви дію?')
if (danger === true) {
    alert('Дякую за підтвердження дії!')
} else {
    alert('Дію відмінено!')
}
