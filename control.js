// checkHeight function for learning if statement
function checkHeight(height) {
    const LIMIT = 140;
    let passMessage = '탑승이 가능합니다.';
    let failMessage = '탑승이 불가능합니다.';

    if (height >= LIMIT) {
        console.log(passMessage);
    } else {
        console.log(failMessage);
    };
};

// 테스트 코드
checkHeight(141);
checkHeight(135);
checkHeight(170);

// printGrade function for learning else if statement
function printGrade(midtermScore, finalScore) {
    let totalScore = midtermScore + finalScore;

    if (totalScore >= 90) {
        console.log('A');
    } else if (totalScore >= 80) {
        console.log('B');
    } else if (totalScore >= 70) {
        console.log('C');
    } else if (totalScore >= 60) {
        console.log('D');
    } else {
        console.log('F');
    }
};

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);

// whatShouldICallYou function for learning if - else statement
// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
    // 여기에 코드를 작성해 주세요.
    if (myAge === yourAge) {
        return callFriend;
    } else if (myAge > yourAge) {
        if (yourGender === 'male') {
            return callYoungerBrother;
        } else {
            return callYoungerSister;
        }
    } else {
        if (yourGender == 'male') {
            return callOlderBrother;
        } else {
            return callOlderSister;
        }
    }
};


// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// checkPrice function for learning switch statement
// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
    switch(grade) {
        case 'VIP':
            console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
            break;
        case 'R':
            console.log(`${grade}석은 ${RPrice}만원 입니다.`);
            break;
        case 'S':
            console.log(`${grade}석은 ${SPrice}만원 입니다.`);
            break;
        case 'A':
            console.log(`${grade}석은 ${APrice}만원 입니다.`);
            break;
        default:
            console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
    } 
};

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');


//printTriangle function for learning for statement
function printTriangle(height) {
    for (i = 1; i <= height; i++) {
        console.log('*'.repeat(i));
    };

    // let message = '';
    // for (let i = 0; i < height; i++) {
    //     message += '*';
    //     console.log(message);
    // }
};


// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);

// printDivisor function for learning while statement
const N = 180;

function printDivisor(num) {
    i = 1;
    cnt = 0;
    while (i <= num) {
        if (num % i === 0) {
            console.log(i);
            cnt++;
        };
        i++;
    };
    console.log(`${N}의 약수는 총 ${cnt}개입니다.`)
};

// test code 
printDivisor(N);

// mutiplicationTable function for learning nested loop statement
function mutiplicationTable(num) {
    if (num < 1 || num > 9) {
        console.log('1부터 9까지의 수를 입력해주세요')
    }
    for (i = 1; i <= num; i++) {
        for(j = 1; j <= 9; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        };
    };
};

//test code
mutiplicationTable(9);

// Fibonacci function for learning control statement
function Fibonacci(num) {
    let previous = 0;
    let current = 1;
    let temp = 0;
    let cnt = 1;

    while (cnt <= num) 
    {
        console.log(current);

        temp = previous;
        previous = current;
        current = temp + current;

        cnt++;

    }

    
}

Fibonacci(50);
