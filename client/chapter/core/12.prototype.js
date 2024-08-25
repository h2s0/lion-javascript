/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */


// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우,희새

/* 객체 만들고 객체에 prototype 을 연결함
const animal = {
    legs : 4,
    tail : true,
    stomach : [],
    set eat(food){
        this.stomach.push(food);
    },
    get eat(){
        return this.stomach;
    }
}


const tiger = {
    pattern : '호랑이무늬',
    prey : '',
    hunt(target){
        this.prey = target;
        return `${target}에게 조용히 접근한다`
    },
}

// animal 이 가진 능력을 상속시키기 ( 물려주기 ) 혹은 const tiger 안에 prototype 단계(?)로 작성도 가능 __proto__ : animal
tiger.__proto__ = animal;

const heesae = {
    prey : '',
    study(language){
        this.prey = language;
        return `${language}에게 뚜드러 맞는다`
    }
}

heesae.__proto__ = animal;

*/

// 함수는 두가지 일을 할 수 있다. ( 양면의 얼굴을 가짐 )


    // 일반함수

    function Button(name){
        this.name = name;
    }

    // 생성자 함수 ( 함수 이름 대문자로 시작 )

    const b = new Button('버튼')
        // 객체를 만드는 방법 : new Object(), 생성자함수, {}, 일반함수
        
        
      
        
        
// 생성자 함수 : 객체를 공장처럼 찍어내야할때 작성, new 키워드를 붙히면 객체를 생성, 하나의 객체와 관련된 새로운 객체 여러개를 만들 때 재사용하기 위해 생성자 함수를 사용

function Animal(){
    this.stomach =[];
    this.legs = 4;
    this.tail = true;
    this.eat = function (food){
        this.stomach.push(food);
    }
    this.printEat = function(food){
        return this.stomach;
    }
}
        // 함수로 만드니까 getter, setter을 못쓴다

const tiger = new Animal();

tiger.pattern = '호랑이 무늬';

tiger.hunt = function (target){
  this.prey = target,
  console.log( `${target}에게 슬금슬금 접근합니다.` );
}



const heesae = new Animal();

heesae.study = () => '므아ㅏㅏㅏㅏㅏㅏ';

const fox = new Animal();
const wolf = new Animal();
const dog = new Animal();