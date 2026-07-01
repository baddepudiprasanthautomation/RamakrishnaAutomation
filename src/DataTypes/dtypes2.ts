export{};

//null -> intentionally we are setting value to have no value

let name = null;

console.log(name)

name = "prasanth"

console.log(name)


//undefined -> means a variable has been declared but no value has been assigned.

let city;

console.log(city);

//any -> accepts any type of value and disables typescript's type checking

let data : any ;//declaration

data = 10;  //initialization
data = "prasanth";
data = true;

console.log("data type of any is  "+typeof(data));

//unknown -> can also be used to store any value, we must check its usage before using it.

let value:unknown;

value = "Hello";
value = 100;
value= true;
value = "Test";
value = 200;


if(typeof value === "string")
    console.log(value.toUpperCase());
else if (typeof value === "boolean")
    console.log(value)
else if(typeof value ==="number")
    console.log("given data is number type data")
else
    console.log("none of the above")

console.log(typeof(value));

//usage -> unknown is better to use it


//type inference -> type script automatically tells that the type of variable based on the value assigned to it

let source = 123;

//type annotations -> explicitly tells compiler that what type of variable, parameter or return value should be


let information: string = "Telangana"

