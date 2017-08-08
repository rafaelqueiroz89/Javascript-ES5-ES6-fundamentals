function Person(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.isFullAge = function () {
        if (new Date().getFullYear() - this.yearOfBirth >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
}

var john = new Person('John', 1990);
var marie = new Person('Marie', 1920);
var peter = new Person('Peter', 2010);

for (var i = 0; i < arrayPersons.length; i++) {
    console.log(arrayPersons[i].name + ' is full age? ' + arrayPersons[i].isFullAge());
}