
////Lecture:variables
///*var name;
//console.log(name);

//var lastName = 'Smith';
//console.log(lastName);

//var age = 26;
//console.log(name);

//var fullAge = true;
//console.log(fullAge);*/

////Lecture:variables 2
//var name = 'John';
//var age = 26;
//var und;

//console.log(name + age);
//console.log(age + age);

//var fullAge = true;
//console.log(fullAge);

//console.log(name + ' is ' + age + ' years old');

//age = 'asdasd';

//console.log(age);
//console.log(und);

////var lastName = prompt('what is the last name?');
////console.log(lastName);

////alert(age);

//if (23 === '23')
//{
//    console.log('Something');
//}


/*function calculateAge(yearOfBirth)
{
    var age = 2016 - yearOfBirth;
    return age;
}

var ae = calculateAge(2000);

console.log(ae);

var names = ['teste', 'teste2', 'teste3'];
var age = new Array(1, 2, 3, 5);

for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}

for (var i = 0; i < age.length; i++) {
    console.log(age[i]);
}

 
var john = new Array('john', 'smith', 1990, 'teacher', false, false);
console.log(john);
var push = john.push('blue')
console.log(john);
john.unshift('Mr');
console.log(john);
john.shift();
console.log(john.pop());

console.log(john.indexOf(false));

console.log(push);*/

//var john = {
//    name: 'john',
//    yearofbirth: 1989,
//    isMarried: false,
//    array: new Array(123, 'asdas'),
//    calculateAge: function () {
//        return 2016 - this.yearofbirth;
//    }
//};

//john.age = john.calculateAge();


//console.log(john.age);

var a = 'Hello!';
first();

function first()
{
    var b = 'Hi!';
    second();

    function second()
    {
        var c = 'Hey!';
        third(c)
    }
}

function third(c)
{
    var d = 'John';
    console.log(a + c + d);
    console.log(this);
}