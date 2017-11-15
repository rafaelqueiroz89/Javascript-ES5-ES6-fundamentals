/* Lecture: let and const ES6

// ES5
var name5 = 'Jane smith';
var age = 23;

name5 = 'Jane Muller';
console.log(name5);


// ES6
const name6 = 'Jane Smith';
let age6 = 23;

name6 = 'Jane Miller';
console.log(name6);*/


/*ES5
function driversLicense5(passedTest){
    if (passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ', born in ' + 
    yearOfBirth + ', is now offiacly allowed to drive a car');
}

driversLicense5(true);

//ES6
function driversLicense6(passedTest){
    if (passedTest){
        let firstName = 'John';
        const yearOfBirth = 1990;
    }

    console.log(firstName + ', born in ' + 
    yearOfBirth + ', is now offiacly allowed to drive a car');
}

driversLicense6(true);

///////////////////
// Blocks and IIFEs

//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);

// ES5
(function(){
var c = 3;

})();

//console.log(c);*/

////////////////////////
// Strings

/*let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return (new Date()).getFullYear() - year;
}

//ES5
console.log('this is ' + firstName + ' ' + lastName + ' , he is ' + calcAge(yearOfBirth));

//ES6
console.log(`This is ${firstName} ${lastName}, he is ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.includes(' '));
console.log(n.endsWith('oh'));

console.log(`${firstName} `.repeat(5));*/


//////////////////////////
// Arrow Functions: Basics

//const years = [1990, 1975, 1982, 1937];

//ES5
//el is element
/*
var ages5 = years.map(function(el) {
    return 2016 - el;
});

console.log (ages5);


//ES6

let ages6 = years.map(el => 2017 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}.`);
console.log(ages6);*/

//ES5
/*var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this; //scope oriented hack

        document.querySelector('.green').addEventListener('click', function(){
            alert('Clicked ' + self.color + ' in the position: ' + self.position);
        });
    }
}

box5.clickMe();*/

//ES6
/* const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            alert('Clicked ' + this.color + ' in the position: ' + this.position);
        });
    }
}

box6.clickMe(); */


//ES5
/*
function Person(name){
    this.name = name;
}

Person.prototype.myFriends5 = function(friends){

    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
} 

var friends = ['Bob', 'Jane', 'John'];
new Person('John').myFriends5(friends);

// ES6
var friends = ['Bob', 'Jane', 'John'];

function Person(name){
    this.name = name;
}

Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name}  is friends with ${el}`);
    console.log(arr);
}

new Person('John').myFriends6(friends);*/


/// Destructuring
 //ES5

//var john = ['john', 26];
//var name = john[0];
//var age = john[1];

//ES6
//const [name, age] = john;

//console.log(name);
//console.log(age);
 