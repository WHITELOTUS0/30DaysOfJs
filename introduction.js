const PI = Math.PI;
console.log(PI)
console.log(Math.round(PI))
let num = [3, 5, 0, -9, -13, 6, 7];
console.log(Math.min(...num))
console.log(Math.floor(Math.random() * 11))
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))
let pattern = /love/gi
console.log(string.match(pattern))
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
const exampleString = "Sibomana Glorry"
console.log(exampleString.match(/a/gi)) // ["Sibomana", "Glorry"]

// let number = prompt("Enter number ")
// console.log(number)

// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box
const date = new Date();

