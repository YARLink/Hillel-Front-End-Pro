"use strict"

function isObject(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj); 
}

function copy(data) {

    let copyData = {};
    if(isObject(data)) {
        for(const key in data) {
            copyData[key] = copy(data[key]); 
        }
    } else if(Array.isArray(data)){
        copyData = [];
        for(let i = 0; i < data.length; i++){
            copyData[i] = copy(data[i]);
        }
    } else {
        return data;
    } 
    return copyData; 
};

let passport = {
    init: {
        name: "Leo",
        surname: "Messi",
        fc: {
            spain: ["Barca", "Atletico"],
            france: ["PSG", "Lion"]
        } 
    }
};

let newPassport = copy(passport);
newPassport.init.name = "Cristiano";
newPassport.init.surname = "Ronaldo";
newPassport.init.fc.spain[1] = "Real Madrid";
console.log(passport);
console.log(newPassport);
