function isNumber(n) {
    return typeof n === "number" && !Number.isNaN(n);
}

console.log ("-------[ MISSION 1 ]-------");

function calcCircleArea(r) {
    if (isNumber(r)) {
        return (Math.PI * r**2);
    }
    return "INVALID DATA";
}

console.log ("Площадь круга = ", calcCircleArea(5));

console.log ("-------[ MISSION 2 ]-------");

function calcCircumference(r ) {
    
    if (isNumber(r)) {
        return (2 * Math.PI * r);
    }
    return "INVALID DATA";
}

console.log ("Длина окружности = ", calcCircumference(7));

console.log ("-------[ MISSION 3 ]-------");

function calcAverage (a = 15, b = 25) {

    if (isNumber(a) && isNumber(b)) {
        return ((a + b) / 2);
    }
    return "INVALID DATA";
}

console.log ("Среднее арифметическое двух чисел = ", calcAverage());

console.log ("-------[ MISSION 4 ]-------");

function calc(x, y, action) {

    if (typeof action === "string" && !Number.isNaN(x, y) && isNumber (x, y)) {
        console.log (`${x} ${action} ${y} = `);  
        return eval (x + (action) + y);
    }
    return "INVALID DATA";

}

console.log (calc(10, 2, "+")); 
console.log (calc(10, 2, "-"));
console.log (calc(10, 2, "*"));
console.log (calc(10, 2, "/"));
console.log (calc(10, 2, "%"));
console.log (calc(10, 2, "**")); 



