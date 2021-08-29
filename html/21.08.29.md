
# 텍스트 요소
<br/>

>## 시멘틱 태그의 핵심은 말 그대로 의미에 맞는 태그를 사용하는 것이다.<br/>
>## 태그의 기본 스타일을 적용하기 위해서 해당 태그를 사용해서는 안 된다.

<br/>

## 1. `<h1></h1> ~ <h6></h6>`
  - 브라우저가 제목의 정보를 사용해 자동으로 문서 콘텐츠의 표를 만드는 작업을 수행할 수 있다.
  - 글씨 크기를 위해 h 태그를 사용하면 안 된다. (대신 font-size 사용)
  - 제목의 단계를 건너뛰지 마라. 언제나 h1부터 시작해서, h2 등 순차적으로 기입
  - 페이지 당 하나의 `<h1>`만 사용하자. 오류가 나지는 않지만, `<h1>`은 가장 중요한 제목이므로 전체 페이지의 목적을 설명해야 할 것. SEO에도 더 적합하다.

<br/>

## 2. `<P></P>`
  - 하나의 문단을 나타내는 태그
  - HTML에서의 문단은 텍스트가 아니어도 이미지나 입력 폼 등 서로 관련있는 컨텐츠 무엇이나 될 수 있다.
  - block level 요소
  - p태그 내 코드에 연속된 스페이스를 여러 번 입력해도 하나의 스페이스만 출력된다.
  - p 태그는 기본 여백이 포함되어 있으며, 필요하다면 css를 통해 수정할 수 있다.
  - 스크린 리더가 문단을 넘을 때, p 태그를 찾아 변경이 되므로 문단을 나누는 상황에 p태그를 사용하도록 한다.

<br/>

## 3. `<br/>`
  - 빈 요소이므로 `<br>` or `<br/>`로 표현할 수 있다.
  - 줄 바꿈 요소
  - 문단을 나눌 경우, `<br>`을 여러 번 입력해서 공간을 나누는 것이 아닌, p태그를 닫고 새로운 p태그를 사용하는 방법으로 문단을 나눠야한다.

<br/>

## 4. `<blockquote></blockquote>`과 `<q></q>`
  1. blockquote
      - 문단 크기의 인용 문구를 사용할 때, 활용
      - 들여쓰기가 적용된다.
      - blockquote는 p태그 내 blockquote를 사용하면 안 된다.
        - html이 blockquote를 만나면 앞선 p태그를 닫은 것으로 판단한다.
      - cite 속성
        - 인용문의 출처 문서나 메시지를 가리키는 URL. (출력 화면에 영향 x)
  2. q
      - 문단 중간에 짧게 인용 문구를 사용할 때, 활용
      - 앞 뒤로 `" "`가 붙어 출력된다.
      - p태그 내 q태그를 사용할 수 있다.
      - cite 속성
        - 인용문의 출처 문서나 메시지를 가리키는 URL. (출력 화면에 영향 x)  
  
<br/>

## 5. `<pre></pre>`
  - 미리 서식을 지정한 텍스트를 나타냄
  - 스페이싱 등의 서식을 입력된 그대로 출력한다.
  - 고정폭 글꼴을 사용한다.
    - 고정폭 글꼴 : A와 I처럼 폭이 다를 수 있는 단어의 폭을 고정된 크기로 적용한다.

<br/>

## 6. `<figure></figure>`
  - 독립적인 콘텐츠를 표현한다.
  - `<figcaption></figcaption>` 요소를 사용해 설명을 붙일 수 있다.
    - 캡션의 위치는 어디든 상관없고, 캡션 없이 플로우 컨텐츠만 사용해도 된다.
  - p태그, pre태그, img태그 등 다양한 컨텐츠 포함 가능
  - 
    ```html
    <figure>
      <img src="/media/cc0-images/elephant-660-480.jpg"
           alt="Elephant at sunset">
      <figcaption>An elephant at sunset</figcaption>
    </figure>
    ```
  - 
    ```html
    <figure>
      <p>내용</p>
      <p>by writer</p>
    </figure>
    ```
<br/>

## 7. `<hr/>`
  - 수평선을 나타내며, 빈 요소이다.
  - 문단과 문단을 나눌 때 사용하는 것이 대부분이다.

<br/>

## 8. `<abbr></abbr>`
  - 준말, 약어, 이니셜을 의미하는 태그
  - title 속성을 통해 내재된 의미를 툴팁으로 보여준다.
  - 밑줄 등의 기본 스타일이 적용되지만, 스타일 적용을 위해 사용해서는 안 된다.
  -
    ```html
    <p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your <abbr title="HyperText Markup Language">HTML</abbr>.</p>
    ```
<br/>

## 9. `<address></address>`
  - 가까운 HTML 요소의 사람, 단체, 조직 등에 대한 연락처 정보를 나타낸다.
  - 기울임 등의 기본 스타일이 적용되지만, 스타일 적용을 위해 사용해서는 안 된다.
  -
    ```html
      <p>Contact the author of this page:</p>
      <address>
        <a href="mailto:jim@rock.com">jim@rock.com</a><br>
        <a href="tel:+13115552368">(311) 555-2368</a>
      </address>
    ```
<br/>

## 10. `<cite></cite>`
  - 저작물의 출처를 표기할 때 사용하며, 제목을 반드시 포함해야 한다.
  - blockquote에 cite라는 속성으로 출처를 입력할 수 있지만, 화면 상에 출력되지는 않는다.

<br/>

## 11. `<bdo></bdo>`
  - bidirectional override
  - 현재 텍스트의 쓰기 방향을 덮어쓰고 다른 방향으로 렌더링 할 때 사용
  - dir 속성
    - ltr : left to right
    - rtl : right to left
  -
    ```html
    <h1>Famous seaside songs</h1>
    <p>The English song "Oh I do like to be beside the seaside"</p>
    <p>Looks like this in Hebrew: <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span></p>
    <p>In the computer's memory, this is stored as <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo></p>
    ```

<br/>

## 12. `<b></b>`, `<strong></strong>`
  - b와 strong은 동일하게 보임 (텍스트 굵게)
  - 문단 전체를 포함해서는 안 되며, 특정 일부분만 적용해야한다.
  1. `<b></b>`
      - 요약 키워드 , 리뷰 제품명 등 특별히 중요하지 않지만, 굵게 표시할 부분
    
  2. `<strong></strong>`
      - 중대하거나 긴급한 콘텐츠를 나타낸다.
      
<br/>

## 13. `<i></i>`, `<em></em>`
  - 동일하게 기울임 꼴로 동일하게 보임
  1. `<i></i>`
      - 텍스트에서 어떤 이유로 주위와 구분해야 하는 부분
      - 기술 용어, 외국어 구절, 등장인물의 생각 등
      - `<p><i>Iron man</i> is a hero.</p>`
        > <p><i>Iron man</i> is a hero.</p>
  2. `<em></em>`
      - 텍스트의 강세를 나타냄
      - em 요소를 중첩하면 더 큰 강세를 뜻함
      - `<p>그가 <em>어떤</em> 때에 웃는지, 그리고 <em>왜</em> 웃는지 모르겠다.</p>`
        ><p>그가 <em>어떤</em> 때에 웃는지, 그리고 <em>왜</em> 웃는지 모르겠다.</p>

<br/>

## 14. `<a></a>`
  - href 특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만든다.
  - href
    - 하이퍼링크가 가리키는 URL
    - 링크는 HTTP 기반 URL일 필요는 없고, 브라우저가 지원하는 모든 URL 스킴을 사용할 수 있다.
    ```html
    <p>
      <!-- 절대 경로 -->
      <a href="https://www.mozilla.com">Mozilla</a>
      <!-- 상대 경로 -->
      <a href="another/a.html">다른 파일</a>
      <!-- 이메일/전화 -->
      <a href="mailto: highcastlee@gmail.com">send mail</a>
      <a href="tel:123-1234">(123) 1234</a>
    </p>
    ```
    >
    <p>
      <!-- 절대 경로 -->
      <a href="https://www.mozilla.com">Mozilla</a>
      <!-- 상대 경로 -->
      <a href="another/a.html">다른 파일</a>
      <!-- 이메일/전화 -->
      <a href="mailto: highcastlee@gmail.com">send mail</a>
      <a href="tel:123-1234">(123) 1234</a>
    </p>
  
  - target 속성
    - <b>_self</b>: URL을 현재 브라우징 맥락에 표시합니다. 기본값.
    - <b>_blank</b>: URL을 새로운 브라우징 맥락에 표시합니다. 보통 새 탭이지만, 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다.
    - _parent: URL을 현재 브라우징 맥락의 부모에 표시합니다. 부모가 존재하지 않으면 _self와 동일하게 행동합니다.
    - _top: URL을 최상단 브라우징 맥락(현재 맥락의 부모면서 자신의 부모가 존재하지 않는, 제일 높은 맥락)에 표시합니다. 부모가 존재하지 않으면 _self와 동일하게 행동합니다.

<br/>

## 15. Entity references
  - HTML 내 특수 문자 종류 : <, >, ", ', &
  - HTML 구문 내 특수문자를 텍스트로 사용하고, 코드로 해석되지 않게 할 때 사용
  ![image](https://user-images.githubusercontent.com/62092665/131257734-2f3ee770-f9ab-4434-906b-dc1752c8eb2a.png)
    ```html
    <p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
    ```
    ><p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
  >주의 : javascript ES6의 템플릿 리터럴(``)은 javascript용이다. HTML과 혼동X

<br/>

## 기타.
  1. `<mark></mark>`
      - 현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타낸다.
      - 
        ```html
        <p>Search results for "salamander":</p>
        <hr>
        <p>Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.</p>
        ```
        ><p>Search results for "salamander":</p>
        ><hr>
        ><p>Several species of <mark>salamander</mark> inhabit the temperate  rainforest of the Pacific Northwest.</p>
  2.  `<small></small>`
      - 덧붙이는 글이나, 저작권과 법률 표기 등의 작은 텍스트를 나타낸다.
  3. `<sub></sub>`, `<sup></sup>`
      1.  `<sub></sub>`
          - 활자 배치를 아래 첨자로 해야 하는 인라인 텍스트를 지정
          - 각주, 수식, 화학식 등에 사용
      2.  `<sup></sup>`
          - 활자 배치를 위 첨자로 해야 하는 인라인 텍스트를 지정
          - 지수, 서수 등에 사용
  4. `<del></del>`, `<ins></ins>`
      - cite 속성 
        - 회의록, 이슈 추적 시스템의 티켓 번호 등 변경점을 설명하는 URI
      - datetiem
        - 변경이 발생한 일시, 유효한 날짜의 문자열
      1.  `<del></del>`
          - 문서에서 제거된 텍스트의 범위를 나타낸다.
          - 문서나 소스 코드의 변경점 추적 등에 사용할 수 있다.
      2.  `<ins></i>`
          - 활자 배치를 위 첨자로 해야 하는 인라인 텍스트를 지정
          - 지수, 서수 등에 사용    
      ```html
      <blockquote>
      There is <del>nothing</del> <ins>no code</ins> either good or bad, bu<del>thinking</del> <ins>running it</ins> makes it so.
      </blockquote>
      ```
      ><blockquote>
      There is <del>nothing</del> <ins>no code</ins> either good or bad, but <del>thinking</del> <ins>running it</ins> makes it so.
      </blockquote>

      ```html
      <ins cite="../howtobeawizard.html" datetime="2018-05">
      <p>“A wizard is never late …”</p>
      </ins>
      ```
      ><p>“You're late!”</p>
      ><del>
      ><p>“I apologize for the delay.”</p>
      ></del>
      ><ins cite="../howtobeawizard.html" datetime="2018-05">
      ><p>“A wizard is never late …”</p>
      ></ins>
  5. `<code></code>`
      - 짧은 코드 조각을 나타내는 스타일을 사용해 자신의 콘텐츠를 표시
      - pre 태그 내 code 태그를 사용하는 것이 좋다.
      ```html
      <p>The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the array.</p>
      ```
      ><p>The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the array.</p>
  6. `<kbd></kbd>`
      - 키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타낸다.
      ```html
      <p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
      ```
      ><p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>


<br/>
<br/>

# 추가 학습
## <strong>`a 태그`</strong>
  1. download 특성으로 `<canvas>`를 PNG로 저장하기
      - canvas.toDataURL 속성으로 데이터를 URL로 변경한 후, 클릭 시, href에 data URL 제공.
      - a 태그의 download는 링크로 이동하는 대신 사용자에게 URL을 저장하지 물음.
      - download 속성의 값이 없으면 파일 이름과 확장자는 브라우저가 다양한 인자로부터 생성해      제안.

      ```html
      <!-- html -->
      <p>마우스 드래그로 그림을 그려보세요.
      <a href="" download="my_painting.png">다운로드</a>
      </p>
      <canvas width="300" height="300"></canvas>
      ```

      ```javascript
      // javascript
      var canvas = document.querySelector('canvas'),
        c = canvas.getContext('2d');

      <!-- ...(생략) -->

      document.querySelector('a').addEventListener('click', event =>
        event.target.href = canvas.toDataURL()
      );
      ```
      ![image](https://user-images.githubusercontent.com/62092665/131256874-4cb51a26-541f-4e19-b8dc-da1c9bee696a.png)
  2. 접근성
      - 접근성 보조 기술은 모든 링크를 나열하는 단축키가 있는데, '여기'와 같은 단어는 링크에 대한 설명이 부족하다. 따라서, 보다 명확한 설명에 링크를 추가하는 것이 좋다.
      - <b>접근성 떨어지는 약한 링크 텍스트</b>
        ```html
        <p>
        저희의 제품을 더 알아보시려면 <a href="/products">여기</a>를 클릭하세요.
        </p>
        ```
        ><p>
        저희의 제품을 더 알아보시려면 <a href="/products">여기</a>를 클릭하세요.
        </p>
      - <b>강한 링크 텍스트</b>
        ```html
        <p>
          저희의 <a href="/products">제품을 더 알아보세요</a>.
        </p>
        ```
        ><p>
          저희의 <a href="/products">제품을 더 알아보세요</a>.
        </p>
  3. onclick 이벤트 활용
      - onclick 이벤트를 사용하기 위해 href='#' 등으로 새로고침을 막고 다른 이벤트를  처리하는 방식으로 남용해서는 안 된다.
      - 가짜 href 값은 링크를 복사하거나 드래그할 때, 링크를 새 탭이나 새 창에서 열 때,   즐겨찾기에 추가할 때와 JavaScript를 불러오고 있거나 스크립트 오류가 발생했을 때,  아니면 비활성화했을 때 예측하지 못한 동작을 유발한다. 또한 스크린 리더 등 보조 기술에도  잘못된 의미를 전달한다.
      - 링크가 아닌 onclick 이벤트는 `<button>`등을 사용하는 것이 좋다. 

