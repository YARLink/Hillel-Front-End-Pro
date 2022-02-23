"use strict"

console.log("-------[ MISSION 1 ]-------");

function isSymbolPresentInString(str, symbol) {

    for (let key of str) {
        if(symbol === key) {
            return true;
        }
        return false;           
    }
}

console.log("isSymbolPresentInString(\"abc\",\"a\") //",isSymbolPresentInString("abc", "a"));
console.log("isSymbolPresentInString(\"abc\",\"e\") //",isSymbolPresentInString("abc", "e"));

console.log("-------[ MISSION 2 ]-------");

function getSymbolIndex(string, symb) {

    for(let i = 0; i <= string.length; i++) {
        if(symb === string[i]) {
            return i;
        }
    }
    return -1;
}

console.log("getSymbolIndex(\"hello lol\",\"h\") //", getSymbolIndex("hello lol", "h"));
console.log("getSymbolIndex(\"hello lol\",\"l\") //", getSymbolIndex("hello lol", "l"));
console.log("getSymbolIndex(\"hello lol\",\"v\") //", getSymbolIndex("hello lol", "v"));

console.log("-------[ MISSION 3 ]-------");

function getNumberOfEven(n) {

    n = String(n);
    let resultOfCalc = 0;

    for(let key of n) {
        key % 2 === 0 ? resultOfCalc += 1 : resultOfCalc;
    }
    return resultOfCalc;
}

console.log("getNumberOfEven(223344)) //", getNumberOfEven(223344)); 
console.log("getNumberOfEven(111)) //", getNumberOfEven(111));

console.log("-------[ forEach ]-------");

function customForEach(array, callback) {
    
    for (let i = 0; i < array.length; i++) { 
        callback(array[i], i, array);
    }
}

function showDetailsOfArr(item, index, array) {
    console.log("Number: " + item + " index: " + index, array);
}

const numbers = [12, 14, 16, 18, 20];
customForEach(numbers, showDetailsOfArr);

console.log("-------[ map ]-------");

function customMap(array, callback) {

    const newNumbs = [];
    for (let i = 0; i < array.length; i++) {
        newNumbs.push(callback(array[i], i, array));
    }
}
    
function createNewArr(item) {
    return item * 2;
}

const numbs = [2, 4, 6, 8];
customMap(numbs, createNewArr);

console.log("-------[ filter ]-------");

function customFilter(array, callback) {
    
    const newUniversities = [];
    for (let i = 0; i < array.length; i++) { 

        if (callback(array[i])) {
            newUniversities.push(array[i]);
        }
    }
}

function getResultOfCheck(item) {

    if(item.length > 8) {
        return item; 
    }
}

const universities = ["Oxford", "Stanford", "Harvard", "Cambridge", "Princeton"];
customFilter(universities, getResultOfCheck);

console.log("-------[ some ]-------");

function customSome(array, callback) {
    
    for (let i = 0; i < array.length; i++) {     
        if(callback(array[i])){
            return true;
        }
    }
    return false;
}

function isMultipleOfThree(item) {
    return item % 3 === 0; 
}

const num = [2, 4, 5, 7, 8, 9];
customSome(num, isMultipleOfThree);

console.log("-------[ every ]-------");

function customEvery(array, callback) {
    
    for (let i = 0; i < array.length; i++) {     
        if(!callback(array[i])){
            return false;
        }
    }
    return true;
}

function isEven(item) {
    return item % 2 === 0; 
}

const numArr = [2, 4, 6, 8, 10, 7];
customEvery(numArr, isEven);