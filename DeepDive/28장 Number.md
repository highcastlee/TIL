
# Number

### Number.isInteger()는 인수를 암묵적 타입 변환하지 않는다.
  - 즉, number 타입이 아니면 false다.


### Number.isNaN() 메서드와 전역 함수 isNaN()는 다르다.
  - Number.isNaN()은 인수가 NaN이어야 true이다.
  - isNaN()은 인수를 숫자로 암묵적 타입 변환시킨다.
    - 따라서, Number(인수) 가 NaN인 undefined, {}, 'abc' 등은 isNaN()에서 true가 된다.


### Number 메서드 사용 시, 주의사항
  - 숫자 뒤의 . 표시가 소수점인지 프로퍼티 접근 연산자인지 구분
  ```javascript
  77.2  // 숫자 소수점
  
  77.toExponential    // 소수점 위치인데 프로퍼티 읽을 수 없으므로 SyntaxError

  77.123.toExponential // "7.71234e+1"  (소수점 2개는 불가능이므로 프로퍼티 접근 연산자로 해석)

  (77).toExponential  //"7.71234e+1" 그룹 연산자로 구분

  77 .toExponential   //"7.71234e+1" 공백이 있으면 .을 프로퍼티 접근 연산자로 해석

  ```

### Number.prototype.toFixed
  - 반올림하는 소수점 이하 자릿수를 인수로 받아 반올림.
  - 기본 값은 0이다
  ```javascript
  (1234.567).toFixed(2);  // "1234.57"
  ```

### Number.prototype.toPrecision
  - 인수로 전달받은 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환
  - 인수로 전달받은 전체 자릿수로 표현할 수 없는 경우 지수 표기법으로 결과 반환

  ```javascript
  (12345.6789).toPrecision();  // "12345.6789"
  (12345.6789).toPrecision(1); // "1e+4"
  (12345.6789).toPrecision(2); // "1.2e+4"
  (12345.6789).toPrecision(6); // "12345.7"
  ```

### Number.prototype.toString
  - 숫자를 문자열로 변환하여 반환
  - 인수로 진법을 전달하면 해당 진법으로 변환
  ```javascript
  (16).toString();    // "16"
  (16).toString(2);   // "10000"
  (16).toString(8);   // "20"
  (16).toString(16);  // "10"
  
  ```
