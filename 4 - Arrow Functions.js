
const years = [1990, 1975, 1982, 1937];

//ES5
//el is an element

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
var box5 = {
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
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            alert('Clicked ' + this.color + ' in the position: ' + this.position);
        });
    }
}

box6.clickMe(); 


//ES5

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

new Person('John').myFriends6(friends);