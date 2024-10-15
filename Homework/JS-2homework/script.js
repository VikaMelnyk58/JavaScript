// Завдання 1
let celsius = 15;
let fahrenheit = celsius * 9 / 5 + 32;
console.log('Температура за Цельсієм - ', celsius, '. Температура за Фаренгейтом -', fahrenheit);

// Завдання 2
const daysInMonth = 30;
const hoursInMonth = daysInMonth * 60;
const minutesInMonth = hoursInMonth * 60;
console.log('Кількість годин в місяці - ', hoursInMonth, 'Кількість хвилин в місяці - ', minutesInMonth);

// Завдання 3
let health = 100;
let energy = 90;

health -= 20;
energy -= 30;

console.log('Здоровя - ', health, 'Енергія - ', energy);

// Завдання 4
let totalPrice = 500;
let discount = 10;
let discountedPrice = totalPrice * ( 1 - discount / 100);
console.log('Ціна зі знижкою:', discountedPrice);

// Завдання 5
const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

// Завдання 6
const floatString = '45.67';
const parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

// Завдання 7
 const intString = "123";
 const parsedInt = parseInt(intString);
 console.log(parsedInt);

// Завдання 8
let number = 64;
let sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

// Завдання 9
const integer = 42;
const stringNumber = "256";
 
const convertedInt = parseInt(stringNumber);
console.log(convertedInt); //256

const convertedString = integer.toString();
console.log(convertedString); //47