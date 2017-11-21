//ES5
for (var i = 0; i < boxes.length; i++){
    if (boxes[i].className === 'box blue'){
        continue;
    }

    boxes[i].textContent = 'I changed to blue';
} 

//ES6
for (const el of boxes){
    //or "if (el.className.includes('blue')){}"
    if (el.className === 'box blue'){
        continue;
    }
    
    el.textContent = 'I changed to blue!';
} 

//ES5 determine which children is full age
var ages = [12, 17, 8, 10, 22];

var full = ages.map(function(el){
    return el >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(el => el>= 18)); //find position
console.log(ages.find(el => el>= 18)); //find element 
