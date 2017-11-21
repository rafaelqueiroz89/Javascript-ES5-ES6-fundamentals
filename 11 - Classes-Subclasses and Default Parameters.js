
//Classes and subclasses / default parameters
//ES5

var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');


//ES6
class Person {
    constructor(name, yearOfBirth, job, gender = 'male'){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
        this.gender = gender;
    }

    calculateAge(){
        let age = new Date().getFullYear() - this.yearOfBirth;
        return age;
    }

    static greeting() {
        return 'Hey there I\'m static';
    }
}

class Athlete extends Person{
    constructor(name, yearOfBirth, job, gender, olympicGames, medals){
        //calling the parent class constructor
        super(name, yearOfBirth, job, gender);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        return `${this.name} has now ${this.medals} medals.`
    }
}

const john6 = new Athlete('John', 1989, 'swimmer', undefined, 3, 10);
console.log(john6);
console.log(john6.calculateAge());
console.log(Athlete.greeting());
console.log(john6.wonMedal()); 