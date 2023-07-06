/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}


// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress = ( emailAddress === undefined || emailAddress === null ) ? 'user@company.io' : emailAddress;

        //  () 안의 둘 중 하나라도 true 가 나오면 첫번째:'user@company.io'를 사용하고, 아니면 



// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';

console.log( receivedEmailAddress );

        // 결과값이 똑같음

        // 빈 문자, 0 를 입력하면 ?? 에서는 빈 문자, 0 그대로 출력,
        // 사용자가 의도해서 넣었다고 생각하기 때문

        // 빈 문자, 0 를 입력하면 || 에서는 불린형으로 변형, false 값이 되어 뒤에 있는 값이 출력됨



/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환



const WIDTH = '10px';


console.log( null || WIDTH );                 // 10px
console.log( null ?? WIDTH );                 // 10px

console.log( undefined || WIDTH );            // 10px
console.log( undefined ?? WIDTH );            // 10px

console.log( Boolean || WIDTH );              // 10px
console.log( Boolean ?? WIDTH );              // false

console.log( '' || WIDTH );                   // 10px
console.log( '' ?? WIDTH );                   // ''



// Logical Assignment Operators

let x;
let y;

x ||= y; // x 가 false 일 때 y 값을 x 에 할당

x &&= y; // x 가 true 일 때 y 값을 x 에 할당

x ??= y; // x 가 undefined, null 일 때 y 값을 x 에 할당



let title;

title ||= '제목입니다'

console.log( title );