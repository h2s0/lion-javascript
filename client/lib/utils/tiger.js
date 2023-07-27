const URL = 'https://jsonplaceholder.typicode.com/users';

// fetch 는 호출하고 2번째 인수로 option 을 받는다. 입력하지 않으면 기본값인 GET통신

// fetch 요청은 2개의 await 호출로 구성됨

// const response = await fetch('https://pokeapi.co/api/v2/pokemon/30')

// // reponse 된 상태를 담고 있다
// console.log( response );

// if(response.ok){ // ok 떴을 때 가져온다
//     // response.json 하면 데이터를 읽을 수 있는 값으로 바꿔줌
//     const data = await response.json();
//     console.log( data );
// }

// 위의 내용들을 기반으로 함수를 호출할 때 url 을 전달하면 함수이름 옆의 공간으로 들어가서 get 통신이 일어나는 함수를 짜보자



const defaultOptions = {
    method:'GET',
    body:null,
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    }
  }
  
  
  export const tiger = async (options) => {
  
    const {url,...restOptions} = {
      ...defaultOptions,
      ...options,
      headers:{
        ...defaultOptions.headers,
        ...options.headers
      }
    }
    const response = await fetch(url,restOptions);
    if(response.ok){
       response.data = await response.json();
    }
    return response;
  }
  
  
  // const response = await tiger({
  //   url:URL,
  // });
  // const userData = response.data;
  
  // console.log( userData );
  
  
  
  
  tiger.get = (url,options)=>{
    return tiger({
      url,
      ...options
    })
  }
  
  tiger.post = (url,body,options)=>{
    return tiger({
      method:'POST',
      url,
      body:JSON.stringify(body),
      ...options
    })
  }
  
  tiger.delete = (url,options)=>{
    return tiger({
      method:'DELETE',
      url,
      ...options
    })
  }
  
  tiger.put = (url,body,options)=>{
    return tiger({
      method:'PUT',
      url,
      body:JSON.stringify(body),
      ...options
    })
  }
  
  
  
  
  
  
  // console.log( userData );
  
  // userData.forEach((item)=>{
    // console.log( item );
  // })
  
  
  
  
  // const data = await tiger('https://www.naver.com');
  
  
  // console.log( data.data );
  
  
  
  // await tiger('www.naver.com')
  
  
  
  
  
  
  // const response = await fetch('https://jsonplaceholder.typicode.com/user')
  
  // console.log( response );
  
  // if(response.ok){
  //   const data = await response.json();
  //   console.log( data );
  // }


  /*
  
  fetch 는 url 을 던지면 알아서 GET 통신이 일어난다. 22줄
  fetch 로 통신하게 되면 저기에서 프라미스 객체가 뱉어진다.
  결과값을 얻기 위해서는 .then 을 붙혀 사용하거나 await 키워드를 붙여 사용가능
  await 은 함수 자체가 async 로 사용해야 가능하기 때문에 20 줄에 async 있음
  await 을 만나게 되면 fetch 라는 통신이 반환할 때까지 기다리고 떨어진 result 값을 뱉어낸다. response 에 그 result 값을 담아서 사용하고 있다.
  response 에 ok 가 떨어지면 그 response 의 data에 접근해서 response.json 해준 값을 넣어주겠다.

  */