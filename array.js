// dataType array for learning accessing elements of array
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

for (index in dataType) {
    console.log(dataType[index]);
}

// .... //

// Array accessing example 

let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

for (i in celsiusTemps) {
    fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5 ) + 32;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);

// .... //

// splice method for learning array amending
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요.
fruits.splice(1, 1, '사과', '청포도');


// fruits 배열의 첫 번째 요소를 삭제해 주세요.
fruits.splice(0, 1);


// ages 배열에 마지막 요소를 삭제해 주세요.
ages.splice(ages.length - 1, 1);


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
ages.splice(2, 2, 26, 28);


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);


// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
numbersLen = numbers.length;
for (i = 0; i < numbersLen; i++) {
    if (numbers[i] % 2 === 1) {
        numbers.splice(i, 1);
        i--; // 이렇게 index 밀림을 처리할 수 있다.
    }
}
 

// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);
