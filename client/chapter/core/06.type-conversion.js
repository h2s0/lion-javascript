/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자     ----------------------------------------------------------- */

// number

    const YEAR = 2023;

    console.log( String(YEAR) );    // 명시적 형 변환
    console.log( YEAR + '' );       // 암시적 형 변환

// undefined, null

    let days = null;
    console.log( typeof String(null) );
    console.log( null + '');

    let undef = undefined;
    console.log( typeof String(undefined) );
    console.log( undefined + '');

// boolean

    let isClicked = true;
    console.log( typeof String(isClicked) );
    console.log( isClicked + '');
    


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

    let friend;
    console.log(friend);      //NaN

// null

    let bankbook = null;
    console.log(Number(bankbook));   // 0

// boolean

    let cutie = true;
    console.log(Number(cutie));     // 1

// string

    let num = '250';
    console.log( Number(num) );
    console.log( +num );
    console.log( num * 1 );
    console.log( num / 1 );

// numeric string

    let width = '105.3px';
    console.log( Number(width) );

    let w = window.parseFloat(width);
        // parseFloat 이라는 윈도우 기능,
        // 윈도우 기능이기 때문에 window 글자 생략 가능

    console.log( w );       // 105.3 출력

    //let w = parseInt(width);

    //console.log( w );     // 105 출력




/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''              //false
// 위에 나열한 것 이외의 것들 

    console.log( Boolean(friend) );         //false
    console.log( Boolean(bankbook) );       //false
    console.log( Boolean(0) );              //false
    console.log( Boolean(NaN) );            //false
    console.log( Boolean('') );             //false
    console.log( Boolean(1) );              //true

                                    // 명시적 형 변환

    console.log('암시적 형 변환 : ' + !!false);
    
                                    // 암시적 형 변환

