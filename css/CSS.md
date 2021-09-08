
# CSS (Cascading Style Sheets)

## cascading이란?
  - 사전적으로는 '폭포', '계단식' 이라는 의미를 갖고 있으며, 위에서 적용한 스타일이 아래로 전파가 된다는 의미이다.


## CSS3의 차이점
- CSS3부터 모듈이 도입됨.
  - 모듈의 장점
    - 각 브라우저 및 사용자 에이전트는 원하는 모듈만 선택적으로 지원하여 코드를 최소화할 수 있다.
- 모듈별 버전이 다르다.
- 브라우저마다 지원하는 css 모듈의 버전이 다를 수 있다.

<hr>

## 기본

<img src="https://mdn.mozillademos.org/files/9461/css-declaration-small.png" alt="css 구조" width="60%" />

### 구성
  - css는 rule-based 언어이다.
  - 특정 요소, 혹은 특정 요소들의 집합의 스타일 규칙을 정의할 수 있다.
  - 선택자(selector)
    - HTML 요소의 이름. 선택자를 통해 꾸밀 요소를 선택할 수 있다.
  - 선언(declaration)
    - 프로퍼티와 값으로 이루어진 쌍
    - color: red와 같은 단일 규칙
  - 선언 블록(declaration block)
    - 중활호 {} 내부의 여러 선언들을 작성
  - 룰(Rule)
    - 선택자 { 하나 이상의 선언 } 의 형태로 이루어진 하나의 rule or rule set


### 적용 방법
####  1. 내부 스타일 (embeded)
  ```html
  <html>
    <head>
      <style>
        h1{
          color:red;
        }
      </style>
      <title>css</title>
    </head>
    <body>
      <h1>hello</h1>
    </body>
  </html>
  ```
####  2. 인라인 (inline)
  ```html
  <html>
    <head>
      <title>css</title>
    </head>
    <body>
      <h1 style="color: red" >hello</h1>
    </body>
  </html>
  ```
####  3. 외부 스타일(external)
  - rel 속성은 link 요소의 필수 속성으로, 현재 문서와 외부 리소스 사이의 연관 관계를 명시한다.
  - href 속성은 링크된 외부 리소스의 URL을 명시한다.
  ```html
  <html>
    <head>
      <title>css</title>
      <link rel="stylesheet" href="style/main.css" />
    </head>
    <body>
      <h1>hello</h1>
    </body>
  </html>
  ```

### 스타일 적용
#### 스타일 우선순위
  - 동일한 스타일이라도 선언된 곳에 따라 우선순위가 정해진다.
  - 브라우저에 의해 정의된 기본 스타일 < 개발자가 선언한 스타일 < 사용자가 구성한 스타일 (최우선)
  - 적용 범위가 적을수록 우선시 된다.
    - tag 스타일 < class 스타일 < id 스타일 < 인라인 스타일
        1. 속성 값 뒤에 !important 를 붙인 속성
        2. HTML 요소에 style을 직접 지정한 속성(인라인 스타일)
        3. #id 로 지정한 속성 (id 스타일)
        4. .클래스, :추상클래스 로 지정한 속성 (class 스타일)
        5. 태그 이름으로 지정한 속성 (tag 스타일)
        6. 상위 객체에 의해 상속된 속성
    - 소스 코드의 순서가 뒤에 있으면 뒤의 스타일이 적용된다.
#### 스타일 상속
  - 부모 요소에 있는 스타일 속성들이 자식 요소로 전달
  - 모든 속성이 상속되는 것은 아니고, 일부 상속되는 속성이 있다.(ex. 배경 색 등)


## 선택자(Selector)

### 주요 선택자
#### Type selector
  - HTML 요소를 대상으로 하는 선택자
  - HTML 내 해당되는 모든 요소에 적용
#### id selector
  - 특정 id를 대상으로 하는 선택자 포함
  - id는 html내 유일하고, 하나의 요소만 가리킨다.
#### class selector
  - 특정 class를 대상으로 하는 모든 선택자 포함
  - 하나의 요소가 여러 class를 가질 수 있다.
  - 여러 요소가 같은 class를 가질 수 있다.

### 속성 선택자
#### [attr]
  - 특정 속성을 포함하고 있는 요소 선택
    ```css
    <!-- title 속성을 가진 a 태그 모두 선택 -->
    a[title] { color: red;}
    ```
#### [attr=value]
  - 특정 속성이 특정 value를 가지고 있는 요소 선택
    ```css
    <!-- href 속성의 값이 "https://example.com"인 a 태그 모두 선택 -->
    a[href="https://example.com"] {
      color: red;
    }
    ```
#### [attr^]
  - ^(캐럿) : 특정 문자로 **시작**하는 value를 가진 요소
    ```css
    <!-- href 속성의 값이 "https"로 시작하는 a 태그 모두 선택 -->
    a[href^="https"] {
      color: red;
    }
    ```
#### [attr$]
  - $(달러) : 특정 문자로 **끝**나는 value를 가진 요소
    ```css
    <!-- href 속성의 값이 'com'으로 끝나는 a 태그 모두 선택 -->
    a[href$="com"] {
      color: red;
    }
    ```
#### [attr*]
  - *(별표) : 특정 문자를 **포함**하는 value를 가진 요소
    ```css
    <!-- href 속성의 값이 'example'을 포함하는 a 태그 모두 선택 -->
    a[href*="example"] {
       color: red;
    }
    ```

### 가상 클래스 선택자
#### :first-child
  - 하위 요소 중 첫 번째 요소에 스타일 적용
  ```html
  <ul class="movie">
    <li>Toy</li>
    <li>Toy1</li>
    <li>Toy2</li>
    <li>Toy3</li>
  </ul>
  ```
  ```css
  .movie:first-child{
    color: green;
  }
  ```
#### :last-child
    - 하위 요소 중 마지막 요소에 스타일 적용

#### :nth-child
  - 하위 요소 중 n번째 요소에 스타일 적용
  ```html
  <ul class="movie">
    <li>Toy</li>
    <li>Toy1</li>
    <li>Toy2</li> // 스타일 적용되는 3번째 요소
    <li>Toy3</li>
  </ul>
  ```
  ```css
  .movie:nth-child(3){
    color: green;
  }
  ```
  ```css
  <!-- 'odd' or '2n-1'을 통해 홀수 번째 요소만 스타일 적용 -->
  <!-- 'even' or '2n'을 통해 짝수 번째 요소만 스타일 적용 -->
  .movie:nth-child(2n-1){
    color: green;
  }
  ```