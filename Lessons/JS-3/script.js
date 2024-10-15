const username = 'Alex';

const string = 'My ' + 'name ' + 'is ' + 'Vika'
console.log(string);

const newString = 'Year' + 2024;
console.log(newString);

const number = 5 + 10;
console.log(number);

const newNumber = 10 + '10';
console.log(newNumber);

const numbers = 15 + 15 + '15';
console.log(typeof numbers);



const message = 'Hello JavaScript!';
console.log(message.length);
console.log('Hello JavaScript!'.length);

console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message);
console.log(message.indexOf('Java'));
console.log(message.indexOf('lo'));
console.log(message.includes('hello'));
console.log(message.includes('Hello'));
console.log(message.startsWith('H'));
console.log(message.endsWith('?'));
console.log(message.padEnd(19,'?'));
console.log(message.padStart(19, '*'));



const name = 'Vika';
const age = 16;
const mood = 'happy';

const newMessage = 'My name is ' + name + ', I*m ' + age + ' years old and ' + mood + '.';
console.log(newMessage);

const massegeNew = `My name is ${name}, I*m ${age} years old and ${mood}.`
console.log(massegeNew);

console.log(`Результат додавання дорівнює ${20 + 28}`)



const numberHours = 8000 / 60;
console.log(numberHours);
const days = Math.floor(numberHours / 24);
console.log(days);
const hours = Math.floor(numberHours % 60);
console.log(hours);
const modHours = String(hours).padStart(3,0);
console.log(modHours);



const nameLast = 'Vika Melnyk'
console.log(nameLast.length);

console.log(nameLast.toUpperCase());

console.log(nameLast.indexOf(' '));

const x = 'Vika';
const y = 'Melnyk';
const n = 'lux';
const g = 1058;
const hotel = `Гість ${x} ${y} заселяється в ${n} номер ${g}`;
console.log(hotel);

const test = 'Ваш баланс поповнено на 1';
console.log(test.length);
console.log(test.padEnd(28, '0'));

let one = 3;
let two = 4;
let k = Math.sqrt(Math.pow(one, 2)+ Math.pow(two, 2));

console.log(`Гіпотенуза k дорівнює ${k}`);