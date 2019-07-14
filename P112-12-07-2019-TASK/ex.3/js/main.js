"use strict";

function userInput(uinput1, uinput2) {

    if (uinput2 <= uinput1) {
        return "2nd number should be greater than 1st number";
    }

    for (let i = uinput1; i < uinput2; i++) {
        let sum = 0;
        if (i % 2 == 0) {

            for (let evennum = i; evennum <= uinput2; evennum++) {

                sum += evennum;
                console.log(evennum);
            }
            console.log(`from - ${i} till - ${uinput2} exist numbers sum is ${sum}`);
        }
    }
}

// userInput(2, 10);
// userInput(10, 18);
// userInput(18, 26);
// userInput(26, 34);
// userInput(34, 42);
userInput(42, 50);
