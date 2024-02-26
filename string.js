//ends with
const str1 = 'We are the best!';

console.log(str1.endsWith('best!', 5));
// expected output: false


console.log(str1.endsWith('best!', 18));
// expected output: true


console.log(str1.endsWith('best!'));
// expected output: true

const text= 'The ES6 is short for ECMAScript  .';

const index = 4;
//char at 
console.log(`The character at index ${index} is ${text.charAt(index)}`);
// expected output: "The character at index 4 is E"
const str= 'The ES6 is short for ECMAScript.';
console.log(str.slice(21));
// expected output: "ECMAScript."

console.log(str.slice(4, 17));
// expected output: "ES6 is short"

console.log(str.slice(-7));
// expected output: "Script"
