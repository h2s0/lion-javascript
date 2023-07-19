/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

console.log( first.className );         // getter
// console.log( first.className = 'box');  // setter

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add          클래스명 추가
// remove       클래스명 제거
// toggle       넣었다 빼기
// contains     클래스명 확인

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active'); // boolean 값 반환
console.log(first.classList.contains('is-active'));



function addClass(node,className){

    if(typeof node === 'string') node = getNode(node);

    if(typeof className !== 'string'){
        throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
    }

    node.classList.add(className);
}

addClass('.first', 'hello');




/* 스타일 변경 방법 --------------------------------------------------------- */


first.style.backgroundColor = 'orange';     // setter : 배경색을 설정해줌
console.log( first.style.backgroundColor ); // getter : 콘솔창에 가져옴

console.log( first.style.fontSize );

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log( getComputedStyle(first).fontSize );
console.log( getComputedStyle(first).getPropertyValue('font-size') );
                                            // getter 역할



                                            

// 객체의 속성에 접근할 때 .표기법 사용 불가능
// computed property [ ] 사용해야함

function setCss(node,prop,value){

    if(typeof node === 'string') node = getNode(node);

    // prop 값이 CSS 속성값이 아니라면, 에러사인 띄우기
    if(!(prop in document.body.style)){
        throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
    }

    if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값입니다.');

    node.style[prop] = value;
}

setCss(first,'color','green');