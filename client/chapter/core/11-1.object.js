/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조

let cssCode = /*css*/`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.

let cssMap = {
  position: 'fixed',
  zIndex: '10000',
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

    // authorization : 권한
    // authentication : 인증

    authUser = {
      uid : 'user-id-h2s0',
      name : 'so',
      email : 'h2s0_@naver.com',
      isSignIn : true,
      permission : 'paid'  // free | paid
    }


    console.log( authUser );


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

    // console.log( authUser.uid );
    // console.log( authUser.email );
    // console.log( authUser.name );



// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

    // console.log( authUser['uid'] );
    // console.log( authUser['email'] );
    // console.log( authUser['name'] );




// class 로 객체 만들기 : 객체지향

// 함수로 객체 만들기 : 함수지향

let calculateProperty = 'phone';   // phone | tel

    // function createUser(name,email){

    //   return {
    //     name : name,
    //     email : email,
    //   }
    // }

    // const user1 = createUser('진승','victory@naver.com');
    // const user2 = createUser('희소', 'happyCow@naver.com')


    function createUser(
      name,
      email,
      computedProp = 'phone',
      number = '010-0000-0000'
    ){

      return {
        name : name,
        email : email,
        [computedProp] : number
      }
    }

    const user1 = createUser(
      '진승',
      'victory@naver.com',
      'tel',
      '010-1234-5678'
    );






// 계산된 프로퍼티 (calcurate property)


// 프로퍼티 포함 여부 확인

    // key in user1

    // 자신 (own) 의 속성 (property) 을 가지고 (has) 있는지

    for ( let key in user1 ){
      if(Object.prototype.hasOwnProperty.call(user1,key)){
        console.log(key);
      }
    }


// 프로퍼티 나열

    // key 만 모아놓은 배열 만들기 Object.keys()
    let keyArray = Object.keys(authUser);

    // value 만 모아놓은 배열 만들기 Object.values()
    let valueArray = Object.values(authUser);


    function getProp(object){
      if(typeof object !== 'object'){
        throw new Error('getProp함수의 매개변수는 객체 타입이어야 합니다.');
      }
      return Object.keys(object)
    }
    
    console.log( getProp(authUser)); // ['uid', 'name', 'email', 'isSignIn', 'permission']


    console.log( keyArray );






//           null            없앰.
// 프로퍼티 제거 (remove) or 삭제 (delete)

authUser.name = null;

delete authUser.uid

console.log(authUser);


    // {name: null, email: 'h2s0_@naver.com', isSignIn: true, permission: 'paid'}
    // uid 가 감쪽같이 사라진 상황


// 객체를 넣고 지우고 싶은 property 이름을 입력하면 key 값을 제거해주는 함수를 만들어보렴 authUser 의 name 값이  null 이 되는거

  // function removeProperty(object,key){
  //   object[key] = null;

  //   return object;
  // }

  // removeProperty(authUser,'name');


// 다 없어지는거
function removeProperty(object,key){
  if(key === 'all'){
    for(let key of getProp(object)){
      object[key] = null;
    }
    return object;
  }
  object[key] = null;

  return object;
}

removeProperty(authUser,'name');



function deleteProperty(object,key){

  delete object[key];

  return object;
}




// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


// student 라는 객체를 만들거에요, name 은 위에서 정의한 변수를 쓰고 싶은거에요! value 값을 위에 준 이름으로 가져다쓸거다
const student = {
  name : name,
  email : email,
  authorization : authorization,
  isLogin : isLogin
}

console.log(student);

    // 너무 길어서 한줄로 써보자면
    // const student = { name , email , authorization , isLogin }


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {

  if(Object.keys(object).length === 0){
    return true;
  }

  return false;

  // 위의 식을 삼항연산자를 이용해 작성하면,
  // return Object.keys(object).length === 0 ? true : false;

  // length 값이 0 이라면 boolean 으로 반환하는 값이 true 니까 
  // return !(Object.keys(object)length); 로도 작성가능


}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */


let color = ['#ff0000', '#2b00ff', '#00ff2f'];

let [,,g] = color; // 이름을 마음대로 바꿀 수 있다.

for(let [key,value] of Object.entries(authUser)){
  console.log( key );
}

console.log( g );




const salaries = {
  권혜미 : 50,
  이수연 : 3000,
  강예나 : 500,
  김태일 : 700,
}

  // const 권혜미 = salaries.권혜미
  // const 이수연 = salaries.이수연
  // const 강예나 = salaries.강예나
  // const 김태일 = salaries.김태일

  // 원래 위에처럼 하나하나 해줘야하는데 아래처럼 한꺼번에 해주면

const {권혜미:미미 = 'mimi',이수연,강예나,김태일} = salaries;

  // 객체들을 분해해서 따로따로 받기 가능, 순서 상관없음 : 로 별칭주기 가능, 기본값 주기 가능

console.log( 미미 );

  // 변수처럼 사용할 수 있음


const salaries2 = {
  a:1,
  b:2,
  c:3,
  d:4
}


// 배열의 객체구조할당 : 순서가 정해져있다. 변수 이름을 바꿀 수 있다.







/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */




