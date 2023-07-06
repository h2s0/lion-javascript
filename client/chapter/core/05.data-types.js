/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */


// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

const empty = null;

console.log(typeof empty); // object



// 2. 값이 할당되지 않은 상태

let unknown;

console.log(typeof unknown);



// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const hi = new String('hello'); // 문자 생성자 : 잘 쓰진 않음
    // 객체의 능력 중에 string 메서드를 사용함
    // 객체 안에 있는 함수는 메서드라고 부른다.

const double = "hello";
const single = 'hello';
const backtick = `hello`;
    // 문자 안에 변수를 받아야하는 경우가 생긴다면 ${ 수식 } : 템플릿 리터럴 Template Literal 을 hello 뒤에 붙혀줌

console.log(typeof hi); // object
console.log(typeof double); // string



// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(123); // 숫자객체를 생성 = 숫자 생성자

const integer = 123;
const floating_point_number = 10.45;

console.log(typeof number); // object
console.log(typeof integer); // number

        // Object 라고 나오는 것은 명백한 언어의 오류.
        // typeof 가 정확하게 찾아주지 않기 때문에 나중에 Type Conversion 파트에서 학습할 것.



// 5. 길이에 제약이 없는 정수 (예: 암호 관련 작업에서 사용)
// const big = bigInt(123);

const bigInteger = 123n;
    // 큰 수를 만들 땐 숫자 쓰고 뒤에 n 을 붙히면 된다
    // 비교적 새로 생긴 개념이라 new 를 안붙혀도 생성가능



// 6. 참(true, yes) 또는 거짓(false, no)

const bool = true;

console.log(bool);          // true
console.log(typeof bool);   // boolean



// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const Obj = new Object({})
const obj = {}

console.log(obj);




// 8. 고유한 식별자(unique identifier)

const unique = Symbol('uid');

console.log(typeof unique); //symbol
    // 비교적 새로 생긴 개념이라 new 를 안붙혀도 생성가능





/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log(typeof (1 + 2) );

// 언어 상, 오류

const user = {
    name: 'heeso',
    age: 26,
    sayHi: function(){
        console.log('알루');
    }                              // user 의 sayHi 메써드
}

            // key:value 이렇게 입력하게 되는데,
            // value 값에 함수가 들어있으면 "메써드" 라고 부른다.

console.log( user );
console.log( user.name );
console.log( user.sayHi() ); // 함수라서 실행시켜주기 위해 () 넣음


// Object




// Array

const arr = [10,100,1000,1,2,3];

'li:nth-child(${ count +1})'

console.log( arr );
console.log( arr[3] );  // 첫번째를 0번째부터 시작

// function

function 붕어빵틀(재료){
    console.log(재료 + '맛 붕어빵');
}

const 팥붕어빵 = 붕어빵틀('팥');
const 슈크림붕어빵 = 붕어빵틀('슈크림');
const 피자붕어빵 = 붕어빵틀('피자');

console.log(슈크림붕어빵);

// this


