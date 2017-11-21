
let firstName = 'John';
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

console.log(`${firstName} `.repeat(5));