

let names: string[] = ["Prasanth","Test","Ramakrishna","Automation"]

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

//modification

names[0] = "hyderabad";

console.log(names[0]);

//adding elements into array

names.push("Chennai","Bangalore");

//console.log(names);

//adding elements at starting
 
names.unshift("Andhra","Telangana");

//console.log(names);


//removing elements

names.pop(); //removes last element

//console.log(names);

names.shift(); // removes first element
//console.log(names);



//if name is equal to Ramakrishna then convert it to upper case

//advance for loop

for(let name of names)
{
    if(name.toLocaleLowerCase() === "ramakrishna")
        console.log(name.toUpperCase())
    else
        console.log(name)
}



//checking the data whenther it is available in array or not

let result: boolean = names.includes("prasanth");
console.log(result);

