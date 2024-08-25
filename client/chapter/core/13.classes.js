/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.



// animal 을 확장시켜서 tiger 을 만들고 tiger 을 확장시켜 범쌤을 만들어보자

class Animal {

    legs = 4;
    tail = true;
    stomach = [];

    constructor(name){
        this.name = name;
        console.log('최초 1회 실행합니다.');
    }
    // constructor = 함수, 이 항목을 만들면 최초 1회는 무조건 실행시켜줌

    set eat(food){
        this.stomach.push(food);
    }
    get eat(){
        return this.stomach
    }
}


class Tiger extends Animal{

    prey='';

    constructor(name,pattern){
        super(name)
        this.pattern = pattern;
    }

    hunt(target){
        this.prey = target;
        return `${target}'에게 조용히 접근한다.`
    }

    attack(){
        return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`
    }

    static sleep(name){
        console.log(name + '이 잠을 잔다.');
    }
}

const beom = new Tiger('범', '호랑이무늬');