// 1.___________________________________________________________________

let firstNumber = +prompt ("Введите число №1", 3748);
let secondNumber = +prompt ("Введите число №2", 3821);

if (firstNumber > secondNumber && Number.isNaN(firstNumber, secondNumber) === false) {
    alert ("Число №1 больше");
} else if (firstNumber < secondNumber) {
    alert ("Число №2 больше");
} else if (firstNumber = secondNumber) {
    alert ("Числа равны друг другу");
} else {
    alert ("INVALID DATA");
}

// 2.__________________________________________________________________________

let randomNumber = +prompt ("Введите число", 4383);
let lastDigit = randomNumber % 10;

if ((randomNumber % 10) % 2 === 0 && Number.isNaN(randomNumber) === false && randomNumber !== 0) {
    alert ("EVEN");//Последняя цифра числа - четная
} else if ((randomNumber % 10) % 2 === 1 && Number.isNaN(randomNumber) === false) {
    alert ("NOT EVEN");//Последняя цифра числа - не четная
} else {
    alert ("INVALID DATA");
}
console.log (lastDigit);

// 3.__________________________________________________________________________

let userName = prompt ("Как Вас зовут?");

if (userName !== "" && userName !== null) {

    let userAge = +prompt ("Сколько Вам лет");
    
    if (Number.isNaN(userAge) === false && userAge !== 0) {

        let alcohol = confirm ("Алкоголь употребляете?");

        if (userAge < 18 && alcohol === true) {
            console.log (`Ты что?! Маме расскажу!${userName}`);
        } else if (userAge <= 40 && alcohol === true) {
            console.log (`Только водку с пивом не мешай...${userName}`);
        } else if (userAge > 40 && alcohol === true) {
            console.log (`Не злоупотребляйте, ${userName}`);
        } else if (alcohol === false) {
            console.log (`Так держать, ${userName}`);
        } else {
            console.log ("INVALID DATA");
        }

    } else {
        console.log ("INVALID DATA");
    }

} else {
    console.log ("INVALID DATA");
}

// 3. (Второй способ решения)__________________________________________________________

// let userName = prompt ("Как Вас зовут?");
// let userAge = +prompt ("Сколько Вам лет");
// let alcohol = confirm ("Алкоголь употребляете?");

// let answer = (userName !== "" && userName !== null && Number.isNaN(userAge) === false && userAge !== 0 && alcohol === true && userAge < 18) ? `Ты что?! Маме расскажу!${userName}` :
//     (userName !== "" && userName !== null && Number.isNaN(userAge) === false && userAge !== 0 && alcohol === true && userAge <= 40) ? `Только водку с пивом не мешай...${userName}` :
//     (userName !== "" && userName !== null && Number.isNaN(userAge) === false && userAge !== 0 && alcohol === true && userAge > 40) ? `Не злоупотребляйте, ${userName}` :
//     (userName !== "" && userName !== null && Number.isNaN(userAge) === false && userAge !== 0 && alcohol === false) ? `Так держать, ${userName}` : 
//     `INVALID DATA`;

// console.log (answer);

    