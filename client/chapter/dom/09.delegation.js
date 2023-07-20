/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */


// const buttonA = getNode('.a');
// const buttonB = getNode('.b');
// const buttonC = getNode('.c');
// const buttonD = getNode('.d');

// const buttons = getNode('button');

// buttons.forEach((item)=>{
//     item.addEventListener('click',()=>{
//         console.log('hit');
//     })
// })


    // getNode 로 클래스 container 를 가져오는것
const container = getNode('.container');


// 제일 큰 부모 container 에게 이벤트를 걸어서 위임하는것, 브라우저가 만들어주는 이벤트 객체 e 를 사용해 원하는거 클릭할 수 있게 한다. e.target : 가장 먼저 누르는 것을 타겟으로 삼는다. 굉장히 다양한 아이들을 수집해오는데, li 만 가져오기 위해서 closest 로 클릭한 것의 가장 가까운 부모 중 li 를 가져오게 설정했다. / null 이 뜨게 되면 attr 함수를 실행할 때 에러가 나게 된다. 에러를 해결해주기 위해서 만약에 null 을 찾았는데 그게 비어있다면 (!null 은 true) return 을 시켜줘 : 함수는 읽다가 return 을 만나면 함수를 중단하고 밑에 코드는 읽지 않음
function handleDelegation(e){
   // console.log(this);
   // container : 일반 함수이기 때문에 호출한 대상이 this 로 설정됨

   // console.log(e.currentTarget);
   // 어떤것을 눌러도 container가 나옴

   // console.log(e.target);
   // 내가 누른 대상을 수집해옴

   let target = e.target;

   let li = target.closest('li');
   // 가장 가까운 부모요소를 찾고 반환, 타켓으로 span 을 선택했다면 span과 인접한 li 태그를 반환시켜줘

   if(!li) return;

   let className = attr(li, 'class');
   // let dataName = target.dataset.name;
   let dataName = attr(li,'data-name');

    if(className === 'home'){
        console.log('홈 실행');
    }
    console.log( className );

//   console.log( className );

//    if(className === 'home'){
//     console.log(' go home ');
//    }
   // 이렇게 작성하면 아이콘, 글자 있는 부분을 누를 때 null 값이 뜨고 그것이 없는 배경을 눌러야 버튼값을 받아올 수 있다. 위에 있는 것이 오기 때문에

    

//    if(target.getAttribute('class') === 'a'){
//     console.log('A 버튼 클릭!');
//    }

//       target.getAttribute('class') = className
//       내가 누른 대상 target 의 class 속성값을 가져온다 = 클래스이름

//    if(target.getAttribute('class') === 'b'){
//     console.log('B 버튼 클릭!');
//    }

//    if(target.getAttribute('class') === 'c'){
//     console.log('C 버튼 클릭!');
//    }

//    if(target.getAttribute('class') === 'd'){
//     console.log('D 버튼 클릭!');
//    }
}

container.addEventListener('click',handleDelegation)





/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */