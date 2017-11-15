//IIFE

//Constructors
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//inheritance, this is like a method inside a class not inside the constructor.
Person.prototype.calculateAge = function(){
    console.log(new Date().getFullYear() - this.yearOfBirth); 
};

 Person.prototype.lastName = 'Smith';

 var john = new Person('John', 1990, 'teacher');
 var jane = new Person('Jane', 1982, 'teacher');
 var mark = new Person('Mark', 1440, 'teacher');

 john.calculateAge();
 jane.calculateAge();
 mark.calculateAge();

//Another way
 //object.create
 var personProto = {
    calculateAge: function(){
    console.log(2017 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
   {
       name: {value: 'Jane'},
       yearOfBirth: {value: 1990},
       job: {value: 'designer'}
   });

