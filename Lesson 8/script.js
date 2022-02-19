"use strict"

function copy(data) {

    if(typeof data === "object" && data !== null) {
        let copyData = Array.isArray(data) ? [] : {};
        for(const key in data) {
            copyData[key] = copy(data[key]); 
        }
        return copyData;
    } else {
        return data;
    }   
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

















//_______________________________________________________________________________


// function isEqual(a, b) {

//     if (calcObjKeys(a) === calcObjKeys(b)) {

//         for (let key in b) {
//             const bothObj = typeof(a[key]) === "object" && typeof(b[key]) === "object";            
//             if ((a[key] !== b[key] && !bothObj) || (bothObj && !isEqual(a[key], b[key]))) {
//                 return false;
//             }  
//         }
//         return true;
//     } 
//     return false;
// }

// console.log(a);
// console.log(b); 
// console.log("a === b ", isEqual(a, b));