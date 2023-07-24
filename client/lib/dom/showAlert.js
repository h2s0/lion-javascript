import { addClass, removeClass } from "./css.js";
import { getNode } from "./getNode.js";


// ( 안에 text=는 입력되지 않았을 때 디폴트 값 설정 )
export function showAlert(node, text="에러입니다!", timeout = 1000){

    // 노드가 없고 문자가 맞으면 겟노드 한 번 더 실행
    if(typeof node === 'string'){
        node = getNode(node);
    }

    // ('.alert').textContent = text;
    // 타겟인 node 에 내가 전달받은 textContent 를 text 로 넣어주겠다 라는 뜻.
    node.textContent = text;

    // 확실성이 보장되지 않는 경우 addClass 가 실행되지 않았을 때 setTimeout이 실행되지 않도록 나중에 promise 가 필요하다.
    addClass(node, 'is-active');
    setTimeout(() => {
        removeClass(node, 'is-active');
    }, timeout);
}

// 실행 예시 showAlert('.alert', '이름이 없습니다!', 2000)