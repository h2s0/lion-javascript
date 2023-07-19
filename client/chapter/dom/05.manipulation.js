/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */


/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제


/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거


/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)


/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML
// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

const body = document.body;

body.insertAdjacentHTML('beforeend','<div class="box">상자</div>')
// 자바스크립트 동적 태그를 만들고 원하는 곳에 뿌려주려고 : 동적 렌더링을 하기 위해
// ( 포지션, 텍스트:문자열 형태 )

const h1 = getNode('h1');
const template = /* html */`
    <div class="box">${ 10 + 30 }</div>
`

h1.insertAdjacentHTML('beforebegin', template)
// 타켓.방법(위치,랜더링항목)




const data = ['laundry', 'game', 'youtube', 'walk'];

/*

1. 태그 생성하기
2. 태그 안에 아이템값 넣기
3. 생선된 태그를 배열로 내보내기
4. 내보낸 배열 순환하기
5. 반복문 안에서 랜더링하기

*/

// 1. 태그 생성하기
// 2. 태그 안에 아이템값 넣기 : ${data[0]}
    `<li>${data[0]}</li>`

    // 이 과정을 4번째까지 해줘야하는데 이 때 사용할 수 있는 방법은 아래와 같다.

        // forEach = 반환 X
        // reduce 아무거나

        // filter - 배열을 반환 : 무언가를 걸러낼 때
        // map - 배열을 반환

        // for 문

        // -> map 을 사용할 것이다 : 이유는 뭐였더라?

const todo = getNode('.todo');

// 3. 생선된 태그를 배열로 내보내기
    const todoList = data.map((item)=>{
        return `<li>${item}</li>`
    })

    console.log( todoList );


// 4. 내보낸 배열 순환하기
    todoList.forEach((item)=>{

// 5. 반복문 안에서 랜더링하기 
        todo.insertAdjacentHTML('beforeend',item)
    })



// 6. 랜더링

todo.insertAdjacentHTML('beforeend', todoList)


// react 에서는 4,5 생략가능


function insertLast(node,text){
    if(typeof node === 'string') node = getNode(node);

    if(node.nodeType !== document.ELEMENT_NODE){
        throw new ReferenceError('insertLast 함수의 첫 번째 인수는 ELEMENT NODE 여야 합니다.');
    }
    node.insertAdjacentHTML('beforeend',text);
}

function insertBefore(node,text){
    if(typeof node === 'string') node = getNode(node);
    
    if(node.nodeType !== document.ELEMENT_NODE){
      throw new ReferenceError('insertBefore 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
    }
    node.insertAdjacentHTML('beforebegin',text);
  }
  
  function insertFirst(node,text){
    if(typeof node === 'string') node = getNode(node);
    
    if(node.nodeType !== document.ELEMENT_NODE){
      throw new ReferenceError('insertFirst 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
    }
    node.insertAdjacentHTML('afterbegin',text);
  }
  
  function insertAfter(node,text){
    if(typeof node === 'string') node = getNode(node);
    
    if(node.nodeType !== document.ELEMENT_NODE){
      throw new ReferenceError('insertAfter 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
    }
    node.insertAdjacentHTML('afterend',text);
  }

  function insert(node,text,position = 'beforeend'){
    
  }

// beforebegin => insertBefore
// afterbegin => insertFirst
// beforeend => insertLast
// afterend => insertAfter