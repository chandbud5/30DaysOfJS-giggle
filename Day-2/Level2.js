let quote = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'

console.log(quote);

let statement = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(statement);

console.log(typeof '10' == typeof 10);
console.log(typeof parseInt('10') == typeof 10);

console.log(parseFloat('9.8') == 10)
console.log(Math.ceil(parseFloat('9.8')) == 10);

console.log('Python'.includes('on'));
console.log('jargon'.includes('on'));

let sentence = 'I hope this course is not full of jargon.'
console.log(sentence.includes('jargon'));

console.log(Math.floor(Math.random()*101));

console.log(Math.floor(Math.random()*50 + 50));
console.log(Math.floor(Math.random()*256));

console.log('JavaScript'[Math.floor(Math.random()*'JavaScript'.length)]);

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n');

sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.substr(31, 23));


