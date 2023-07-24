import { jujeobData } from './data/data.js';
import { showAlert } from './lib/dom/showAlert.js';

import { 
  getNode, 
  getRandom, 
  addClass,
  removeClass,
  insertLast,
  clearContents,
  isNumericString,
  shake,
  copy,
  toggleClass,
 } from './lib/index.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');

// [phase-1]

// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
// 2. nameField에 있는 값을 가져와 주세요.
// 3. jujeob 데이터 가져오기
// 4. jujeobData에서 랜덤한 주접 한개를 가져와야함.
// 5. pick 항목을 result에 랜더링해 주세요.

// [phase-2] : 잘못된 정보를 입력받았을 때 조건처리

// 1. 아무 값도 입력 받지 못했을 때 예외처리
// 2. 공백 문자를 받았을 때 예외처리  replace => regEXP
// 3. 숫자형 문자를 받았을 때 (e.g  123, 기안84)

// [phase-3]
// 1. 잘못된 정보를 입력받으면 사용자에게 알려주세요.
// 2. 재사용 가능한 함수로 분리 ( showAlert )
// 3. 

function handleSubmit(e) {
  e.preventDefault();

  let name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    showAlert('.alert-error', '이름을 입력해주세요', 2000);

    shake.restart();

    // gsap.to('form',{
    //     duration: 0.1,
    //     x: -10,
    //     repeat: 5,
    //     yoyo: true, // 돌아오는 것 까지가 한 번
    //     clearProp: 'x',
    //   })



        // showAlert 함수에 포함
    // addClass('.alert-error', 'is-active');
    // setTimeout(()=>{
    //     removeClass('.alert-error', 'is-active');
    // },2000)

    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '제대로 된 이름을 입력해주세요', 2000);
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}


// 이름을 제대로 입력 했을 때 클립보드에 복사가 될 수 있도록.
// let state = false;

// state = true;

// if(state){  ...logic }

function handleCopy(){
    const text = resultArea.textContent;

    // 핸들카피라는 함수는 네비게이터의 클립보드 ( 임시저장소 ) 의 writeText 를 이용하여 resultArea 에 전달 된 textContent 를 복사하는 함수

    // promise then 
    copy(text).then(()=>{
        showAlert('.alert-success','클립보드 복사 완료!');
      })

}


submit.addEventListener('click', handleSubmit);
resultArea.addEventListener('click', handleCopy);