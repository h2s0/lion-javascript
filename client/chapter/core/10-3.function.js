/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

    // 함수 표현식 : arguments 쓰면 훨씬 쉽게 모든 값을 더할 수 있는데 얘네 일 두번하구있네!
const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
  }
  
  let resultX = calculateTotal(10000, 8900, 1360, 2100);
  let resultY = calculateTotal(21500, 3200, 9800, 4700);
  let resultZ = calculateTotal(9000, -2500, 5000, 11900);
  
//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);
  
  
  // 함수 선언 → 화살표 함수 (표현)식
  //                 rest parameter (args, rest, children)
  let calcAllMoney = (a,b, ...args) => {
        // 이 값을 다 더해주는 유사배열의 이름이 있다는것! = arguments, 근데 arguments 를 쓰면 에러가 뜸, 
        console.log( args );

        // let total = 0;
        // args.forEach((item) => {
        //   total += item;
        // })

        // 일반함수식으로 작성
        // return args.reduce(function(acc,item){
        //   return acc + item;
        // },0)

        // 일반함수식으로 작성한 것을 arrow function 으로 작성
       return args.reduce((acc,item) => acc + item,0)

        // return total;
  };
  
  const result = calcAllMoney(1000,500,200,2000);

  console.log( result );
  



  // 화살표 함수와 this
  

    // 함수선언문
    function normalFunction(){

    }

    // 함수표현식
    const expressionFunction = function (){

    }

    // 화살표함수식
    const arrowFunction = ()=>{

    }


      // console 창에 dir(normalFunction) 이런식으로 찍어서 차이점을 찾아보았다.
      // 함수선언문, 함수표현식과 다르게 화살표함수식 arrowfunction 은 constructor ( 생성자 )를 내장하고 있지 않다. 생성자로써의 기능을 제외하고 진짜 함수로써의 기능만 수행하기 위해서. constructor 을 내장하면 부모의 부모의 등등 기능을 상속받아야하기 때문에 굉장이 무거움. 
  



  /* 다음 함수를 작성해봅니다. -------------------------------------------------- */
  
  // pow(numeric: number, powerCount: number): number;
  let pow; 
  
  // repeat(text: string, repeatCount: number): string;
  let repeat; 