/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'less is more.';


// length 프로퍼티

    let stringTotalLength = message.length;
    console.log(stringTotalLength)



// 특정 인덱스의 글자 추출

    let extractCharacter = message[10];
    console.log(extractCharacter)


    // 문자열 중간 글자를 바꾸는 건 불가능 
    // (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
    let immutableChangeCharacter;



// 부분 문자열 추출

    let slice = message.slice(1,3);
        // 숫자하나만 적으면 거기부터 끝까지 다! = 첫번째 인자가 시작 위치
        // message.slice(시작위치,끝위치)
        // message.slice(8) : 8부터 끝까지 다
        // message.slice()
    console.log(slice)

    let subString = message.substring(1,3);
    console.log(subString)


    let subStr = message.substr(1,3);
    console.log(subStr)




// 문자열 포함 여부 확인

    let indexOf = message.indexOf('i');
    console.log(indexOf);    // 포함되어있다면 몇번째인지, 포함되어있지 않으면 -1 값 반환

    let lastIndexOf = message.lastIndexOf('m');
    console.log(lastIndexOf)

    let includes = message.includes('Less');
    console.log(includes)       // true / false

    let startsWith = message.startsWith('Less');
    console.log(startsWith)     //true / false

    let endsWith = message.endsWith('more.');
    console.log(endsWith)       //true / false



// 공백 잘라내기 - 사용자에게 값을 받아올 때 사용

    let trimStart = message.trimStart();
    let trimEnd = message.trimEnd();

    let str = '           d   k f j                k          '

    
    
    function normalText(string){
        return string.replace(/\s*/g,'')
      }
      normalText(str)

    let trim = str.trim(str);
    

    console.log(trim)




// 텍스트 반복

    let repeat = message.repeat(3);
    console.log(repeat)



// 대소문자 변환

    let toLowerCase = message.toLowerCase();
    console.log(toLowerCase)
    
    let toUpperCase = message.toUpperCase();
    console.log(toUpperCase)



// 텍스트 이름 변환 유틸리티 함수

    function toCamelCase(string) {
        return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
    }
  
    function toPascalCase(string) {
        let name = toCamelCase(string);
        return name[0].toUpperCase() + name.slice(1);
    }
