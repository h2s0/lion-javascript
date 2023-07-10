/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
  }
  
  const resultX = calcTotal(10000, 8900, 1360, 2100);
  const resultY = calcTotal(21500, 3200, 9800, 4700);
  const resultZ = calcTotal(9000, -2500, 5000, 11900);
  
//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);
  
  
  // 함수 선언 → 일반 함수 (표현)식
  
    /*
    let calculateTotal = function (priceA, priceB, priceC, priceD){
        return priceA + priceB + priceC + priceD
    };

    const result = calculateTotal(1000,500,200,6500);
    */

    // 사용자가 입력하는 값이 늘어날때마다 코드를 더 적어줘야함 -> 낭비, 우리가 넣은 argument (인수) 들을 한 번에 받아서 처리하는 방법을 알아보자 !


    let calculateTotal = function(){
        console.log(arguments);
        // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 이것은? : arguments

        // arguments 객체를 사용해 함수의 매개변수없이 아이템의 총합을 구해보자!

        let total = 0;

        // 1. for 문 사용하기

        // for (let i = 0; i < arguments.length; i++){
        //     total += arguments[i];
        // }

        

        // 2. for of 문 사용하기

        // for(let key of arguments){
        //     total += key;
        // }

        // return total

       
        

        // 3. forEach 빌려쓰기

        // Array.prototype.forEach.call(arguments,function(item){
        //     total += item;
        // })

        // return total



        
        //4.

        // let realArray = Array.prototype.slice.call(argumnts);
        // console.log( realArray );

        // realArray.forEach(function(item){
        //         total += item;
        // })




        
        // 5. Array.from()
        
        // let realArray = Array.from(arguments);
        // console.log(realArray);
        // realArray.foreach(function(item)){
        //     total += item;
        // }

        let arr = [10,50,100];

        // 6. spread syntax
        // let realArray = { ...arguments, ...arr};

        // console.log(realArray);
        // realArray.forEach(function(item,index){
        //     total += item;
        // })

        // 7. Array.reduce

        return realArray.reduce((acc,item)=>{
            return acc + item;
        },0)








    };
    return total;
  
  


  // 익명(이름이 없는) 함수 (표현)식 = 우리가 일반적으로 쓰는 함수식
  let anonymousFunctionExpression = function(){

  };
        // 변수 자체를 함수의 이름으로 쓰는 경우가 많음
  


  
  // 유명(이름을 가진) 함수 (표현)식
  let namedFunctionExpression = function hello(){

  };
        // 이름만 가지는 것 함수라는 객체에 hello 라는 함수 이름을 부여한 것 뿐
  


  // 콜백 함수 (표현)식
  let callbackFunctionExpression = function(callback){

    callback();

  };

  callbackFunctionExpression(
    function(){
        console.log('콜백 함수 실행!');
    }
  );
        // callback 이라는 매개변수를 써봄, 함수를 불러올 때 함수를 넣을 것임
  



  // 함수 선언문 vs. 함수 (표현)식
  
  
  // 즉시 실행 함수 (표현)식
  // Immediately Invoked Function Expression
  let IIFE;
  