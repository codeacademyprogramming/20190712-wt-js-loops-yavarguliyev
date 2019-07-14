"use strict";

function compare(num1, num2){

    if (num1 < 0 && num2 < 0) {
        return (num1 * (-1) + " " + num2 * (-1));
    }
    if(num1 < 0 || num2 < 0){
        return (`${num1 + 0.5} && ${num2 + 0.5}`); 
    }
    if(!(num1 >= 0.5, 2.0 && num2 <= 2 )) {
        return num1 / 10 + " " + num2 / 10;
    }
}

console.log( compare(-3, -6) );
console.log( compare(-2, 4) );
console.log( compare(5, 8) );