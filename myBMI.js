// Receive name, weight, tall, Out BMI 
function bmiCalculator(name, weight, tall) {
    let bmi = weight / (tall * tall / 10000);
    console.log(name + '님의 체질량지수는 ' + bmi + '입니다.');
};

// 테스트
bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);