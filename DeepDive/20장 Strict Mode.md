
# strict mode

#### strict mode란 무엇인가
  - 자바스크립트 언어의 문법을 보다 엄격하게 적용하여 기존에는 무시되던 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적으로 에러를 발생시키는 방법입니다.
  

#### strict mode가 발생시키는 에러 
  1. 암묵적 전역
      - 선언하지 않은 변수를 참조하면 ReferenceError 발생
  
  2. 변수, 함수, 매개변수의 삭제
      - delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError 발생
      - `delete foo;`
  
  3. 매개변수 이름의 중복
      - 중복된 매개변수 이름을 사용하면 SyntaxError
      - `function foo(x,x){...}`
  
  4. with 문의 사용
      - with문은 전달된 객체를 스코프 체인에 추가하는 기능
      - with는 동일한 객체의 프로퍼티를 반복해서 사용할 때 쓰지만, 성능과 가독성이 나쁘다.
      - strict mode는 with문 실행 시 SyntaxError 발생시킴
  

#### strict mode 차이점
  1. 생성자 함수가 아닌 일반 함수 호출 시, this에 undefined를 바인딩한다.
      - strict mode가 아니라면, 전역 객체가 바인딩 된다.

  2. 매개변수의 인수를 재할당해도 arguments 객체 변화 없음
      - 단, 재할당된 파라미터는 변한다.

  

