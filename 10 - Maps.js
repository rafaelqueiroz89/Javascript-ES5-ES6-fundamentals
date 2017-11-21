//Maps - key-value data structure better than objects for
//hash maps, you can set anything inside the keys to storage  

const question = new Map();
question.set('question', 'What is the official name of ES6?');
question.set(1, 'Ecma Script 6');
question.set(2, 'Egma Script 6');
question.set(3, 'Ecma Script 2015');
question.set('correct', 3);
question.set(false, 'Wrong');
question.set(true, 'Correct');

console.log(question);
console.log(question.get(3));
console.log(question.size); 
console.log(question.delete(1));

question.forEach((value, key) => console.log(`Key: ${key}, Value: ${value}`));

//only show the alternatives
for (let [key, value] of question.entries()){
    if (typeof(key) === 'number'){
    console.log(`Key: ${key}, Value: ${value}`);
    }
}

const answer = parseInt(prompt('Write the correct answer'));

console.log(question.get(answer === question.get('correct'))); 