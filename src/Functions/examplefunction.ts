
//function: it performs specific action based on the user input

//function declaration

/*

    function functionName(parameter1:type,parameter2:type): returnType
    {
        return value
    }
*/

//function with return type void
function addition(number1: number,number2:number):void
{
    console.log(number1+number2);
}

addition(10,20);


//function with numbe type as return type

function add(number1: number,number2:number): number
{
    let result = number1+number2;
    return result;
}

let output = add (100,200);

console.log("output is  "+output);