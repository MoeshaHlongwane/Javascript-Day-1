//Variables you use the let function to assign.
// let name = "Moesha"

// another way of making a variable 
// const name = "Moesha"

// let variable allows you to overwrite a variable 
// however with const, it doesnt allow you to make changes

//in javascript you can run a code without a variable, by using a place holder 

// the thrid way of assigning a name to a variable
// var is not used anymore
var names = "Moesha"

/*
commeting out multiple lines

*/ 
// we dont use var anymore in javascript because it is globally scoped. 

//this is the print out button. 
console.log(names)

//declaring numbers to a variable 
let num = 20
//or 
number= 40
//or just like python you can...
number+=40
//booleans 
let values = true // false
console.log(values)
//undefined
let blue
console.log(blue)

// null 
let value = null
console.log(value)

// to see type of data 
// let name = true 
// name = 5
// console.log(typeof name)

// f string
// let name = true
// // name 5
// console.log(`My name is ${name}`)
// // the alternative 
// console.log("My name is \n" + name + num) 
// We use the same methods to change values in javascript like we do in python

// Arrays are like lists in python 
// you have to name your variables like this "myArray" small cases followed by big later and then small again 
// camecase ---> myArray
// pascalcase ---> MyArray
// kebabcase ---> my-array (only use in vue)
//using underscores --->my_Array
let myArray = ["anything", "2", "true", "string"]
console.log(myArray[0]); //indexing 

//object literal - declare (make) an object

// A dictornary
let table = {
    material: "wood",
    no_of_legs: 4,
    occupied : true
}
// to access values in the dictornary, in javascript is called bracket notation
console.log(table["material"]);
// to copy code, you must press shift + ctrl + up or down button depending on where you want to repeat the code.

// dot notation
// console.log(table.material)

// destructuring 
// let material = table.material //wood
// console.log(material)

// you can do this aswell 
let {material, occupied} = table
// if we didnt declare the value of a variable, but we call it it will be undefined it will be like
let occupy  

console.log(material);
console.log(occupied)

// declaring a functions
// {} -> braces 
// () -> parentheses
// [] -> brackets
function greeting()
{
    let name = "Moesha"
    console.log(`This is a greeting ${name}` )
} 
greeting()
// add parameters(placeholders) and aurguments 
function hello(a,b)
{
    console.log(`This is hello ` + (a+b))
}
hello(3,4)

let number1 = 5
// pre increment
// ++number1
// post increment
// number1++
// --number1 pre decrement
// number1-- post decrement
console.log(--number1);
console.log(number1);
// loose comparison checks for the value, and strictly equaly too checks for the data types aswell. 





