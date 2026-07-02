export{};


//1.number return type
//                                       return type
function add(num1:number,num2:number):   number
{
    //let result = num1+num2;
    //return result;
    return num1+num2;
}

console.log(add(99,501));

//2. string return type

function printName(name:string)
{
    let result = name.toUpperCase();
    return result;
   // return name.toUpperCase();
}

console.log(printName("abcdefghijklmnopqrstuvwxyz"))


//3. boolean return type

function boolExample(age:number) : boolean
{
    if(age>=10)
        return true;
    else
        return false;
}

console.log(boolExample(11));


//4. void -> it will not retun any type of data

function test(id:number) : void
{
    let res =id;
   // console.log(id)
   // return id; ->compile error
}

console.log(test(123));