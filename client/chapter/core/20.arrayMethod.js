/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'

function normalIsArray(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';
}
  
const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';

function normalIsNull(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
}


const arr = [10,100,1000,10_000]

const people = [
    {
      id:0,
      name:'김다연',
      profession:'프론트엔드 개발자',
      age:25,
      imageSrc:'MAksd23',
    },
    {
      id:1,
      name:'이현주',
      profession:'수영선수',
      age:40,
      imageSrc:'afdfakA',
    },
    {
      id:2,
      name:'김희소',
      profession:'물음표살인마',
      age:30,
      imageSrc:'fAKqi321',
    },
    {
      id:3,
      name:'김규민',
      profession:'래퍼',
      age:52,
      imageSrc:'AFGq3d23',
    },
    {
      id:4,
      name:'전진승',
      profession:'드라마평론가',
      age:18,
      imageSrc:'fQa15f3',
    },
  ]


/* 요소 순환 ---------------------------- */

// forEach

  // forEach 뒤에는 콜백 함수가 들어온다. 뒤에 콜백함수가 들어올때는 화살표 함수를 쓰는 경우가 많음.
  // 배열의 아이템을 0번째부터 3번째까지 이루어져 있음 모든아이템들을 조회해주세요, 아이템의 갯수만큼 반복을 돌게 되게 for문, 각각 반복을 돌아서 forEach. item 을 다 순회할 수 있다.

    arr.forEach((item) => {
        console.log( item );
    })

    people.forEach((item) => {
        console.log( item );
    })


    const span = document.querySelectorAll('span');

    // 이벤트 처리 할 때 이 방식이 제일 좋은가요? no
    // 이벤트 위임 even delegation 배울 것임
    // index 를 뽑는게 워낙 편하다보니 10개 이하는 이렇게 쓰기도 함
    span.forEach((item,index)=>{

        item.addEventListener('click',function(){
            console.log(this,index);
        })

    })

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse
    // arr.reverse()
    // console.log(arr);

// splice
        // 배열의 1번 인덱스부터 2개를 제거하겠다. 1번 뒤에 'css'랑'js',5,13 을 넣겠다.
    // arr.splice(1,2,'css','js',5,13)
    // console.log(arr);

// sort
    // arr.sort()
    // console.log(arr);

    // 더 정교한 사용을 위해 compare function 을 사용할 것이다.
    arr.sort((a,b)=>{
        return a - b;
    })

    console.log(arr);



/* 새로운 배열 반환 ------------------------ */

const user = ['beom','heeso','jun'];

// concat

    // const newArray = arr.concat(user);
    const newArray = [...arr, ...user, 'js', 'css'];
    console.log(newArray);

// slice

    // 2번째부터 5번째전까지만 도려내서 slice 라는 배열로 새로 만들어줘
    const slice = arr.slice(2,5);
    console.log(slice);

// toSorted

    const toSorted = arr.toSorted((a,b)=>{
        return b-a;
    })

    console.log(toSorted);

// toReversed

    const toReversed = arr.toReversed();
    console.log(toReversed);

// toSpliced

    // 2번째꺼 뒤에서부터 아무것도 없애지 않고 'js','css','react'추가해줘
    const toSpliced = arr.toSpliced(2,0,'js','css','react');
    console.log( toSpliced );

// map

    // map 은 값을 반환, 값을 가져오는 것 ( getter 의 역할 )
    // map이라는 메써드를 사용해서 태그를 가지고 있는 job이라는 변수에 넣었다.

    /*
    const job = people.map (( item,index )=>{
        return `<div>${item.profession}</div>`
    })
    */

    // forEach 는 값을 반환하지 않음, 셋팅만 해줌 ( setter 의 역할 )
    // job 을 그대로 내보내면 콤마까지 나오게 되어, forEach 문을 사용해 하나하나 순회하여 각각의 아이템들을 뽑아내고 그 아이템들을 다시 HTML 에 출력한다.
    /*
    job.forEach((item)=>{
        document.body.insertAdjacentHTML('beforeend', item);
    })
    */

    // console.log(job);

        // 이름 뽑아서 뭐해, 이거 div 안에 넣어서 어쩔건데?
        // const job = people.map((item,index)=>{
        //     return /* html */`
        //       <div class="userCard">
        //         <div class="imageField">
        //           <img src="${item.imageSrc}" alt="" />
        //         </div>
        //         <span>이름:${item.name}</span>
        //         <span>직업:${item.profession}</span>
        //         <span>나이:${item.age}</span>
        //       </div>
        //     `
        //   })
          
        //   function render(){
  
        //     return (
        //       <div>
        //         {
        //           people.map((item,index)=>`<div>${item.profession}</div>`)
        //         }
        //       </div>
        //     )
        //   }
          
        //   job.forEach((item)=>{
        //     document.body.insertAdjacentHTML('beforeend',item);
        //   })



/* 요소 포함 여부 확인 ---------------------- */

// indexOf
    console.log( arr.indexOf(10) );
    
// lastIndexOf
    console.log( arr.lastIndexOf(10));

// includes
    console.log( arr.includes(1000) );




/* 요소 찾기 ------------------------------ */

// find : 해당 아이템을 반환
    const find = people.find((item)=>{
        return item.id > 1
        // return item.name === '김희소'
    })

    console.log(find);

// findIndex

    const findIndex = people.findIndex((item)=>{
        return item.id === 3
    })

    console.log(findIndex);



/* 요소 걸러내기 --------------------------- */

// filter : 배열을 반환
    
    const filter = people.filter((item)=>{
        return item.id > 2
    })

    console.log(filter);

    // find는 아이템 하나만 반환하고 끝나지만, filter 는 필터링을 걸쳐서 나온 모든 값들을 반환하고 끝난다.




/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

    const totalAge = people.reduce((acc,cur)=>{
        return acc + cur.age
    })
    // 초기값이 없으면 reduce 는 초기값을 people 이라는 배열을 언박싱했을 때의 값은 각각의 객체이다. 객체 중에 첫번째 항목을 acc = 초기값으로 지정한다. acc 에 객체가 와버리고 그 뒤에 숫자가 더해진것 '[object object]' 가 acc 로 가서 age 를 더하면 형변형때문에 숫자가 되는게 아닌 문자로 넣어져서 아래의 값이 나오게 된다.

    console.log(totalAge);
                                         // [object Object]40305218

    // 정확한 나이의 합을 얻기 위해서는 초기값을 숫자로 설정해야한다.

    const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>`,'');

    console.log( template );

    document.body.insertAdjacentHTML('beforeend', template);


// reduceRight




/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

// split : 문자 -> 배열
    const stringToArray = str.split(' ');
    console.log ( stringToArray );

// join : 배열 -> 문자
    const arrayToString = stringToArray.join('/');
    console.log ( arrayToString );