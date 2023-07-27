// import {
//     insertLast,
//     tiger,
//     getNode as $,
//     renderUserCard,
//     changeColor,
//     delayP,
//     renderSpinner,
//     renderEmptyCard,
//     attr,
//     } from './lib/index.js';





// // 1. tiger 함수를 사용해서 user를 가져와 주세요.
// // 2. 함수 안으로 넣기
// // 3. 유저 데이터 랜더링 
// //      - html template을 만든다. 
// //      - 유저 data를 넘겨주기.
// //      - inserLast 사용하기.
// // 4. 함수 분리하기



// // 에러가 발생 했을 때
// // empty svg 를 생성하고 랜더링 해주세요




// const userCardInner = $('.user-card-inner');

// async function renderUserList(){

//     renderSpinner(userCardInner)

//     try{
        
//         // 로딩이 끝나고 get 통신을 이용해 정보를 가져오는 순간 spinner 는 사라져야함
//         // promise 를 반환하는 함수인 delayP 를 사용해 코드가 2초 뒤에 실행되게 설정해줌
//         await delayP({timeout:500});

//         // 로딩스피너가 자연스럽게 사라지게 하기 위해서 투명도를 0으로 설정함 근데 이 상태는 작동은 하는데 보이지만 않는것, 애니메이션이 끝나면 돔에서 사라지게 하려고 onComplete 작성
//         gsap.to('.loadingSpinner',{
//             opacity:0,
//             onComplete(){
//                 $('.loadingSpinner').remove();
//             }
//         })

//         // $('.loadingSpinner').remove(); 돔 자체를 지워버림 팍 사라짐

//         const response = await tiger.get('http://localhost:3000/users')
//         const userData = response.data;
        
//         // 데이터를 반복문을 사용해 화면에 렌더링 ( 생성, 렌더 영역 따로 만들어 관리 userList.js 에서 )
//         userData.forEach((item)=> renderUserCard(userCardInner,item))

//         changeColor('.user-card');

//         gsap.to('.user-card',{
//             x:0,
//             opacity:1,
//             stagger:0.2,
//         })
//     }
//     catch(err){
//         console.log( err );
//         renderEmptyCard(userCardInner)
//     }
    

// }

// renderUserList()


// // 버튼을 클릭했을 때 해당 article의 id 값을 가져옴

//     /*

//     이벤트 위임
//     button 선택하기 -> 클릭한 대상의 가장 가까운 것을 찾는 method
//     attr(), dataset
    
//     */


// function handleDelete(e){

//     const button = e.target.closest('button');
//     const article = e.target.closest('article');

//     // button 에 null 값 나올거면 함수 실행하지마
//     if(!button || !article) return;

//     const id = attr(article, 'data-index').slice(5);

//     tiger.delete(`http://localhost:3000/users${id}`)

//     console.log( id );

// }

// userCardInner.addEventListener('click',handleDelete);

/* global gsap */

import { 
    tiger,
    delayP,
    insertLast, 
    getNode as $, 
    changeColor,
    renderSpinner,
    renderUserCard,
    renderEmptyCard,
    attr,
    clearContents,
   } from './lib/index.js';
  
  // [phase-1]
  // 1. tiger 함수를 사용해서 user를 가져와 주세요.
  // 2. 함수 안으로 넣기
  // 3. 유저 데이터 랜더링 
  //      - html template을 만든다. 
  //      - 유저 data를 넘겨주기.
  //      - inserLast 사용하기.
  // 4. 함수 분리 하기 
  
  
  // [phase-2]
  // 1. 에러가 발생 했을 때 
  // 2. empty svg를 생성하고 랜더링 해주세요 
  // 3. 함수 분리
  
  
  // [phase-3]
  //
  
  
  const userCardInner = $('.user-card-inner');
  
  async function renderUserList(){
    renderSpinner(userCardInner)
    try{
  
      // await delayP({timeout:2000});
  
      gsap.to('.loadingSpinner',{
        opacity:0,
        onComplete(){
          $('.loadingSpinner').remove();
        }
      })
      const response = await tiger.get('http://localhost:3000/users')
      const userData = response.data;
  
      userData.forEach((item)=> renderUserCard(userCardInner,item))
  
      changeColor('.user-card');
  
      gsap.to('.user-card',{
        x:0,
        opacity:1,
        stagger:0.1
      })
    }
  
    catch(err){
      console.log( err );
      renderEmptyCard(userCardInner)
      // location.href = '404.html'
    }
  }
  
  
  renderUserList()
  
  
  
  
  // 버튼을 클릭 했을 때 해당 article의 id 값을 가져옴.
  
  // - 이벤트 위임 e.target
  // - button 선택하기 -> 클릭한 대상의 가장 가까운... method
  // - attr() ,  dataset
  
  
  function handleDelete(e){
    const button = e.target.closest('button');
    const article = e.target.closest('article')
  
  
    if(!article || !button) return;
  
    const id = attr(article,'data-index').slice(5);
    
    tiger.delete(`http://localhost:3000/users/${id}`)
    .then(()=>{
        // 컨텐츠 항목 전체 지우기
        clearContents(userCardInner);
        renderUserList();
    })
  
  
  }
  
  
  
  
  userCardInner.addEventListener('click',handleDelete);