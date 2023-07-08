/* --------------- */
/* For Of Loop     */
/* --------------- */


// iterable = 반복가능한
// iterable element = String, Array, Array-like ( 유사배열 )

// index ( key:value ) 와 length 를 가지면 배열이라고 한다. 그런데 이 두개를 가지고 있는데도 배열이 아닌 경우가 있다.

const array_like = {
    0:'body',
    1:'head',
    2:'div',
    length:3
}
                                // 배열처럼 생겼지만, 객체




// languages 는 [ {}, {}, {} ] 로 구성되어 있다.
// 배열 안에 객체가 들어가있음

const languages = [
    {
      id: 'ecma-262',
      name: 'JavaScript',
      creator: 'Brendan Eich',
      createAt: 1995,
      standardName: 'ECMA-262',
      currentVersion: 2022,
    },
    {
      id: 'java',
      name: 'Java',
      creator: 'James Gosling',
      createAt: 1995,
      standardName: null,
      currentVersion: 18,
    },
    {
      id: 'ecma-334',
      name: 'C#',
      creator: 'Anders Hejlsberg',
      createAt: 2000,
      standardName: 'ECMA-334',
      currentVersion: 8,
    },
  ];
  


  for(let value of languages){
    //테이블 모양으로 값 그냥 출력하는거
    //console.table(value);
    const name = value.name;

    // if (name === 'Java') continue;

    // name 이 'Java' 문자를 포함하고 있다면 break;
    if (name.includes('Java')) break;

    console.log(name);
  }

                // 반복문이기 때문에 continue, break 다 사용 가능

  
  // for ~ of 문
  // - 특정 조건에서 건너띄기
  // - 특정 조건에서 중단하기
  
  
  
  
  const randomUser = {
    gender: 'female',
    name: { title: 'Ms', first: 'Carol', last: 'May' },
    location: {
      street: { number: 9162, name: 'Church Road' },
      city: 'Birmingham',
      state: 'Cumbria',
      country: 'United Kingdom',
      postcode: 'FO5E 4TN',
      coordinates: { latitude: '-4.3301', longitude: '155.0223' },
      timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
    },
    email: 'carol.may@example.com',
    login: {
      uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
      username: 'redduck745',
      password: 'picks',
      salt: '8xzqOzAn',
      md5: '7250e4042c2367cc82487f798c7c5253',
      sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
      sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
    },
    dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
    registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
    phone: '022 1280 9236',
    cell: '07653 428700',
    id: { name: 'NINO', value: 'SH 44 98 72 L' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/21.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
    nat: 'GB',
  };
  
  // 객체의 키, 값 순환
  // - for ~ in 문

  for(let key in randomUser){
    if(({}).hasOwnProperty.call(randomUser,key)) {
        let L1 = randomUser[key];
        console.log('L1 : ',L1)
        if(typeof L1 === 'object'){

            for(let key in L1){
                if (({}).hasOwnProperty.call(L1,key)){
                    let L2 = L1[key];

                    if(typeof L2 === 'object'){
                        for(let key in L2){
                            if (({}).hasOwnProperty.call(L2,key)){
                                let L3 = L2[key];
                                console.log('\t\tL3 : ', L3)
                            }
                        }
                    }
                }
            }
        }
    }
  }

  // - for ~ of 문

        // 뭐가 안되서 이거 쓴다그랬죠?
        // randomUser 을 그냥 for ~ of 문으로 반환하면 안됨 왜냐면 

        //   Object.key()
        //   Object.values()
        //   Object.entries()

    // 모든 key 값들을 배열로 반환
    console.log( Object.keys(randomUser) );

    // 모든 value 값들을 배열로 반환
    console.log( Object.values(randomUser) );

    // 객체 자체의 열거가능한 속성 key, value 를 가진 쌍의 배열을 반환
    console.log( Object.entries(randomUser) );

    for(let keyValue of Object.entries(randomUser)){
        let key = keyValue[0];
        let value = keyValue[1];

        console.log('\tL2 : ',value);

        if(typeof value === 'object'){
            for(let keyValue of Object.entries(value)){
                let key = keyValue[0];
                let value = keyValue[1];

                console.log('L3 : ',value)
            }
        }
    }


  // - 성능 비교 진단