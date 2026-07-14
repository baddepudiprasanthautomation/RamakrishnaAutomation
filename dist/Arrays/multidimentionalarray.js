"use strict";
// multidimentional array -> contains one or more arrays as its elements
//                        -> data will be stored in rows and columns
// [ 1   3]
// [ 4   6]
const marks = [
    [90, 99], //row 1    [90(0,0)   99(0,1)]
    [23, 67] //row 2    [23(1,0)   67(1,1)]
];
console.log(marks[0][0]);
console.log(marks[0][1]);
console.log(marks[1][0]);
console.log(marks[1][1]);
//modification
marks[0][0] = 100;
console.log(marks[0][0]);
//adding new row
marks.push([99, 99]);
console.log(marks);
//new column
marks[0].push(122);
marks[1].push(199);
console.log(marks);
//array of string
let students = [
    ["India", "china"],
    ["Hyderabad", "Chennai"]
];
console.log(students);
//# sourceMappingURL=multidimentionalarray.js.map