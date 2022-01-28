function isNumber(n) {
    return typeof n === "number" && !Number.isNaN(n);
}

const p = 3.14;

console.log ("-------[ MISSION 1 ]-------");

function calcCircleArea(p, r = 5) {
    if (isNumber(p) && isNumber(r)) {
        return (p * r**2);
    }
    return "INVALID DATA";
}

console.log ("Площадь круга = ", calcCircleArea(p));

console.log ("-------[ MISSION 2 ]-------");

function calcCircumference(p, r = 7) {
    
    if (isNumber(p) && isNumber(r)) {
        return (2 * p * r);
    }
    return "INVALID DATA";
}

console.log ("Длина окружности = ", calcCircumference(p));

console.log ("-------[ MISSION 3 ]-------");

function calcAverage (a = 15, b = 25) {

    if (isNumber(a) && isNumber(b)) {
        return ((a + b) / 2);
    }
    return "INVALID DATA";
}

console.log ("Среднее арифметическое двух чисел = ", calcAverage());

console.log ("-------[ MISSION 4 ]-------");

function calcReminder(i, j) {
    return i % j; 
} 

function calc(x, y, action = "%") { 
    const result = action(x, y);
    console.log("x % y = ", result) 
}

calc(150, 20, calcReminder);


