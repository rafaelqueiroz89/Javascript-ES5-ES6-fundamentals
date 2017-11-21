// Rest parameters does the opposite as spread operator

//ES5 
//when I don't know the number of arguments passing
function isFullAge5(){
    //console.log(arguments);

    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(el){
        console.log((2017 - el) >= 18);
    })
}

isFullAge5(1990, 2009);
isFullAge5(1990, 2009, 1989); 

//ES6 
function isFullAge6(...years){
    years.forEach(el => {
        console.log(2017 - el >= 18)
    });
}

isFullAge6(1990, 2009); 