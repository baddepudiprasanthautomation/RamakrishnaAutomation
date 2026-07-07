export{};
//one the more used functions 

/*
   const funcctionName = ():returnType =>
   {
        //implementation
   }
*/

let greet = ():number =>
{
    return 2+3;
};

console.log(greet());


function add(number1:number,number2:number):number
{
    return number1+number2;
}

let result = add(10,30);

console.log(result);


const square = (num:number):number =>
{
    return num*num;
};

console.log(square(10))