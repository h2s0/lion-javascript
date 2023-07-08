/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */


let i = 0;

do{
    if( i === 0){
        console.log('최초실행');
    }else{
        console.log('${i}번째 실행');
    }

    i++;

}while(i < 10);

    // 한 번은 무조건 실행, false 면 그대로 멈추고,
    // true 면 그 값이 false 가 될 때까지 실행시켜준다.




// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단


let repeat = prompt('how many times do you want to repeat',0);

do{
    console.log(repeat);

    if(repeat < 0){
        console.log('최초실행입니다.');
        break;
    }
    repeat--;
}while(repeat)




// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

//let first = document.querySelector('.first');

// first = first.nextSibling.nextSibling.nextSibling.nextSibling;

// do{
//     first = first.nextSibling;
// }while(first.nodeType !== document.ELEMENT_NODE);

// first 를 찾고 있어요 do 에 와서 최초 한 번 실행을 하게 됩니다. 그러면 class first 가 될 건데 거기에 nextSibling 을 할겁니다. next 해주면 TEXT_NODE 가 나오게 됨 ( 이거 공백 때문에 ) 그러면 비교문의 ELEMENT_NODE 랑 다르기 때문에 while 의 값이 true 로 떨어짐, true 로 나오면 또 한 번 더 위에 담기게 됨. 그렇게 계속 하다가 document.ELEMENT_NODE (tag) 가 나오게 되면 while 안의 식이 false 가 되어서 반복을 멈추고 값을 

//console.log( first );

let first = document.querySelector('.first');

function next(node){
    do{
        node = node.nextSibling;
    }while(node.nodeType !== 1)

    return node;
}

const second = next(first);

console.log(second);

// first 에 nextsibling 한 걸 node 에 넣어주기 노드타입이 Element 


function prev(node){
    do{
        node = node.previousSibling;
    }while(node.nodeType !== 1)
    return node;
}

console.log( prev(second) );

// next 는 다음 요소를 선택, prev 는 이전 요소를 선택