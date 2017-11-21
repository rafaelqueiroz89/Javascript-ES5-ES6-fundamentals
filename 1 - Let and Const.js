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


//ES5
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