
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
  - rel : link 요소의 필수 속성으로, 현재 문서와 외부 리소스 사이의 연관 관계를 명시한다.
  - href : 링크된 외부 리소스의 URL을 명시한다.
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
    > **브라우저에 의해 정의된 기본 스타일 < 개발자가 선언한 스타일 < 사용자가 구성한 스타일 (최우선)**
  - 1순위: 선언된 곳 / 2순위 : 명시도 / 3순위 : 코드 위치
  - **선언된 곳 기준**
    >html 문서 내 상위에 있을수록 먼저 선언되고, 우선이 된다.
  - **명시도 기준**
    >- 적용 범위가 적을수록(= 명시도가 높을수록) 우선시 된다.
    >- tag 스타일 < class 스타일 < id 스타일 < 인라인 스타일
    >    - 1순위 - 속성 값 뒤에 !important 를 붙인 속성
    >    - 2순위 - HTML 요소에 style을 직접 지정한 속성(인라인 스타일)
    >    - 3순위 - #id 로 지정한 속성 (id 스타일)
    >    - 4순위 - .클래스, :추상클래스 로 지정한 속성 (class 스타일)
    >    - 5순위 - 태그 이름으로 지정한 속성 (tag 스타일)
    >    - 6순위 - 상위 객체에 의해 상속된 속성
  - **코드 위치 기준**
    >소스 코드의 순서가 뒤에 있으면 뒤의 스타일이 적용된다.
#### 스타일 상속
  - 부모 요소에 있는 스타일 속성들이 자식 요소로 전달
  - 모든 속성이 상속되는 것은 아니고, 일부 상속되는 속성이 있다.(ex. 배경 색 등)

<hr>

## 선택자(Selector)

### 주요 선택자
#### Type selector
  - HTML 요소를 대상으로 하는 선택자
  - HTML 내 해당되는 모든 요소에 적용
#### id selector
  - 특정 id를 대상으로 하는 선택자 포함
  - id는 html내 유일하고, 하나의 요소만 가리킨다.
#### class selector
  - 특정 class를 대상으로 하는 선택자
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
  - 선택자에 추가하는 키워드로, 선택한 요소가 특정한 상태여야 만족할 수 있다.
#### :first-child
  - 하위 요소 중 첫 번째 요소에 스타일 적용
  - **상위 요소에 가상 클래스 선택자를 적용해야 하위 요소에 스타일이 적용된다.**
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

#### first-type
  - 특정 타입 중 첫 번째 요소에 스타일 적용
  ```html
  <section>
    <div>toy</div>
    <p>zoo</p>      //color: red 적용됨
    <p>inside</p>
    <div>coco</div>
  </section>
  ```
  ```css
  p:first-of-type{
    color: red;
  }
  ```
  - 클래스에 first-of-type 적용 시, 각 type별 첫 요소에 모두 스타일 적용
  ```html
  <section>
    <div class="movie">toy</div>  //color: red 적용됨
    <p class="movie">zoo</p>      //color: red 적용됨
    <p class="movie">inside</p>
    <div class="movie">coco</div>
  </section>
  ```
  ```css
  .movie:first-of-type{
    color: red;
  }
  ```

#### last-of-type
  - 특정 타입 중 마지막 요소에 스타일 적용
  ```html
  <section>
    <div>toy</div>
    <p>zoo</p>      
    <p>inside</p>    //color: red 적용됨
    <div>coco</div>
  </section>
  ```
  ```css
  p:last-of-type{
    color: red;
  }
  ```

  
#### nth-of-type
  - 특정 타입 중 n번째 요소에 스타일 적용
  ```html
  <section>
    <div>toy</div>
    <p>zoo</p>      
    <p>inside</p>    //color: red 적용됨
    <div>coco</div>
  </section>
  ```
  ```css
  p:nth-of-type(2){
    color: red;
  }
  ```


#### not
  - 스타일을 제외할 선택자
  - [] : attribute holder
  ```html
  <form>
    <input type='text' >
    <input type='password' class='pw' >
    <input type='email' >
  </form>
  ```
  ```css
  <!-- class가 'pw'인 요소를 제외한 input에 스타일 적용 -->
  input:not(.pw){
    background-color: red;
  }

  <!-- type이 'email'인 요소를 제외한 input에 스타일 적용-->
  input:not([type=email]){
    background-color: blue;
  }

  <!-- placeholder 속성을 가진 요소를 제외한 input에 스타일 적용-->
  input:not([placeholder]){
    background-color: black;
  }
  ```

#### link, visited
  - link
    - 방문한 적 없는 link에만 스타일 적용
  - visited
    - 방문한 link에만 스타일 적용
  ```html
  <head>
    <link rel="stylesheet" href="styles/main.css">
    <title>CSS</title>
  </head>
  <body>
    <a href="https://example.com">Example Link</a>
  </body>
  ```
  ```css
  a:link{
    color: red;
  }
  a:visited{
    color: yellow;
  }
  ```

#### hover, active, focus
  - hover
    - 마우스를 올렸을 때 적용되는 스타일
    ```css
    input[type=button]{
      background-color: red;
      border: none;
    }
    input[type=button]:hover{
      background-color: grey;
      border: red;
    }
    ```
  - active
    - 요소가 활성화된 상태
    - 마우스를 사용하는 경우, 보통 마우스를 누르는 순간부터 떼는 시점까지 active 상태이다.
    - 보통 `<a>`, `<button>`과 함께 사용한다.
    - <i>active는 동등한 명시성을 가진 다른 링크 가상 클래스(link, hover, visited)가 덮어쓰기 때문에 active를 가장 뒤에 배치해야한다.</i>
    ```css
    a:link { color: blue; }          /* 방문하지 않은 링크 */
    a:visited { color: purple; }     /* 방문한 링크 */
    a:hover { background: yellow; }  /* 마우스를 올린 링크 */
    a:active { color: red; }         /* 활성화한 링크 */

    p:active { background: #eee; }   /* 활성화한 문단 */
    ```
  
  - focus
    - 사용자가 요소를 클릭 또는 탭하거나 키보드 tab 키로 선택했을 때 발동.
    ```css
    input[type=button]:focus {
      background: yellow;
      color: red;
    }
  
    .blue-input:focus {
      background: yellow;
      color: blue;
    }
    ```

#### enabled, disabled, checked
  - disabled
    - 사용 불가능 한 상태로 만드는 속성
  - enabled 
    - disabled가 아닌 사용 가능한 상태
  - checked
    - check된 상태의 요소

  ```css
  input[type=text]:enabled{
    background-color: red;
  }

  input[type=text]:disabled{
    background-color:black;
  }

  input[type=radio]:checked{
    outline: 3px solid blue;
  }
  ```

### 가상 요소 선택자
  - 선택자에 추가하는 키워드로, 선택한 요소의 일부분에만 스타일을 입힐 수 있다.
  - CSS3 명세에 따르면, 가상 요소 선택자를 적용할 때는 세미콜론을 두 개 사용한다.
    - 단, 하나를 사용해도 동작은 같다. 
    - ex. div::after{}

#### before, after
  - before
    - 선택한 요소의 첫 자식으로 가상 요소를 생성한다.
    - 보통 content 속성과 함께 짝지어 요소에 장식용 컨텐츠를 추가할 때 사용한다.
    - css로 만들어진 가상 요소이므로 추가한 content가 실제 텍스트나 이미지로 인식되지 않는다.
  - after
    - 선택한 요소의 맨 마지막 자식으로 가상 요소를 생성한다.
  ```css
  .movie::before{
    content: 'MOVIE';
    color: red;
  }
  ```

#### first-letter, first-line, section
  - first-letter
    - 선택한 요소의 첫 번째 글자에 대한 스타일
    - before을 적용하여 앞에 text content를 추가한다면, 추가한 text의 첫 글자에 적용된다.
  ```css
  .lorem::first-letter{
    color: red;
    font-size:30px;
  }
  .lorem::before{
    content: 'BEFORE';
  }
  ```
  - first-line
    - 선택한 요소의 첫 번째 줄에 대한 스타일
    - 브라우저에 의해 개행이 된 첫 번째 줄을 의미한다.
  ```css
  .lorem::first-line{
    color: red;
  }
  ```

  - selection
    - 드래그한 영역에 적용되는 스타일
  ```css
  .lorem::selection{
    background-color:red;
  }
  ```


### 선택자 결합

#### 하위
  - spacing을 통해 하위(자손) 선택자 선택
  - 자손 선택자는 해당 요소 아래의 모든 요소가 범위에 포함된다.(자식의 자식의 자식...)
  ```css
  <!-- ul 타입의 하위 li 타입 중 마지막 타입 선택-->
  ul li:last-of-type{
    color:red;
  }

  <!-- id가 'list'인 요소의 하위 li 중 마지막 타입 선택 -->
  #list li:last-of-type{
    color:red;
  }

  ```

#### 자식
  - `>` 문자를 통한 자식 선택자 선택
  - 자식 선택자는 해당 요소 바로 아래에 위치하는 선택자이다.
  ```html
  <ul id="list">
    <li>
      <ol>
        <li></li>
        <li></li>
      </ol>
    </li>
    <li></li>
    <li></li>  // color:red 적용
  </ul>
  ```
  ```css
  <!-- id가 list인 요소의 자식 li 중 마지막 요소 선택 -->
  #list > li:last-of-type{
    color:red;
  }
  ``` 

### 형제 선택자, 그룹화

#### 형제 선택자
  - 일반 형제 선택자 (`~`)
    - 같은 부모를 가진 요소 중 선택
    - 선택한 요소보다 뒤에 있는 요소만 선택할 수 있다.
    ```html
    <div>
      <p></p>
      <span></span>
      <code></code>
      <p></p>       //color:red
      <div></div>
      <p></p>       //color:red
    </div>
    ```
    ```css
    <!-- code보다 뒤에 있는 형제 요소 중 p 태그 모두 선택-->
    code ~ p{
      color: red;
    }
    ```

  - 인접 형제 선택자 (`+`)
    - 형제 요소 중 바로 뒤에 요소 선택
    ```html
    <div>
      <p></p>
      <span></span>
      <code></code>
      <p></p>       //color:red
      <div></div>
      <p></p>       
    </div>
    ```
    ```css
    <!-- code 태그 바로 뒤에 있는 형제 요소 p 태그 선택-->
    code + p{
      color: red;
    }

    <!-- code 바로 뒤에 div 없어서 적용 안 됨-->
    code + div{
      color:blue;
    }
    ```

#### 그룹화 (`,`)
  - 같은 스타일을 동시에 적용하고 싶을 때 사용
  ```css
  <!-- p, span, code 태그 모두 동일한 스타일 적용 -->
  p, span, code {
    color: red;
  }
  ```

#### 범용 선택자
  - `*` 사용
  - 생략 가능하다
    - *#name 처럼 원래 선택자에 *가 적용된 것이지만, 생략하여 #name만 사용하는 것임
  ```css
  <!-- div 아래의 모든 자식 요소에 스타일 적용 -->
  div > * {
    color:red;
  }
  ```

### 상속 제어

#### initial
  - 스타일을 기본 스타일로 초기화한다.
  - 단, initial은 예상치 못한 값일 수 있으므로, inherit, unset, revert 키워드가 선호된다.
  ```html
  <div class="parent"> //border: ... ; color: blue; 
    <div class="child1">c1</div> //border: ... ; color: blue;
    <div class="child2">c2</div>
  </div>
  ```
  ```css
  div{
    border: 1px solid black;
  }
  .parent {
    color: blue;
  }

  <!-- .child2에 적용된 상속 스타일을 초기화-->
  .child2{
    all: initial;
  }
  ```

#### inherit, unset
  - inherit
    - 상속된 스타일로 적용한다.
    ```html
    <div class="parent1"> //border: ... ; color: blue;
      <div class="child1">c1</div> //border: ... ; color: red;  (.child1 스타일 적용)
      <div class="child2">c2</div> //border: ... ; color: blue; (parent 상속)
    </div>
    <div class="parent2"> //border: ... ; color: blue;
      <div class="child1">d1</div> //border: ... ; color: blue; (inherit 적용으로 parent2 상속)
      <div class="child2">d2</div> //border: ... ; color: blue; (parent2 상속)
    </div>
    ```
    ```css
    div{
      border: 1px solid black;
    }
    .child1{
      color:red;
    }
    .parent1, .parent2{
      color: blue;
    }
    .parent2 * {
      color: inherit;
    }
    ```

  - unset
    - 부모로부터 상속 받을 값이 있을 때 : inherit
    - 부모로부터 상속 받을 값이 없을 때 : initial
    ```html
    <div class="parent1"> // 하위에 내려줄 상속 없음
      <div class="child1">c1</div> // color: initial;
      <div class="child2">c2</div> // color: initial;
    </div>
    <div class="parent2"> //color: blue (상속 있음)
      <div class="child1">d1</div> // color: inherit (=blue)
      <div class="child2">d2</div> // color: inherit (=blue)
    </div>
    ```
    ```css
    .parent2{
      color: blue;
    }
    .child1, .child2 {
      color: unset;
    }
    ```