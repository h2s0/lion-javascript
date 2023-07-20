
function bindEvent(node,type,handler){
    if(typeof node === 'string'){
        node = getNode(node);
    }

    // 내가 적은 값 (type)이 하나라도 빨강글씨에 포함된것이라면 ok
    if(!(/\bmouseenter|click|mousemove|mouseout|mouseover/g).test(type)){
        throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.')
      }

    node.addEventListener(type,handler);

    return ()=> node.removeEventListener(type,handler);

}