import { getNode } from "../dom/getNode.js";
import { xhrPromise } from "./xhr.js";
import { insertLast } from '../dom/insert.js';


function delay(callback,timeout=1000){
  setTimeout(callback,timeout);
}


const first = getNode('.first');
const second = getNode('.second');






// delay(()=>{
//   console.log(1);
//   first.style.top = '-100px';
//   delay(()=>{
//     console.log(2);
//     first.style.transform = 'rotate(360deg)'
//     delay(()=>{
//       console.log(3);
//       first.style.top = '0';
//     })

//     second.style.top = '100px';
//     console.log('b')
//   })
// })


// 객체 합성 mixin = 기본 옵션값

const defaultOptions = {
  shouldReject:false,
  timeout:1000,
  data:'성공!',
  errorMessage:'알 수 없는 오류가 발생했습니다.'
}


// delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다.

// options : 함수가 받은 매개변수 - 실행부에서 적힌 값들이 여기 올라와서 
export function delayP(options){

  // 구조 분해 할당
  let config = { ...defaultOptions }

  // delayP 안에 parameter 을 받아오는데, 숫자값인 경우에는 config.timeout 에 우리가 원하는 옵션의 시간을 다시 지정(재할당)하겠다.
  if(typeof options === 'number'){
    config.timeout = options;
  }

  // options 에서 진짜 객체를 받아왔을 때에는, 기존의 config 값과 options의 값을 병합해서 다시 config 에 할당해주겠다.
  if(typeof options === 'object'){
    config = { ...defaultOptions, ...options}
  }

  const {shouldReject, data, errorMessage, timeout} = config;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if(!shouldReject){
        resolve(data)
      }else{
        reject({message:errorMessage});
      }
    }, timeout);
  })
}

//promise 객체가 튀어나왔기 때문에 then 절 사용가능, 
delayP({shouldReject:false})
.then((res)=>{
  // console.log(res);
})
.catch(({message})=>{
  alert(message)
})
.finally(()=>{
  // console.log('어쨌든 실행합니다.')
})

// await : 코드의 실행흐름제어 / result 결과 값 출
// 


async function delayA(){
  return '성공'
}

const data = await delayA();

console.log( delayA() );




// async - 함수가 promise 객체를 반환하도록, await 사용
// await - 코드의 실행 흐름 제어 ( 멈춰 )
//       - result 값 가져오기


// 라면 끓이는 과정 함수를 console.log 로만 작성했을 때에는 순서 상관없이 다 파바박 구동이 된다(화면에 뜬다). 물을 넣은 다음에 스프, 면이 안들어갔는데 계란을 넣어버리면 완숙 이슈가 생기기 때문에 코드의 실행 흐름을 가지고 제어할 수 있게 await 을 넣어준다. 그렇게 되면, 물넣기 -> 스프넣기 -> 면넣기 -> 계란넣기 -> 접시 순으로 실행된다.
async function 라면끓이기(){

  delayP({data:'물넣기'}).then((res)=>{
    console.log( res );
  })

  const 스프 = await delayP({data:'스프넣기'})
  console.log(스프);

  const 면 = await delayP({data:'면넣기'})
  console.log(면);

  const 계란 = await delayP({data:'계란넣기'})
  console.log(계란);

  const 접시 = await delayP({data:'접시'})
  console.log(접시);

}

// 라면끓이기()



// then 결과 가져오기
// await 결과 가져오기

async function getData(){

  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/50')

  // data.then((res)=>{
  //   console.log( res );
  // })
  
  const pokemon = await data;

  console.log( pokemon.sprites['front_default'] );

  insertLast(document.body,`<img src="${pokemon.sprites['back_default']}" alt="" />`)

}

getData()