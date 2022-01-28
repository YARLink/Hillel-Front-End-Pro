console.log ("MISSION 1");

// 1.____________________________________________________________________________________________

let commaSpace = ""; 
for (let n = 10; n <= 20; n++) {
    commaSpace += n + ", "; 
}
console.log(commaSpace);

console.log ("MISSION 2");

// 2._____________________________________________________________________________________________

for (let i = 10; i <=20; i++) {
    console.log (`${i}**2 =`, i**2);
}

console.log ("MISSION 3");

// 3._____________________________________________________________________________________________

let number = 7;
for (let factor = 1; factor <= 10; factor++) {
    console.log (`${number} x ${factor} =`, number * factor);
}

console.log ("MISSION 4");

// 4._____________________________________________________________________________________________

let count = 0;
for (let num = 1; num <= 15; num++) {
    count += num;
}
console.log (count);

console.log ("MISSION 5");

// 5._____________________________________________________________________________________________

let multiply = 1;
for (let number = 15; number <= 35; number++) {
    multiply *= number;
}
console.log (BigInt(multiply));

console.log ("MISSION 6");

// 6.______________________________________________________________________________________________

let sum = 0;
let averege = 0;
for (let i = 1; i <= 500; i++) {
    averege = (sum += i) / 500;
}
console.log (averege);

console.log ("MISSION 7");

// 7._______________________________________________________________________________________________

let evenNumberCount = 0;
for (let j = 30; j <= 80; j++) {
    if (j % 2 === 1) continue;
    evenNumberCount += j;
}
console.log (evenNumberCount);

console.log ("MISSION 8");

// 8._______________________________________________________________________________________________

for (let multiplicity3 = 100; multiplicity3 <= 200; multiplicity3++) {
    if (multiplicity3 % 3 !== 0) continue;
    console.log (multiplicity3);
}

console.log ("MISSION 9");

// 9._______________________________________________________________________________________________

let randomNumber = 246;
for (let divisor = 1; divisor <= randomNumber; divisor++) {
    if (randomNumber % divisor !== 0) continue;
    console.log (divisor);
}

console.log ("MISSION 9a");

// 9a.___________________________________________________

let sumOfEvenDivisors = 0;
let randomNumberA = 246;
for (let divisorA = 1; divisorA <= randomNumberA; divisorA++) {
    if (randomNumberA % divisorA !== 0 || divisorA % 2 === 1) continue; 
    sumOfEvenDivisors += !!divisorA
}
console.log (sumOfEvenDivisors);

console.log ("MISSION 9b");

// 9b.___________________________________________________

let randomNumberB = 246;
let countB = 0;
for (let divisorB = 1; divisorB <= randomNumberB; divisorB++) {
    if (randomNumberB % divisorB !== 0 || divisorB % 2 === 1) continue;
    countB += divisorB;
}
console.log (countB);

console.log ("MISSION 10");

// 10.______________________________________________________________________________________________

for (let x = 1; x <= 9; x++) {
    console.log (x);
    for (let y = 1; y <= 10; y++) {
        console.log (`${x} x ${y} =`, x * y);
    }
}

console.log ("MISSION 11");

// 11._______________________________________________________________________________________________

let randomNumb = Math.floor(Math.random()*10) + 1;
console.log (randomNumb); 
let enteredNumber;

do {
    enteredNumber = prompt("Угадай число от 0 до 10!");
    if (Number.isNaN(+enteredNumber) || enteredNumber === "" || enteredNumber === " ") {
        alert ("INVALID DATA");
    } else if (enteredNumber === null) {
        break;
    } else if (enteredNumber > randomNumb) {
        alert ("Too high!");
    } else if (enteredNumber < randomNumb) {
        alert ("Too low!");
    } else {
        alert ("Congratulations! You got it right!");
        break;
    }
} while (true);

console.log ("MISSION 12");

// 12._______________________________________________________________________________________________

let triangleHeight = prompt ("Enter number", 5); 
let triangle = "";

for (let a = 0; a < triangleHeight; a++) {
    for (let c = 0; c < a + 1; c++);
    triangle += "^ ";
    console.log (triangle);
}

