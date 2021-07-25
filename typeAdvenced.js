// interestCalculator function for learning data type
function interestCalculator(rate, payment, term) {
    let interest = Number(payment * term * (term + 1) / 2 * rate / 12).toFixed(0);
    console.log(interest);
}

// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);

// .... //

// Modifying string example

let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

let hyungdon = null;

// 코드를 작성해 주세요.
let startIndex = lyrics.indexOf('[형돈]');
let endIndex = lyrics.indexOf('[길]');

hyungdon = lyrics.slice(startIndex, endIndex);

// My code
// hyungdon = ['['];
// console.log(lyrics.indexOf('형돈'));
// let startIndex = lyrics.indexOf('형돈');
// for (i = startIndex; i < lyrics.length; i++) {
//     if (lyrics[i] !== '[') {
//         hyungdon.push(lyrics[i]);
//     } else {
//         break;
//     }

// }

// hyungdon = hyungdon.join('');

//test code
console.log(hyungdon);

// .... //

// array reference example 
let espresso = ['espresso'];

let americano = espresso.slice();
americano.push('water');

let caffeLatte = espresso.slice();
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요.
// let caffeMocha = espresso.slice();
// caffeMocha.splice(caffeMocha.length, 2, 'milk', 'chocolateSyrup');

// let vanillaLatte = espresso.slice();
// vanillaLatte.splice(vanillaLatte.length, 2, 'milk', 'vanillaSyrup');

let caffeMocha = caffeLatte.slice();
caffeMocha.push('chocolateSyrup');

let vanillaLatte = caffeLatte.slice();
vanillaLatte.push('vanillaSyrup');

// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);