function addClass(node,className){

    if(typeof node === 'string') node = getNode(node);

    if(typeof className !== 'string'){
        throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
    }

    node.classList.add(className);
}

addClass('.first', 'hello');



// removeClass

function removeClass(node,className){

    if(typeof node === 'string') node = getNode(node);

    if(!className){
        node.className = '';
        return;
    }               // className 을 작성하지 않으면 빈값을 넣고 함수 종료시킨다.
                    // 아래 if문보다 위에 작성되어야 하고, return 문 필요
    if(typeof className !== 'string'){
        throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입이어야 합니다.')
    }

    node.classList.remove(className);
}


// toggleClass


const toggleClass = (node,className) =>{

    if(typeof node === 'string') node = getNode(node);

    if(typeof className !== 'string'){
        throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입이어야 합니다.')
    }

    return node.classList.toggle(className);
}

// css 값

function getCss(node,prop){
    if(typeof node === 'string') node = getNode(node);

    if(!(prop in document.body.style)){
        throw new SyntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
    }
    return getComputedStyle(node).getPropertyValue(prop);
}

/* value 를 적으면 setter, 안적으면 getter 가 되는 함수를 작성해보자.

CSS('.fist','color')            // getter
CSS('.fist','color','orange')   // setter : value 값이 전달됨
*/

const css = (node,prop,value) => {
    return !value ? getCss(node,prop) : setCss(node,prop,value);
  }