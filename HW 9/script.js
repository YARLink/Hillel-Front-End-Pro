"use strict"

//. V1

function calcSum(){

    let count = 0;
    return function(a){
        return count += a;
    }
}
  
  let sum = calcSum();

//. V2

function calcSum2() { 

    let result = [];
    return function (a) {
        result.push(a);
        return result.reduce(function(acc, num) {
            return acc + num;
        }); 
    };
}

  let sum2 = calcSum2();
