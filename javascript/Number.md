
# Number 객체



### 실수의 표현 방식
  - 컴퓨터에서는 실수를 정수와 마찬가지로 2진수로만 표현해야 한다.

#### 1. 고정 소수점(Fixed point) 방식
  - 실수는 정수부와 소수부로 나눌 수 있으므로, 소수부의 자릿수를 미리 정하여, 고정된 자릿수의 소수를 표현할 수 있다.
  - 32비트 실수를 고정 소수점 방식으로 표현하면
    <img src="https://tcpschool.com/lectures/img_c_fixed_point.png" alt="고정 소수점 방식 부호부 1비트, 정수부 15비트, 소수부 16비트">

  - 고정 소수점 방식은 표현할 수 있는 범위가 매우 적다는 단점이 있다.

#### 2. 부동 소수점(Floating point) 방식
  - 실수를 가수부와 지수부로 나누어 표현
  - 부동 소수점 방식은 고정 소수점보다 더 많은 범위를 표현할 수 있지만, 부동 소수점은 항상 오차가 존재한다는 단점이 있다.
    - 따라서, === 이나 == 같은 일치 연산자를 소수점이 있는 실수 비교에 바로 사용하면 안 된다.
    - 오류 문제를 해결하기 위해 toFixed()나 Math.round() 등의 소수 처리를 따로 해준다.
    ```javascript
    let a = 0.1
    let b = 0.2
    console.log(a+b) // 0.30000000000000004
    ```
    
  - IEEE 754 표준 
    - 32비트 단정밀도(single-precision), 64비트 배정밀도(double-precision), 등에 대한 형식 정의
    - 32비트 단정밀도
      <img src="https://codetorial.net/articles/_images/floating_point_04.png" alt="부호부 1비트, 지수부 8비트, 가수부 23비트">
      
      <img src="https://tcpschool.com/lectures/img_c_floating_point_32.png" alt="32비트 부동 소수점">

      <img src="https://tcpschool.com/lectures/img_c_floating_point_64.png" alt="64비트 부동 소수점">



### Number 기본
  - 자바스크립트에서 일반적인 숫자는 64비트 형식의 IEEE-754 표준 기반 형태로 저장되는 자료형
  - 10진수 외에도 16진수, 2진수 8진수의 다양한 진수 사용
    - 16진수(Hexadecimal) 표기법 : 0xFF
    - 8진수(Octal) 표기법 : 0o71
    - 2진수(binary) 표기법 : 0b1101
  
  - 대표 상수 값
    - [MAX|MIN]_VALUE, [MAX|MIN]_SAFE_INTEGER, [POSITIVE|NEGATIVE]_INFINITY, NaN
  - 대표 메서드
    - 문자열 변환 : Number.toString()
    - 자리수 제한 표현 : Number.toFixed(), Number.toPrecision()
    - 타입 확인 : Number.isNaN(), Number.isFinite()


### 지수 / 진법
  - 지수 표기법
    - 아주 큰 숫자나 작은 숫자를 표기하기 위해 e 로 0의 개수를 대체 표기 가능
    ```javascript
    let num = 1e9  // 0을 9개 추가 -> 1000000000
    let us = 1e-6  // 왼쪽으로 6번 소수점 이동 -> 0.000001
    ```
  - 진법 표기
    ```javascript
    console.log(0x0f)   // 15
    console.log(0o17)   // 15
    console.log(017)   // 15   (앞이 0이면 8진수)
    console.log(0b1111) // 15
    ```

### 상수값
  - [MAX|MIN]_VALUE
    - 지수로 표기되는 양수의 최대 최소 값
  - [MAX|MIN]_SAFE_INTEGER
    - 안전하게 표기되는 최대(양) 최소(음) 값
  - [POSITIVE|NEGATIVE]_INFINITY
    - 무한대 양/음수 값
  - NaN
    - 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값으로 해석될 수 있는 숫자 데이터 유형
    - type은 number이다.


### 대표 메서드
  1. 형 변환 
      - Number -> String
        - Number.toString(), String(Number), Number+""
        ```javascript
        console.log(1e-6.toString()); // 0.000001 (string 타입)
        console.log(String(1e-6));    // 0.000001 (string 타입)
        console.log(1e-6+"");         // 0.000001 (string 타입)
        ```
  
  2. 자리수 표현  
      - Number.toFixed(pos) : 소수 자리수 길이 제한
      - Number.toPrecision(pos) : 정수와 소수의 자리 수를 합한 길이로 제한 (pos는 1이상 100이하)
    
      ```javascript
      console.log((125.0 - 123.456).toFixed(3));      // 1.544
      console.log((125.0 - 123.456).toPrecision(3));  // 1.54
      console.log((125.0 - 123.456).toPrecision(2));  // 1.5

      // 정수 자리 수는 맞춰서 표현된다.
      console.log((1250.6 - 250.5).toPrecision(3));  // 1.00e+3
      console.log((1250.6 - 250.5).toPrecision(2));  // 1.0e+3
      console.log((1250.6 - 250.5).toPrecision(5));  // 1000.1
      ```

  3. Number 자료형 확인
      - Number.isNaN() : NaN 확인
      - Number.isFinite() : 유한수인지 확인
      ```javascript
      console.log(Number.isNaN(123/"hi")) // true
      console.log(Number.isNaN(123)) //  false
      console.log(Number.isFinite(Infinity)) // true
      console.log(Number.isFinite("hello")) // false
      ```
  
  4. 정수와 실수 변환
      - Number.parseInt() : 정수 변환
      - Number.parseFloat() : 실수 변환
      ```javascript
      console.log(Number.parseInt("1.35em"))  // 1
      console.log(Number.parseInt("125px"))   // 125
      console.log(Number.parseInt("125abc"))   // 125 (앞에서부터 숫자만 체크)
      console.log(Number.parseInt("px125"))   // NaN  (문자로 시작하면 NaN)
      console.log(Number.parseInt("100.99"))   // 100 (소수점 내림)

      console.log(Number.parseFloat("1.25em"))// 1.25
      console.log(Number.parseFloat(3)) // 3.0
      ```

---

### String -> Number 형 변환
  1. Number(value)
      - value에 수가 아닌 문자(ex. 'a100')가 포함되어 있으면 NaN
      - value가 '100'이 아닌 100 과 같이 숫자라면, (100).toString() 실행 후, 숫자로 변환
      ```javascript
      Number('123')     // 123
      Number('12.3')    // 12.3
      Number('123e-1')  // 12.3
      Number('')        // 0
      Number(null)      // 0
      Number('0x11')    // 17 (16진수)
      Number('0o11')    // 9  (8진수)
      Number('0b11')    // 3  (2진수)
      Number('011')     // 11  (10진수)
      Number(011)       // 9  (8진수)
      Number('foo')     // NaN
      Number('100a')    // NaN
      ```

  2. parseInt()
      - 매개변수가 string이 아니면, toString()을 통해 문자열로 변환한 다음 parseInt를 실행한다.
        - 이 떄, Number.toString() 메소드는 특정 기수(radix)를 기준으로 한 진수 값의 문자열을 환원하기 위한 시도를 한다.
      
      - **'0x10'은 16진수로 인식하는데, '0o10' 이나 '0b10'등 다른 진수는 문자 이전인 0으로만 인식**
        - Number('0b10') -> 2진수 인식해서 return 2
        - parseInt('0b10') -> 문자 b 앞에 숫자만 인식해서 return 0
        - parseInt('010') -> return 10

      ```javascript
      parseInt(010)
      // 1단계 : (010).toString()   -> 출력 : 8
      // 2단계 : parseInt('8') 실행
      // 3딘계 : 출력 8

      parseInt(" 0xF", 16);   // 15
      parseInt("17", 8);      // 15
      parseInt(021, 8);       // 15 (숫자 파싱에서 0으로 시작하는 숫자는 8진수이다.)
      parseInt("015", 10);    // 15 (parseInt(015, 10)는  13이 리턴 toString되면서 8진수 변경)
      parseInt(15.99, 10);    // 15
      parseInt("15,123", 10); // 15
      parseInt("FXX123", 16); // 15
      parseInt("1111", 2);    // 15
      ```

      - parseInt는 숫자만 찾아내어 변환
        ```javascript
        console.log(Number('2021년')) // NaN
        console.log(parseInt('2021년')) // 2021
        ```


  - ##### Number()로 엄격한 파싱 함수 만들기
    ```javascript
    const filterInt = function (value) {
      // 부호, 숫자, Infinity만 포함된 value 체크. 나머지는 NaN 처리
      if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
        return Number(value);
      return NaN;
    }

    console.log(filterInt('421'));               // 421
    console.log(filterInt('-421'));              // -421
    console.log(filterInt('+421'));              // 421
    console.log(filterInt('Infinity'));          // Infinity
    console.log(filterInt('421e+0'));            // NaN
    console.log(filterInt('421hop'));            // NaN
    console.log(filterInt('hop1.61803398875'));  // NaN
    console.log(filterInt('1.61803398875'));     // NaN
    ```



## parseInt(021) vs parseInt(021,8) vs parseInt(021,10)
  - parseInt()나 Number()에 숫자가 주어지면 toString()으로 문자 변환 후 다시 실행.
  ```javascript
  // -------- parseInt(8진수) --------
  parseInt(021)       // 17
  // (021).toString() -> 8진법 변환 return '17' -> parseInt('17') -> 17
  parseInt(021,8)     // 15
  // (021).toString() -> 8진법 변환 return '17' -> parseInt('17',8) -> 15
  parseInt(021,10)    // 17
  // (021).toString() -> 8진법 변환 return '17' -> parseInt('17',10) -> 17

  // -------- parseInt(문자) --------
  parseInt('021')     // 21
  parseInt('021',8)   // 17
  parseInt('021',10)  // 21
  // 문자는 같다
  parseInt('21')        // 21
  parseInt('21', 8)     // 17
  parseInt('21', 10)    // 21

  // -------- parseInt(10진수) --------
  parseInt(21)        //
  // (21).toString() -> 10진법 변환 return '21' -> parseInt('21') -> 21
  parseInt(21, 8)     // 
  // (21).toString() -> 10진법 변환 return '21' -> parseInt('21') -> 21
  parseInt(21, 10)    // 
  // (21).toString() -> 10진법 변환 return '21' -> parseInt('21') -> 21

  ```


---

### 요약
  - Number <-> String 형 변환 시, 값의 진법을 주의해야한다.
    - JavaScript는 string이 16진수나 8진수 표기법이 아니라면, radix를 10으로 설정한다.
    - default가 항상 10진법인 것은 아니다.
    ```javascript
    // ECMAScript 5 이전
    parseInt('030') 은 parseInt('030',8) 과 같다.

    // ECMAScript 5 이후
    parseInt('030') 은 parseInt('030',10)과 같다.
    ```
  - parseInt를 사용할 때, radix를 함께 적어주는 것이 좋다.
  - parseInt()는 '0xff'와 같이 16진수의 문자는 인식하지만, parseInt('0o10'), parseInt('0b10') 은 숫자가 아닌 문자 b 앞인 0만 인식한다.
    - parseInt('0120b10')  // return 12