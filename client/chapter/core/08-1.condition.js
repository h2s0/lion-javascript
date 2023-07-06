/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */


/* if 문 작성하는 방법


if("a"){
    console.log('이 조건은 항상 실행됩니다.');
} else {
    console.log('조건에 부합하지 않습니다.');
}

 */




/* if 와 else 를 사용하여 구문 작성
    https://ko.javascript.info/task/check-standard
    toLowerCase() 는 입력값을 소문자로 바꿔주는 메써드
    prompt 안에 '질문','' 중 뒤에 것은 질문창에 뜨는 기본 값


let result = prompt('자바스크립트의 공식 이름은 무엇일까요?','').toLowerCase();

if(result === 'ecmascript'){
    console.log('정답입니다!');
} else {
    console.log('모르셨나요?');
}


*/




/* https://ko.javascript.info/task/sign


let value = prompt('put a number', 0);

if(value > 0){
    console.log(1);
}else if(value < 0){
    console.log(-1);
}else{
    console.log(0);
}


*/



// let result = ( a + b < 4 ) ? '미만' : '이상';



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 봤어?');

// 영화 볼거니?
// let goingToWatchMovie = 'yes';


//조건 안의 조건 안의 조건


if(!didWatchMovie){

    let goingToWatchMovie = confirm('영화 볼거니?');

    if(goingToWatchMovie){
        let withWho = prompt('누구랑 볼거니?','');

        if(withWho === '남자친구'){
            console.log('부럽다');
        }else if(withWho === '가족'){
            console.log('화목하네');
        }else{
            console.log('have fun');
        }
    }

}else{
    let alone = confirm ('너 혼자 봤니?');

    if(alone){
        let didCry = confirm('너 울었니?');

        if(didCry){
            console.log('너 F야?');
        }else{
            console.log('너 T야?');
        }
    }
}






// if 문(statement)
/*
if(didWatchMovie === 'yes'){
    console.log('무슨 영화 봤어?');

}else if (goingToWatchMovie === 'yes'){
    console.log('나랑 영화 보러 갈래?');

}else{
    console.log('응 알았어..');
}
*/

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식