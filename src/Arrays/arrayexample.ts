
//Arrays are used to store same data type in a single variable

//let numbers: number = 100,100; //not possible

let numbers : number[] = [1,2,3,4,5,6,7,8,9,10]; 

console.log(numbers);

//printing array numbers in sequence

let arrayLength = numbers.length;

// console.log(arrayLength); //length -> takes the number of elements present in array

// console.log(numbers[1]); //index -> it starts with zero

/*           0<10     */

for(let i =0;i< arrayLength ; i++)
{
    console.log(numbers[i])
}

//numbers[0] = 1 , numbers[1] = 2