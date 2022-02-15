"use strict"

console.log("-------[ MISSION 1 ]-------");

const origin = {
    name: "Ozzy",
    surname: "Osbourne",
    age: 100500,
    role: "rock musician",
};

const target = {};

function copy (target, origin) {
    for (let key in origin) {
        target[key] = origin[key];
    }
    return target;
}

console.log("origin {}; BEFORE", origin);
console.log("target {}; BEFORE", target);
console.log("copy (target, origin) ", copy (target, origin));
console.log("target {}; AFTER", target);

console.log("-------[ MISSION 2 ]-------");

let a = {
    name: "Peter",
    surname: "Parker",
    role: "spider-man",
    age: 24,
    parameters: {
        heigth: 180,
        weigth: 70,
    }
};
let b = {
    name: "Peter",
    surname: "Parker",
    role: "spider-man",     
    age: 24,
    parameters: {
        heigth: 180,
        weigth: 70,
    }
};

function calcObjKeys(obj) {
    let count = 0;

    for (let key in obj) {
        count++;
    }
    return count;
}

function isEqual(a, b) {

    if (calcObjKeys(a) === calcObjKeys(b)) {

        for (let key in b) {
            const bothObj = typeof(a[key]) === "object" && typeof(b[key]) === "object";            
            if ((a[key] !== b[key] && !bothObj) || (bothObj && !isEqual(a[key], b[key]))) {
                return false;
            }  
        }
        return true;
    } 
    return false;
}

console.log(a);
console.log(b); 
console.log("a === b ", isEqual(a, b));

console.log("-------[ MISSION 3 ]-------");  

let string = "dghsyreirkvmncbxkziodhfhytjvafsraagbbch";

function countLetters(str) {

    const obj = {};
    for (let i = 0; i < str.length; i++) {

        let key = str[i];
        obj[key] ? obj[key]++ : obj[key] = 1;
    }
    return obj;
}

console.log(string);
console.log(countLetters(string));