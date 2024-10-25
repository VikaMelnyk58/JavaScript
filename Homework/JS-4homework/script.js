// Завдання 1
let fieldOne = 'Text';
let fieldTwo = 'Also text';

if (fieldOne !== "" && fieldTwo !== ""){
    alert("Обидва поля заповнені");
} else{
    alert("Не всі поля заповнені");
}


// Завдання 2
const numOne = 5;
const numTwo = 7;
const sum = numOne + numTwo;

if (sum > 10) {
    console.log('Сума більше за 10');
} else {
    console.log('Сума менша або дорівнює 10');
}

// Завдання 3
const text = 'Ми вивчаємо мову програмування - JavaScript!';

if(text.includes('JavaScript')) {
    console.log('Текст містить JavaScript');
} else {
    console.log('Текст не містить JavaScript');
}

// Завдання 4
const number = 14;

if(number < 20 && number > 10) {
    console.log('Число входить');
} else {
    console.log('Число не входить');
}

// Завдання 5
const name = 'Nik';
const email = 'nik@gmail.com';
const password = 'password5858';

if(name.length >= 3 && email.includes('@') && email.includes('.') && password.length >= 6){
    console.log('На іншу сторінку');
} else{
    console.log('Не вірно');
}