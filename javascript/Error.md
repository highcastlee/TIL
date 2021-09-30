
# 자바스크립트 에러
  - [Error Reference](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors)


## 에러 종류

#### 1. Syntax Errors (= Parsing Errors)
  - 구문 오류로, 컴파일 타임에 검출되며 syntax Error가 수정되지 않으면 프로그램은 컴파일 되지 않는다.

#### 2. Runtime Errors
  - exception이라고도 불리며, 컴파일 및 인터프리터 작업이 끝난 뒤 프로그램 실행 중에 발생하는 오류

#### 3. Logical Errors 
  - 구문 오류, runtime 오류도 아닌 비즈니스 로직 상 예상했던 값이 아닌 경우 발생
  - 로직에 대한 재검증 작업이 필요하므로 가장 찾기 어려운 에러이다.

---

## 자바스크립트 구문 오류(Syntax Errors)

### EvalError
  - eval() 함수와 관련한 오류가 발생했을 때
  - eval(string) 함수는 매개변수로 받은 문자열을 javascript 코드로 실행하는 함수
  - eval()은 보안 문제로 더이상 사용되지 않지만, 일부 하위 호환성을 위해 EvalError가 존재함

### InternalError
  - 자바스크립트 엔진 내부에서 오류가 발생했을 때
  1. `too many switch cases`, (swich case의 수가 너무 많음)
  2. `too many parentheses in regular expression`, (정규표현식에 너무 많은 괄호가 있음)
  3. `array initializer too large`, (배열 초기화 값이 너무 큼)
  4. `too much recursion`. (너무 많은 재귀 호출)

### RangeError
  - 숫자 변수나 매개변수가 유효한 범위를 벗어났을 때
  1. 허용되는 문자열이 아닌 값을 String.prototype.normalize()에 전달
  2. `Uncaught RangeError: Invalid array length`
      - Array 생성자를 통해 잘못된 길이의 배열을 만드려고 시도
  3. `Uncaught RangeError: toFixed() digits argument must be between 0 and 100`
      - 숫자 메서드 Number.prototype.toExponential(), Number.prototype.toFixed() 혹은 Number.prototype.toPrecision()에 범위 외 값을 전달하는 경우.  
  4. `Uncaught RangeError: Maximum call stack size exceeded`
      - 무한 재귀 등의 이유로 call stack에 너무 많은 데이터가 쌓였을 경우 발생

### ReferenceError 
  - 잘못된 참조를 했을 때
  1. `ReferenceError: 'a' is not defined
    - 정의되지 않은 변수 사용
  
### SyntaxError (구문 오류)
  - 코드 분석 중 잘못된 구문을 만났을 때
  1. `SyntaxError: Unexpected token`
      - `Math.max(2, 42,);` -> 문법 상, 함수 파라미터 입력 시, 마지막 콤마 허용되지 않음
  2. `SyntaxError: return not in function`
      - 중괄호 누락 등으로 function 내에 return 이 없는 등의 경우
  3. 기타 등등

### TypeError
  - 변수나 매개변수가 유효한 자료형이 아닐 때
  1. `Uncaught TypeError: getMoney is not a function`
    - 함수가 아닌 getMoney를 함수처럼 실행했을 경우 (ex. `name.getMoney();`)
  2. `TypeError: More arguments needed`
    - 함수에 전달된 피연산자 또는 인수가 해당 연산자나 함수가 예상하는 타입과 호환되지 않거나,
  3. `Uncaught TypeError: x is read-only`
    - 변경할 수 없는 값을 수정하려고 하거나,
  4. `TypeError: obj is not iterable`
    - 부적절한 방법으로 값을 사용하려고 할 때.

### URIError
  - 전역 URI 핸들링 함수 encodeURI()나 decodeURI() 함수에 부적절한 매개변수를 제공했을 때


### AggregateError
  - 다수의 에러가 한 에러로 랩핑되어야 할 때의 오류
    - ex. Promise.any()에 전달된 모든 promise들이 거부되었을 때 발생
  

---  

## 자바스크립트 런타임 오류(Runtime Errors)

### JavaScript runtime error
  - 컴파일 완료 후, javascript 실행 중에 발생하는 에러
  - ex. `javascript runtime error : runtimeErrorExample is undefined.`

---

## Logical Errors
  - 비즈니스 로직 상, a+b 를 실행해야하는데, a-b를 실행하고 있는 경우 등

