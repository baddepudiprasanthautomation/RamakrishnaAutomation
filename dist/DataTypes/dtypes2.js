"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//null -> intentionally we are setting value to have no value
let name = null;
console.log(name);
name = "prasanth";
console.log(name);
//undefined -> means a variable has been declared but no value has been assigned.
let city;
console.log(city);
//any -> accepts any type of value and disables typescript's type checking
let data;
data = 10;
data = "prasanth";
data = true;
//unknown -> can also be used to store any value, we must check its usage before using it.
let value;
value = "Hello";
value = 100;
console.log(typeof (value));
//# sourceMappingURL=dtypes2.js.map