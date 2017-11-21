
const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

 boxesArr5.forEach(function(cur) { 
    cur.style.backgroundColor = 'dodgerBlue';
});
     

//Es6
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerBLue');