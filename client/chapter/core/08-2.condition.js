/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자, 첫번째 falsy
let AandB = a && b;

// 논리합(또는) 연산자, 첫번째 truthy
let AorB a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {this_is_falsy: false};
              //   t      t     t              t
              // 빈 배열[], 빈 객체{}는 true

                                        // {this_is_falsy: false}

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {this_is_truthy:true};
                //  f       f      2라서 true       true지만 무시당함

                                        // 2