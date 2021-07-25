// Add factorial function 
function factorial(n) {
    let result = 1;

    // 여기에 코드를 작성해 주세요.
    for (i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// for (let i = n; i >= 1; i--) {
//     result = result * i;
// }

// return result;
// }

// 테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));

// .... //

// Add calculateChange function

function calculateChange(payment, cost) {
    let change = payment - cost;
    
    // Add function to reduce overlaped code
    function billCounting(amount) {
        const count = Math.floor(change / amount);
        change = change - amount * count;
        return count
    }
    
    const fiftyCount = billCounting(50000);
    const tenCount = billCounting(10000);
    const fiveCount = billCounting(5000);
    const oneCount = billCounting(1000);
    
    console.log(`50000원 지폐: ${fiftyCount}장`);
    console.log(`10000원 지폐: ${tenCount}장`);
    console.log(`5000원 지폐: ${fiveCount}장`);
    console.log(`1000원 지폐: ${oneCount}장`);


    // console.log(`50000원 지폐: ${parseInt(change / 50000)}장`);
    // console.log(`10000원 지폐: ${parseInt(change % 50000 / 10000)}장`);
    // console.log(`5000원 지폐: ${parseInt(change % 50000 % 10000 / 5000)}장`);
    // console.log(`1000원 지폐: ${parseInt(change % 50000 % 10000 % 5000 / 1000)}장`);

}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);