// Utilize function example
// 여기에 logParticipant 함수를 작성해 주세요.

function logParticipant(userName) {
    console.log(userName + '(이)가 대화에 참여했습니다.');
};

// 테스트 코드
logParticipant('동수');
logParticipant('윤하');
logParticipant('재준');
logParticipant('동훈');
logParticipant('영희');
logParticipant('신욱');

function expressMultiplication(num1, num2) {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
};

// 테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);

// calculateRectangleArea function for learning a concept of diffrence between return and stream out

function calculateRectangleArea(width, height) {
    return width * height;
};

// 테스트 코드
let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);