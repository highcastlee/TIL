
## HTML과 웹브라우저
<br/>

### 1. HTML
 - HyperText Markup Language
 - HyperText(하이퍼텍스트) 
   - 이전에는 다른 위치나 웹 페이지로 이동할 수 있는 요소만을 가리켰으나, 지금은 웹 문서를 이루는 요소들 각각을 하이퍼텍스트라고 한다.
 - Markup Language(마크업 언어)
    - 문서의 내용 이외에 서식이나 구조를 정의하는 언어.
    - HTML은 정의된 태그(ex. `<header></header>`)로 구성되어 있다.
    - 데이터를 기술한 언어라는 점에서 프로그래밍 언어와는 차이가 있다.

<br/>

### 2. 웹 브라우저
  - HTML : 웹 문서의 기본적인 골격을 담당
  - CSS : 각 요소들의 레이아웃, 스타일링을 담당
  - Javascript : 동적인 요소(사용자와의 인터랙션)을 담당

<br/>

### 3. 웹 표준과 접근성 및 호환성
  - 웹 표준
    - HTML5는 W3C에서 2014년에 공식 표준화
    - 2019년에 WHATWG에 의해 HTML Living Standard가 표준화됨(= HTML5)
    - HTML5 이전에는 explorer의 ActiveX 같은 독자적 플러그인이 존재했다.
    - 어떤 운영체제나 브라우저를 사용하더라도 웹페이지가 동일하게 보이고 정상 작동해야함을 의미
  
  - 웹 접근성
    - 장애를 가진 사람과 그렇지 않은 사람 모두가 웹사이트를 이용할 수 있게 하는 방식
    - 휴대폰, 스마트 워치, 스마트 TV 등 다른 디바이스를 사용하는 사람들에게도 동일한 정보와 기능 제공
    - 보조 기술 : 스크린 리더, 음성 인식, 화면 돋보기 등

  - 웹 호환성 (Cross Browsing)
    - 웹 브라우저 버전, 종류와 관계없는 웹사이트 접근
    - 웹 표준 준수를 통해 호환성 확보
      - ex. HTML, CSS 문법 준수 / 동작, 레이아웃 호환성

<hr/>

## HTML
<br/>

### 1.HTML 구성
  - 태그
    - 여는 태그(Opening Tag) : `<요소 이름>`
    - 닫는 태그(Closing Tag) : `</요소 이름>`
    - 내용(Content) : 요소의 내용
    - 요소(Element) : 여는 태그, 닫는 태그, 내용을 통틀어 요소라고 한다.
    > 태그는 대소문자를 구분하지 않지만, HTML5는 소문자 작성을 권장한다. 가독성과 통일성을 위함.
  
  - 빈 요소
     - `<Img />, <hr />, <br />`등의 내용(Content)이 없는 요소는 빈 요소(Empty element)라 부른다.
     - 이 경우, 닫는 태그를 추가로 명시하지 않아도 된다.
     - 빈 요소 끝에 `/`를 넣지 않아도 동일하게 동작하지만, 관습적으로 `/`를 넣어주는 경우도 있다. 어떤 방식이든 일관적인 스타일로 작성하는 것이 좋다.
     - ex. img, br, hr, meta, input 등 미리 정의된 태그만 가능

  - 요소의 중첩(Nesting)
    - 요소 안에 다른 요소가 들어가는 포함관계를 성립할 수 있다.
    - 요소 중첩인 경우, 열린 순서의 반대로 닫아야한다.
    ```html
      <h1>요소안에 <strong>다른 요소가</strong> 들어갈 수 있습니다!</h1>
    ```

  - 주석
    - 목적
      - 코드에 메모를 추가하거나, 사용하지 않는 코드를 임시로 처리하기 위함
      - 가독성을 위해 필요한 위치에만 주석을 작성
      ```html
        <p>this is highcastlee</p>
        <!-- 메모입니다. -->
      ```
      
<br/>

### 2. HTML 문서의 구조
  ```html
    <!DOCTYPE html>
    <html>
      <head>
        <!-- HEAD 영역 -->
      </head>
      <body>
        <!-- BODY 영역 -->
      </body>
    </html>
  ```
  - `<!DOCTYPE html>`은 입력하지 않아도 동작하나, html 최상단에 선언해주는 것이 관습.
  - `<html>`: 페이지 전체를 감싸는 루트(root) 요소
  - `<head>` : 화면에 나오지는 않지만, 웹 페이지의 정보를 포함
    - `<meta>` : 문서의 일반 정보와 인코딩 명시
    - `<title>`: 브라우저의 제목
  - `<body>`: 페이지 내에 나타나는 정보

  - **1) `<head> 태그`**
    - head의 주 목적은 기계 처리를 위한 정보이다.
    - 하나 이상의 mate 데이터, 단 하나의 title 요소를 포함해야한다.
    - head 태그는 요소 내 조건에 따라 여는 태그나 닫는 태그를 생략할 수는 있지만,(HTML5 자동생성) `<head>`는 여는 태그와 닫는 태그를 모두 작성하는 것이 좋다.
    - 생략하는 습관이 추후 문제를 발생시킬 수 있다.
    
  - **2) `<body> 태그`**
    - body의 attribute(속성)
      - MDN을 참고하면, 표준에 맞지 않는 속성과 사용 가능한 속성을 확인할 수 있다.
      - head와 마찬가지로, 상황에 따라 여는 태그와 닫는 태그를 생략할 수 있지만, 모두 작성하는 것이 좋다.

  - **3) 태그를 구분짓는 특성**
     1. 구획을 나누는 태그 (Layout)
        - 단독으로 사용 시, 눈에 보이지 않음
        - 여러 요소들을 묶어서 그룹화

     2. 그 자체로 요소인 태그
        - 단독으로 사용했을 때에도 눈으로 확인 가능

     3. 블록(Block)과 인라인(Inline)
        - 블록(Block)
          - 블록 레벨 요소는 언제나 새로운 줄에서 시작. 좌우 양쪽으로 (부모 요소 내) 가능한 최대 너비 차지
          - 상자를 아래로 쌓는 것
          - 블록 레벨 요소 예시
            ```html
            <p></p>
            <div></div>
            <header></header>
            <main></main>
            <nav></nav>
            <section></section>
            <article></article>
            <aside></aside>
            <footer></footer>
            <form></form>
            <table></table>
            <h1></h1> ~ <h6></h6>
            <hr/>
            <ul>
              <li></li>
            </ul>
            ...
            ```

        - 인라인(Inline)
          - 인라인 요소는 줄의 어느 곳에서나 시작할 수 있다.
          - 이전 요소가 끝나는 지점부터 시작, 요소의 내용(Content)만큼만 차지한다.
          - 인라인 요소 예시
          ```html
          <a></a>
          <br/>
          <button></button>
          <embed/>
          <iframe></iframe>
          <img/>
          <input/>
          <label></label>
          <script></script>
          <select></select>
          <span></span>
          <strong></strong>
          <template></template>
          <textarea></textarea>
          <video></video>
          ...
          ```
        > 태그 내 기본 스타일로 지정되어 있지만, CSS로 block과 inline 속성을 변경할 수 있다. ex. {display: inline-block} 등

        >인라인 요소는 블록 요소를 포함할 수 없다.
        나머지 관계는 가능.

    4. 콘텐츠 카테고리
        - ![image](https://user-images.githubusercontent.com/62092665/131220223-fb672b1e-d9f1-40bf-a9b7-18a83caa7f2a.png)*출처 : https://developer.mozilla.org/ko/docs/Web/Guide/HTML/Content_categories*

        - HTML5 부터 비슷한 특징을 가진 요소끼리 묶어서 7가지 카테고리로 세분화
        - 하나의 요소가 여러 카테고리에 포함될 수 있다.
        1. 메타데이터 콘텐츠(Metadata Content)
            - 문서의 메타데이터를 가리키는 요소
        2. 플로우 콘텐츠 (Flow Content)
            - 메타데이터를 제외하고, 거의 모든 요소.
            - 보통 텍스트나 임베디드 콘텐츠를 포함
        3.  섹션 콘텐츠(Section Content)
            - 웹 문서의 구획을 나눌 때 사용
        4.  헤딩 콘텐츠(Heading Content)
            - 섹션의 제목과 관련된 요소
        5.  프레이징 콘텐츠(Phrasing Content) 
            - 문단에서 텍스트를 마크업할 때 사용
        6.  임베디드 콘텐츠(Embedded Content)
            - 이미지나 비디오 등 외부 소스를 가져오거나 삽입할 때 사용되는 요소
        7.  인터랙티브 컨텐츠(Interactive Content)
            - 사용자와의 상호작용을 위한 컨텐츠 요소
            - ex. 회원가입 등의 input 등
    
<br/>
<hr/>

## 개발 환경
### 통합개발환경
  - Intergrated Development Environment, IDE
  - 개발할 때 필요한 여러가지 툴을 한 프로그램을 통해 사용할 수 있도록 한다.
    - 소스코드 편집기
    - 코드 실행을 위한 빌더
    - 문제 파악을 위한 디버거
    - 추가 기능을 위한 플러그인
  - VSCode 유용 단축기
    - 아래 행 삽입 : Ctrl + Enter
    - 위에 행 삽입 : Ctrl + Shift + Enter
    - 현재 행 이동 : Alt + 위/아래
    - 현재 행 복사 : Alt + Shift + 위/아래
    - 현재 행 삭제 : Ctrl + Shift + k
    - 주석 토클 : Ctrl + /
    - 현재 창 닫기 : Ctrl + w
    - 닫은 창 다시 열기 : Ctrl + Shift + t
    - 사이드바 탐색기 : Ctrl + Shift + e
    - 사이드바 전체 검색 : Ctrl + Shift + f
    
    
<hr/>  
    
## 추가 학습
### Markdown은 무엇일까?
 ![image](https://user-images.githubusercontent.com/62092665/131220438-20f3ee33-476b-43a7-aa5a-6368af856efe.png)*출처 : https://slowalk.com/2120*
 - 마크업 언어의 일종으로, 마크업 언어가 태그로 이루어져 사용하기 힘들어서 만들어진 파생형이다.
 - 읽고 쓰기 쉬운 문서 양식을 지향하며, 태그 대신 간단한 텍스트들과 몇 가지 문법만 알면 작성할 수 있도록 했다.
 - 블로그, 깃허브(.md), 노션 등 많은 최신 문서 작업 도구들이 마크다운을 지원하고 있다.
<br/>

### 크로스 브라우징 이슈

  - 20년 7월 ~ 21년 7월 기준 **세계** 브라우저 점유율
  ![image](https://user-images.githubusercontent.com/62092665/131221144-cea0ea13-3135-417a-b276-f1ce9354a1dc.png)*출처 : 스탯카운터(https://gs.statcounter.com/)*

  - 20년 7월 ~ 21년 7월 기준 **대한민국** 브라우저 점유율
  ![image](https://user-images.githubusercontent.com/62092665/131221113-294b8c8d-97e1-47ff-9b87-531a01b48a7c.png)
  *출처 : 스탯카운터(https://gs.statcounter.com/)*

  - 세계적으로 크롬 및 Safari의 점유율이 매년 강하게 증가하고 있고, IE는 지속적으로 감소하고 있다.
  - 국내 IE 비율은 2.62%로 세계적 추이에 비해 비교적 높은 수치를 나타내고 있다.
  - 크로스 브라우징 관련 이슈로, 많은 기능이 변화되는 분기점인 IE 10 이전 버전의 지원 여부가 주된 쟁점이었는데, IE 10 이전 버전을 지원하기 위해서는 최신 기능을 지원하는 브라우저들과의 차이가 많아 IE만을 위한 코드를 추가하는 등의 개발 비용이 많이 소모된다는 문제가 있다.
  - 마이크로소프트가 IE 11에 대한 기술지원을 오는 2022년 6월 15일부로 종료한다고 공식 발표하면서, 오래된 IE 10 이전 버전을 크로스 브라우징 대응 범위에서 제외하는 기업들이 많아지고 있다. 너무 오래된 버전을 계속 지원하는 것은 오히려 사용자가 업그레이드할 필요성을 못 느끼게하여 개발 비용을 지속시키는 등의 부정적 영향을 준다는 의견도 있다.
  - 일반적으로 크로스 브라우징 대응과 관련하여 개발 전 브라우저 대응 범위를 미리 결정한 후 개발하는 것이 추후 소모될 비용을 줄일 수 있는 방법이다.
  - 크로스 브라우징 대응 방법
    1. Can I use?
        ![image](https://user-images.githubusercontent.com/62092665/131221766-d15163a1-3635-4576-a49e-db76381254f6.png)
        - 스타일이나 속성 등을 검색하면 브라우저별 지원 유무를 버전 별로 제공해준다.
        - 많은 개발자들이 점유율이 높은 크롬을 중심으로 개발하며, Firefox, Safari 등의 다른 브라우저를 체크하는 편이다.
        - Safari의 경우, Mac OS에서만 사용할 수 있어 정확한 테스트를 위해서는 애플 사의 디바이스를 사용할 수 밖에 없다.
        (윈도우에서 safari를 사용할 수 있게 해주는 사이트가 있긴 하지만, 유료이며 꽤 불편하다.)
    2. CSS 초기화
        - 브라우저마다 태그별 기본 스타일이 다르게 적용되어 있다.
        - reset.css 등의 초기화 css 파일을 제공하여 다른 스타일을 통일시킬 수 있다.
        - css 초기화 라이브러리도 존재한다. (ex. Nomalize.css)
    3. Babel & Polyfill
        - Babel : ECMAScript 2015+ 코드를 이전 JavaScript 엔진에서 실행할 수 있는 이전 버전과 호환되는 JavaScript 버전으로 변환하는 데 주로 사용되는 무료 오픈 소스 JavaScript 트랜스컴파일러
        - Polyfill : 개발자가 특정 기능이 지원되지 않는 브라우저를 위해 사용할 수 있는 코드 조각이나 플러그인

    