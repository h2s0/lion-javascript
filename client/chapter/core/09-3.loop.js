/* ------------ */
/* For Loop     */
/* ------------ */



// 2 ~ 10까지의 짝수 출력하기


for(let j = 0; j <= 10; j++){
    if( j % 2 === 0){
        console.log(j);
    }
}

    // 안에다가 쓰면 j 는 반복문 안에서만 사용 가능하고 밖에서 사용 불가
        // j = j + 1 을 줄여쓴게 j++

let j = 2;

for(; j <= 10; ){
    j++
    if( j % 2 === 0){
        console.log(j);
    }
}

console.log();
    // 밖에 있는 j 도 접근 가능






// split : 문자의 메써드, '' 안에 넣은 값을 기준으로 구별해서 배열의 아이템으로 반환해줌
const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while(i < l) {
  console.log(frontEndDev[i]);
  i += 1;
}


// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.


for(let i = 0; i < l; i++){

    let value = frontEndDev[i];
    // let lower = value.toLowerCase();

    if(value === 'SVG' || value === 'jQuery') continue;

    // 문자의 메써드인 includes 를 사용해서 찾을 수도 있음
    // if(value.toLowerCase().includes('SVG') || value.toLowerCase().includes('jQuery')) continue;

    // 위에 let lower 을 지정해주어 코드를 짧게 만들기
    // if(lower.includes('svg') || lower.includes('jquery')) continue;

    // if(lower.includes('jquery')) break;
    console.log(value);
}




//   - 무한 루프 (브레이크)
//   - for 문 (역순환)


    // 역순환을 하려면 0부터 시작하면 안되고 제일 끝부터 시작해야한다. 0부터 비교를 할 수 있는 변수, 값이 큰 변수가 하나 필요 ( let i = l . l = frontend.length)

    let zero = 0;

    for( let i = l; zero < i;){
        console.log(frontEndDev[--i]);
    }                                               // 6543210

    // for( let i = l; zero < i; --i;){
    //     console.log(frontEndDev[i]);
    // }
                                                    // 7654321


    // 이렇게 하면 7654321 이 출력됨 근데 우리는 6543210이 필요함 ( 배열 첫 시작은 0부터니까 )
    // 선증가와 후증가의 차이점 : 내뱉은 값이 다름 연산 후 할당 , 할당 후 연산
    // --i 는 이 그 줄에서 실행이 되는데 선증가 후증가는 중요하지가 않음 아래에서 할거니까 그래서 위에 --i 는 생략할수있으니까 생략해주고 감소된 값을 바로 사용하려고 [] 안에 --i 를 넣어주었다

    // l 이 7, 트루니까 실행이 먼저 됨 프론트엔드 데브에 7번째 값이 나옴 -> undefined 그리고 i-- 실행해서 6으로 만든다음 다시 실행 해야하는데 후감소면 6이 안됨 후감소는 