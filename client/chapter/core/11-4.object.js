/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */


// 객체 안에 메서드는 무조건 consise method
// method 안에 함수는 무조건 arrow function


// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {                                             // 객체
    date: '2023. 7. 11',
    tableIndex: 5,
    menu: [
      { name: '통 새우 돈까스', price: 13000, count: 2 },
      { name: '치즈 돈까스', price: 10000, count: 1 },
      { name: '해장국', price: 7500, count: 5 },
      { name: '알탕', price: 14000, count: 1 }
    ],
    // totalPrice:function(){
    //     console.log(this);
    // }
                                //{date: '2023. 7. 11', tableIndex: 5, menu: Array(4), totalPrice: ƒ}

    // totalPrice:(){
    //    console.log(this);
    // }                             축약형을 써도 위와 똑같은 this 값 출력

    // 총값을 구하는 함수 작성
    totalPrice(){
        
        // this.menu.forEach((item)=>{
        //     this.total += item.price * item.count;
        // })

        // reduce 는 꼭 return 해주어야한다
        return this.menu.reduce((acc,item)=> acc + ( item.price * item.count ),0)

        // return total;
    }
  };

  shopOrder.totalPrice();

        // 통 새우 돈까스의 가격 불러오기
        // shopOrder.menu[0].price 샵오더의 메뉴 객체의 0번째 배열의 price 에 접근


        // 가격 총 합 구하기 - 상품 갯수가 많아지면?
        // ( shopOrder.menu[0].price * shopOrder.menu[0].count ) + ( shopOrder.menu[1].price * shopOrder.meni[1].count )


        // 반복문이 필요하다, item이라는 매개변수를 받음
        // item 의 카운트에 접근해서 price 와 곱해주면 됨
        // let total = 0;

        // shopOrder.menu.forEach((item)=>{
        //   total += ( item.price * item.count );

        //   // console.log(item.price);
        // })

        // console.log(total);
  
  
  // 메서드와 this 
  // ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
  // ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
  //   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
  //   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
  //   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만, 
  //   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.
  
  
  // 메서드 단축 구문
  
  
  // 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this
  
  const navigationMenu = {
    name: '글로벌 내비게이션',
    items: [
      { id: 'link-g', text: 'Google', link: 'https://google.com' },
      { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
    ],
    getItem(index) {
      return this.items[index];
    },
    addItem: (newItem) => {
      this.items.push(newItem);
    },
  };

// additem 이 실행되는 동시에 그 객체를 
  navigationMenu.addItem({
    id: 'link-l',
    text : 'Lycos',
    link : 'http://lyos.co.kr'
  })