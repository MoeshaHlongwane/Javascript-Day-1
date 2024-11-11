let myString = "Something"
// the .length function checks the number of characters in a string 
console.log(myString.length); 
// you can also set tit in the variable 
let length = myString.length

// the functions that makes the string lower case 
let Case = myString.toLowerCase
// makes to uppercase 
let upperCase = myString.toUpperCase

// split function, changes a string into a list/Array(converts the string to an array)
// it can split at a specific places, in this case it will split at e, the e will be removed 
let split_1 = myString.split('e')
console.log(split_1);

// if you want to split everything in a string you will say 
// let split_1 = myString.split('')

// applying the index function in the split function and you want it in lowercase, and access the first item
let split = myString.toLowerCase().split("")[0]
console.log(split);







