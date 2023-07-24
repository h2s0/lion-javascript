import { diceAnimation, getNode, getNodes } from "./lib/index.js";


// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
//              - 주사위 굴리기 버튼을 가져온다.
//              - 이벤트 핸들러를 연결한다.
//              - 애니메이션 코드를 작성한다.
// 3. 애니메이션 토글 제어
// 4. 클로저 + IIFE 를 사용한 변수 보호

// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hidden 속성 제어하기
//              - 기록 버튼 이벤트 바인딩
//              - hidden 속성 false 만들기
//              - 초기화 버튼 이벤트 바인딩
//              - hidden 속성 true 만들기



// 버튼 가져오는 방법 1. .children[0], 2. 클래스명 넣어주기 3. 이벤트위임 4. 배열 구조 분해 할당
const [startButton,recordButton,resetButton] = getNodes('.buttongroup > button');
const recordListWrapper = getNode('.recordListWrapper');


// 진짜 쉬운 과제

// disableElement(node)
// enableElement(node)
// isDisableState(node) => true / false

// visibleElement(node)
// invisibleElement(node)
// isVisibleState(node) => true / false 값을 반환


const handleRollingDice = ((e)=>{

    let isClicked = false;
    let stopAnimation;  
  
    return ()=>{
  
      if(!isClicked){ // 주사위 play
        stopAnimation = setInterval(diceAnimation, 100);
        recordButton.disabled = false;
        resetButton.disabled = false;
  
      }else{ // 주사위 stop
        clearInterval(stopAnimation)
        recordButton.disabled = false;
        resetButton.disabled = false;
      }
        // 클릭하면 if절, else절이 번갈아 가면서 나오게 된다.
        // false 들어가 실행 후 반대로 뒤집어 주고 다음 클릭시 반대로 뒤집은 값이 if 절로 들어가 다른 결과출력 반복.
      isClicked = !isClicked;
    }
  })()


  let count = 0;
  let total = 0;

  function handleRecord(){
    recordListWrapper.hidden = false;

    // 큐브의 data-dice 값을 가져오기
    const diceValue = attr('#cube','data-dice');

    // 뿌려줄 템플릿 만들기
    const template = /* html */`
    <tr>
        <td>${++count}</td>
        <td>${diceValue}</td>
        <td>${total += diceValue}</td>
    </tr>
    `
    // record list 안의 tbody 안에 template 을 뿌려줄것이다.
    insertLast('.recordList tbody', template)
   

  }

  function handleReset(){
    recordListWrapper.hidden = true;
    recordButton.disabled = true;
    resetButton.disabled = true;

    clearContents(tbody);
    
    count = 0;
    total = 0;
  }
  
  

startButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resultButton.addEventListener('click',handleReset);



























// 함수 쪼개기 한 결과 코드 + 최종

// import { attr, clearContents, diceAnimation, endScroll, getNode, getNodes, insertLast } from "./lib/index.js";


// // [phase-1] 주사위 굴리기
// // 1. dice animation 불러오기
// // 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
// //       - 주사위 굴리기 버튼을 가져온다.
// //       - 이벤트 핸들러를 연결한다.
// //       - 애니메이션 코드를 작성한다.
// // 3. 애니메이션 토글 제어 
// // 4. 클로저 + IIFE 를 사용한 변수 보호


// // [phase-2] 레코드 리스트 control / view
// // 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// // 2. hidden 속성 제어하기
// //       - 기록 버튼 이벤트 바인딩
// //       - hidden 속성 false 만들기 
// //       - 초기화 버튼 이벤트 바인딩 
// //       - hidden 속성 true 만들기
// // 3. 주사위 값을 가져와서 랜더링
// // 4. 스크롤 위치 내리기
// // 5. 함수 분리

// // [phase-3] 초기화 시키기
// // 1. 아이템 지우기



// // 배열 구조 분해 할당


// const [startButton,recordButton,resetButton] = getNodes('.buttonGroup > button');
// const recordListWrapper = getNode('.recordListWrapper');
// const tbody = getNode('.recordList tbody');


// // 진짜 진짜 쉬운 과제

// // disableElement(node)
// // enableElement(node)
// // isDisableState(node)  => true / false

// // visibleElement(node)
// // invisibleElement(node)
// // isVisibleState(node) => true / false

// let count = 0;
// let total = 0;

// function createItem(value){
//   // 뿌려줄 템플릿 만들기
//   return /* html */`
//     <tr>
//       <td>${++count}</td>
//       <td>${value}</td>
//       <td>${total += value}</td>
//     </tr>
//   `
// }

// function renderRecordItem(){

//   // 큐브의 data-dice 값 가져오기
//   const diceValue = +attr('#cube','data-dice');

//   insertLast(tbody,createItem(diceValue));

//   endScroll(recordListWrapper);

// }

// const handleRollingDice = ((e)=>{

//   let isClicked = false;
//   let stopAnimation;  

//   return ()=>{

//     if(!isClicked){ // 주사위 play
//       stopAnimation = setInterval(diceAnimation, 100);
//       recordButton.disabled = true;
//       resetButton.disabled = true;


//     }else{ // 주사위 stop
//       clearInterval(stopAnimation)
//       recordButton.disabled = false;
//       resetButton.disabled = false;

//     }

//     isClicked = !isClicked;
//   }
// })()

// // 회차 늘어날 수 있도록
// // diceValue 들어갈 수 있도록
// // total 값이 나올 수 있도록

// function handleRecord(){
//   recordListWrapper.hidden = false;
//   renderRecordItem()
// }

// function handleReset(){
//   recordListWrapper.hidden = true;
//   recordButton.disabled = true;
//   resetButton.disabled = true;

//   clearContents(tbody);
  
//   count = 0;
//   total = 0;

// }

// startButton.addEventListener('click',handleRollingDice);
// recordButton.addEventListener('click',handleRecord);
// resetButton.addEventListener('click',handleReset);