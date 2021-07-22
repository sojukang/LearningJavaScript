console.log('Hello World!');
console.log(15);
console.log(10 + 5);
console.log(3 * 5);
console.log(30 / 2);
//console.log(3 * (4 + 1));

let espressoPrice = 3000;
let lattePrice = 4300;
let machaPrice = 4800;

console.log(espressoPrice);
console.log(lattePrice * 4 + machaPrice);
console.log(" ")

// declare function
function greetings(sentence) {
    console.log('Hi');
    console.log('안녕');
    console.log('Guten tag');
    console.log(sentence);
};

// call function
greetings("Hola");


function welcome(name) {
    console.log('안녕하세요 ' + name + '님!');
};

welcome('붕붕이');
welcome('씅주캉');

function printSquare(x) {
    console.log(x * x);
};

console.log(' ')
printSquare(2);
printSquare(5);
console.log(' ')

// Use Multiple parameters
function printSum(num1, num2) {
    console.log(num1 + num2);
};

console.log('printSum function test')
printSum(10, 5);
console.log(' ')

