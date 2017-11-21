function addFourAges (a,b,c,d){
    return a+b+c+d;
}

//array in ES5, but can be used in ES6 as well, but with let or const
var ages = [18, 30, 12, 21]; 

//ES5
var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages); //this is a spread operator
console.log(sum3);

//Joining arrays with spread operator
const familySmith = ['John', 'Jane', 'Mark'];
const familyMuller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMuller];
console.log(bigFamily);

//another eg.
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

//spread operator only works with objects that have more than 1 item
const all = [h, ...boxes]; 
Array.from(all).forEach(el => el.style.color = 'white'); 