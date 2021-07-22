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

function introduce(name, birth, nationality, job) {
    console.log('안녕하세요! 반갑습니다.');
    console.log('제 이름은 ' + name + ' 입니다.');
    console.log('생년월일은 ' + birth + ' 이고');
    console.log('국적은 ' + nationality + ' 입니다.');
    console.log('직업은 ' + job + ' 입니다.');
    console.log('잘 부탁드립니다!');
};

console.log('introduce test');
introduce('붕붕이', '98.11.16', 'S. Korea', 'Student');
console.log('Test end');

// String ex
console.log(`한국 영화 역사상 아카데미상을 받은 것은 '기생충'이 처음이다.`);
console.log(`아리스토텔레스는 "인간은 사회적 동물이다."라고 말했다.`);

console.log(`영화 '베테랑'에서 "어이가 없네~"라는 대사가 유명했다.`);
console.log('영화 \'베테랑\'에서 "어이가 없네~"라는 대사가 유명했다.');



