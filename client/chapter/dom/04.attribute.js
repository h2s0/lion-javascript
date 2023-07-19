/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first');

console.log( first.class );

    // html 속성을 자바스크립트로 가져오면 프로퍼티


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인

    console.log( first.hasAttribute('class') );
        // 표준인지 비표준인지는 따지지 않고 속성의 존재 여부 확인
        // 사용예시 : 만약 해당 노드에 class 속성이 없다면 특정 class 를 넣어주세요

// - elementNode.getAttribute(name) – 특정 대상의 속성값을 가져옴

    console.log(first.getAttribute('size'));


// - elementNode.setAttribute(name, value) – 속성값을 변경함

    first.setAttribute('title','메시지');
    // 기존의 값이 사라지고 새로 할당됨, class를 수정할때에는 classList 에 접근해 add, remove 하는 것이 일반적 ( 값이 사라져서 위험함 )


// - elementNode.removeAttribute(name) – 속성값을 지움

    first.removeAttribute('title');


// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

    console.log( first.attributes );
    for(let value of first.attributes){console.log(value);}




first.getAttribute('id')



function getAttr(node,prop){
    // 0. 넘어온 대상이 문자인지 체크 ( typeof node )
    // 1. 체크 후 element node 로 변경해줘야함

    // const node = '.first';
    // const prop = 'id';
    // '.first' .getAttribute('id');

    if (typeof node === 'string'){
        node = getNode(node);
    }
    return node.getAttribute(prop);
}

getAttr('.first','class')



function setAttr(node,prop,value){

    if (typeof node === 'string'){
        node = getNode(node);
    }

    // 전달받은 prop의 타입이 string 이 아니면 에러
    if (typeof prop !== 'string'){
        throw new typeError('setAttr 함수의 두 번째 인수는 문자타입이어야 합니다.')
    }

    if(!node[prop]){
        node.dataset[prop] = value;
        return;
    }

    node.setAttribute(prop,value);

}

setAttr('.first','title','안녕하지못하세요');

function attr(node,prop,value){

if(!value){
    return getAttr(node,prop);
  }else{
    setAttr(node,prop,value);
  }
  
  return !value ? getAttr(node,prop) : setAttr(node,prop,value);
}

const arrowAttr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

console.log( first.dataset );