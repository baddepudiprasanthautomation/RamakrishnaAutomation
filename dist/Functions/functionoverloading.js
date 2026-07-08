"use strict";
// function overloading: the same function can accept different numbers or types of parameters while sharing single implementation
/*
the following implementation is  not possible in typescript
because it won't allow us to implement same function with different implementations
function greet(value:string)
{
    return value;
}


function greet(value:number)
{
    return value;
}
*/
//single implementation
function greet(value) {
    if (typeof value === "string") {
        console.log("the given arguement is string and it's value is  " + value);
        return value;
    }
    else if (typeof value === "number") {
        console.log("the given arguement is number and it's value is  " + value);
        return value;
    }
    else
        return value;
}
//implementation
function amountWithdrawl(value) {
    if (typeof value === "number") {
        if (value <= 100)
            console.log("please enter numbers greater than 100");
        else
            console.log("given card holder number  " + value);
        return value;
    }
    else {
        if (value.toLocaleLowerCase() === "atm")
            console.log("please enter valid input");
        else
            console.log("given card holder name is  " + value);
        return value;
    }
}
//usage
// amountWithdrawl(9999999)
// amountWithdrawl("Ramakrishna")
// amountWithdrawl(12345)
// amountWithdrawl("Test")
//amountWithdrawl(99)
amountWithdrawl(200);
//# sourceMappingURL=functionoverloading.js.map