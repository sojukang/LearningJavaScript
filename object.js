// // myVoca object for learning object
// let myVoca = {
//     function: '함수',
//     variable: '변수',
//     constant: '상수',
//     local: '지역의',
//     global: '전반적인'
// };

// // test code
// console.log(myVoca);
// console.log(myVoca.local);
// console.log(myVoca.constant);
// console.log(myVoca.function);

// ---- //

// // myVoca object 2 for learning amending properties of object
// let myVoca = {
//     function: '함수',
//     variable: '변수',
//     constant: '상수',
//     local: '지역의',
//     global: '전반적인',
// };

// // 1. 이미 외운 단어 3개를 삭제해 주세요.
// // 여기에 코드를 작성해 주세요.
// delete myVoca.function;
// delete myVoca.constant;
// delete myVoca.local;

// console.log(myVoca);
// console.log(myVoca.constant);


// // 2. 오늘 외울 단어 4개를 추가해 주세요.
// // 여기에 코드를 작성해 주세요.

// myVoca.extend = '확장하다';
// myVoca.export = '내보내다';
// myVoca.import = '불러오다';
// myVoca['default value'] = '기본값';

// console.log(myVoca);
// console.log(myVoca.export);


// // 3. default value의 뜻을 출력해 주세요.
// // 여기에 코드를 작성해 주세요.
// console.log(myVoca['default value']);


// ---- //

// myvoca object 3 for learning method
let myVoca = {
    // 코드를 작성해 주세요.
    addVoca: function(key, value) {
        myVoca[key] = value;
    },

    deleteVoca: function(key) {
        delete myVoca[key];
    },

    printVoca: function(key) {
        console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`);
    },

};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');

// .... //

// passChecker function for learning for ... in statement 
let hyesoonScore = {
    '데이터 모델링의 이해': 10,
    '데이터 모델과 성능': 8,
    'SQL 기본': 22,
    'SQL 활용': 18,
    'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
    '데이터 모델링의 이해': 14,
    '데이터 모델과 성능': 8,
    'SQL 기본': 12,
    'SQL 활용': 4,
    'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
    let totalScore = 0;
    for (subject in scoreObject) {
        totalScore += scoreObject[subject];
    }
    
    if (totalScore >= 60) {
        console.log('축하합니다! 합격입니다!');
    } else {
        console.log('아쉽지만 불합격입니다..');
    }
}

// test code
passChecker(hyesoonScore);
passChecker(minsoonScore);
