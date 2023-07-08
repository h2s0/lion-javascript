/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
    creator: 'Brendan Eich',
    createAt: '1995.05',
    standardName: 'ECMAScript',
    currentVersion: 2023,
    // hasOwnProperty : 이게 왜 되냐!?
  };

  // in 문 : 객체 안에 내가 원하는 값 (property) 이 있어?

  const key = 'createAt';
  // const key = 'toString';
  // const key = 'valueOf';                 
                // 위 4개 말고 toString, valueOf 도 true 값으로 나옴
                // 객체가 가지고 있는 능력들도 다 조회하는 문제를 가짐

  console.log( key in javaScript );         // true


  
  // 객체의 속성(property) 포함 여부 확인 방법
  // - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
  
  Object.prototype.nickName = '히새';

  // 진짜로 내가 가지고 있는 속성만 체크할 수 있는 방법이 없을까?
  // 객체 자신의 속성인지 확인하는 방법
  // - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
  
  console.log( javaScript.hasOwnProperty(key) );

  // hasOwnProperty 는 자바스크립트 언어 자체, 찐객체의 능력이라 바로 접근하면 위험함. 만약에 위의 const 안에 hasOwnProperty : '23' 이런식으로 적어주게 되면 더 이상 능력이 유효하지 않게 됨.


  console.log( javaScript.hasOwnProperty.call(javaScript,key) );

  // 더 안전하게 자바스크립트가 가지고 있는 키만 수집을 하겠다고 해줌 , 설명못들었..ㅎㅎ




  
  // for ~ in 문
    // for in 문 : for 문을 돌면서 물어보는 것

  // - 객체 자신의 속성만 순환하려면?

  for (let key in javaScript){
    console.log(key);
  }

  // for 문을 통해서 javaScript 가 가지고 있는 모든 것을 검색해주세요
  //  Object.prototype.nickName = '히새'; 우리가 임시로 찐 객체에 접근해서 준 값도 나와버림. 이걸 해결하기 위해서 call 을 쓰면

  for (let key in javaScript){
    if(Object.prototype.hasOwnProperty.call(javaScript,key)){
        console.log(key);
    }
  }

  // 이렇게 나온다. 그러면 내가 임의의 값으로 준 nickName 이 사라진다.

  // 줄여쓰면 object.prototype 대신에 ({}) 입력가능



  // - 배열 객체 순환에 사용할 경우?

  const tens = [10, 100, 1000, 10000];

  for(let key in tens){
    console.log(tens[key]);
  }

    // 마찬가지로 Object.prototype.nickName = '히새'; 우리가 임시로 찐 객체에 접근해서 준 값도 나와버림.



// for ... in 은 객체를 순환하는 용도로 사용 가능
// 배열은 X