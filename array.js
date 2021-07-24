// dataType array for learning acessing elements of array
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

for (index in dataType) {
    console.log(dataType[index]);
}

// .... //

// Array acessing example 

let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성해 주세요.
for (i in celsiusTemps) {
    fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5 ) + 32;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);