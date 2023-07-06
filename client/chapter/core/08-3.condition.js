/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = 'MORNING';

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


    switch (thisTime){
        case MORNING:
            alert('뉴스 기사 글을 읽는다.');
            break;

        case LUNCH:
            alert('자주 가는 식당에 가서 식사를 한다.');
            break;

        case DINNER:
            alert('동네 한바퀴를 조깅한다.');
            break;

        case NIGHT:
            alert('친구에게 전화를 걸어 수다를 떤다.');
            break;

        case LATE_NIGHT:
        case DAWN:
            alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
            break;
    }


/* switch문 → if문 변환 --------------------------------------------------- */


    if (thisTime === MORNING) {
        alert('뉴스 기사 글을 읽는다.');
    } else if (thisTime === LUNCH) {
        alert('자주 가는 식당에 가서 식사를 한다.');
    } else if (thisTime === DINNER) {
        alert('동네 한바퀴를 조깅한다.');
    } else if (thisTime === NIGHT) {
        alert('친구에게 전화를 걸어 수다를 떤다.');
    } else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
        alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    }



/* switch vs. if -------------------------------------------------------- */

/*

1. 랜덤한 수를 생성
2. 조건비교 switch case
3. 해당 결괏값을 출력

*/

// Math.random() 0부터 1까지의 난수 출력
// Math.floor() 모든 소수점을 내림처리
console.log( Math.floor(Math.random() * 7) );

/*
switch(day){
    case 0 : console.log('일');break;
    case 1 : console.log('월');break;
    case 2 : console.log('화');break;
    case 3 : console.log('수');break;
    case 4 : console.log('목');break;
    case 5 : console.log('금');break;
    case 6 : console.log('토');break;
}
*/


// 함수 만들기 -> 쪼갬

const day = Math.floor(Math.random() * 7);

function getDay(dayValue){
    switch (dayValue) {
        case 0 : return '일';
        case 1 : return '월';
        case 2 : return '화';
        case 3 : return '수';
        case 4 : return '목';
        case 5 : return '금';
        case 6 : return '토';
    }
}

getDay(day);            // 함수는 위에서 정의하고 밑에서 호출


// 1부터 6까지 아니고 다른 값을 뽑아내려면 비슷한 로직을 또 ! 작성해야한다.
// 랜덤한 값을 뽑아내는 함수를 만들어보자

function getRandom(n){
    return Math.floor(Math.random() * n);
}

// const day = getDay(getRandom(7));

console.log(day);


// 요일을 출력하는 함수
// 요일을 가지고 주말인지 아닌지 확인해주는 isWeekend 함수 만들기

function isWeekend(dayValue){
    const today = getDay(getRandom(dayValue));

    if ( today === '토' || today === '일'){
        return true;
    }else{
        return false;
    }

    // return today === '토' || today === '일';

    // today.includes('토') ? ('토요일') : today.includes('일') ? '일요일' : '평일'

    //문자의 메써드인 includes
}



const today = isWeekend(7);

console.log( today );