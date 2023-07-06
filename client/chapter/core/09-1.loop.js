/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */



/*

let repeat = 0;

while(repeat < 10){
    console.log(repeat)
    repeat++; // 이거 없으면 무한루프에 빠지게 됨
}

// 0 이 들어와서 비교를 한다 - 10보다 작으면 찍고 증가하고 또 다시 앞으로 들어가서 10보다 작으면 찍고 증가하고를 계속 반복

*/








const frontEndDev = [
    'HTML',
    'CSS',
    'SVG',
    'JavaScript',
    'jQuery',
    'React',
    'Redux',
  ];
  
  /* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */
  
//   console.log(frontEndDev[0]);
//   console.log(frontEndDev[1]);
//   console.log(frontEndDev[2]);
//   console.log(frontEndDev[3]);
//   console.log(frontEndDev[4]);
//   console.log(frontEndDev[5]);

  // 배열의 요소들을 하나씩 출력한 것
  // 반복문을 사용해서 해보자!
  
  
  /* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */
  
  // while 문 (순환 : 순방향)
  
  let i = 0;

  while(i < frontEndDev.length){
    let value = frontEndDev[i];
    console.log( value );
    i++;
  }



                    // i 가 배열의 길이보다 작을 때 까지만 반복
                    // frontEndDev[i] 값을 직접 console 에 안넣고 변수에 따로 담아서 넣는게 좋음


  // while 문 (역순환 : 역방향)

  let l = frontEndDev.length - 1;

  while(l >= 0){
    let value = frontEndDev[l];
    console.log(value);

    --l;
  }
  

                    // l 값은 7, 7번째꺼가 없어서 맨 첫번째값은 undefined
                    // undefined 값을 없애주려고 length - 1 을 해줌



                    
  //let copyArray = frontEndDev.slice();            // 옛날 방식
  let copyArray = [... frontEndDev];                // 새로운 방식

  while(frontEndDev.length){
    console.log( frontEndDev.pop() );
  }
                    // 배열에다가 pop 이라는 메써드를 쓰게 되면 배열의 마지막 값을 뽑아서 반환시켜줌
                    // pop 을 이용하면 기존 배열을 파괴시키기 때문에


  
  // 성능 진단 : 순환 vs. 역순환

    let z1 = performance.now();

     // 검사하고 싶은 코드들

    let z2 = performance.now();

    console.log(z2 - z1);