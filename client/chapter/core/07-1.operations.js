/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

    const a = '10';
    const b = '30';

// 단항 연산자

    let unary = +a;

// 이항 연산자

    let binary = a + b;

// 삼항 연산자

    // a === 10, true, false 로 피연산자가 3개
    //let ternary = a === 10 ? true : false;

    // Math.random() > 0.5, big, small
    let ternary = Math.random() > 0.5 ? 'big' : 'small'



// 산술 연산자: 덧셈

    let addition;

// 산술 연산자: 뺄셈

    let subtraction;

// 산술 연산자: 곱셈

    let multiplication;

// 산술 연산자: 나눗셈

    let division = 14 / 2;

// 산술 연산자: 나머지

    let remainder = 10 % 3;

    if(a % 2 === 0){
        console.log('짝수');
    }

// 산술 연산자: 거듭 제곱

    alert( 2 ** 2 );       // 4  (2 * 2)
    alert( 2 ** 3 );       // 8  (2 * 2 * 2)
    alert( 2 ** 4 );       // 16 (2 * 2 * 2 * 2)

    //let power = 2 ** 53 -1;
    let power = Math.pow(2,53) - 1; // 위에 있는거랑 똑같음


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
    let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
    let onlyWorkDefaultValues = [1,2,3] + [4,5,6];
    
    console.log( typeof onlyWorkDefaultValues );        // string

    // [1,2,3,4,5,6] 을 예상했겠지만 그렇게 나오지 않고 type 도 문자열로 나옴
    // 두 개의 배열을 합쳐주려면 배열의 메써드를 사용해야함 -> concat

    let first_array = [1,2,3];
    let second_array = [4,5,6];

    const new_array = first_array.concat(second_array);

    console.log(new_array);

    // 조금 old 해서 새로 나온 것을 써볼 것임 -> 구성되어 있는 것들을 하나하나 펼쳐 주는 것 : spread syntax

    console.log( [... first_array, ...second_array] );
    // 결과값 : [1,2,3,4,5,6]

    function sum (a,b,c, ...children){
        children
    }

    sum(1,2,3,4,5,6,7,)
    // a 에 1, b 에 2, c 에 3으로 들어 간 다음 나머지값들은 children 에 들어가 다른 또 하나의 배열을 이루게 됨


// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --

    let counter = 0;

    ++counter   // 선증가, 1
    counter++   // 후증가, 0
    counter     // 1




// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?

// count % 4 = 2 10을 4로 나눴을 때 나머지 값
// /= 나오면 재할당 해주는 거니까 뒤의 식에도 다 재할당 된 값을 넣어줌


/*
위의 식을 풀어서 써보자면,

let total = count % 4;
count = count / 2;
let pow = count ** 3;

total = total * count + pow;
*/