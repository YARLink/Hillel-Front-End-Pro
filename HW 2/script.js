// let currentUserName = prompt("Как тебя зовут?");
// let currentYear = 2022;
// let currentUserAge = prompt("Какого ты года рождения?");
// alert(currentUserName + " " +(currentYear - currentUserAge));

//_______________________________________________________________________________________________________________

let a = true;
a = +a;
console.log(a);

let b = "5";
b = Number(b);
console.log(b);

let c = null;
c = c*=2;
console.log(c);

console.log(a + b + c);

let isEven = a % 2 === 0; 
console.log(isEven);
isEven = b % 2 === 0;
console.log(isEven);
isEven = c % 2 === 0; 
console.log(isEven); // Тут спряталось четное число

console.log((a + b + c) / 3); // Среднее арифметическое трех чисел

//______________________________________________________________________________________________________________

let randomNumber = 93784;
let dig1 = (randomNumber % 100000);
let dig2 = (randomNumber % 10000);
let dig3 = (randomNumber % 1000);
let dig4 = (randomNumber % 100);
let dig5 = (randomNumber % 10);

dig1 = (dig1 - dig2) / 10000;
dig2 = (dig2 - dig3) / 1000;
dig3 = (dig3 - dig4) / 100;
dig4 = (dig4 - dig5) / 10;

console.log(dig1, dig2, dig3, dig4, dig5);
