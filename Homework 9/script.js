"use strict"

function calcSum() { 

    let result = [];
    return function (a) {
        result.push(a);
        return result.reduce(function(acc, num) {
            return acc + num;
        }); 
    };
}

  let sum = calcSum();
  console.log(sum(3));
  console.log(sum(5));
  console.log(sum(20));