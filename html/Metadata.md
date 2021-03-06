

## HTML `<head></head>`
  - 페이지에 표시되지 않고, 페이지에 대한 metadata를 포함한다.
  - meta, title, script, style, link 등의 내용이 포함될 수 있다.

### 1. `<title></title>`
  - title은 문서 전체에 하나만 존재해야한다.
  ```html
  <title>네이버</title>
  ```

> <b>검색엔진최적화(SEO, Search Engine Optimization)</b>
>  - 검색자 (검색 유저)의 의도를 이해하고 이에 충실히 맞춰 웹 페이지의 콘텐츠를 제작하고, 이 페이지가 검색 결과 페이지에서 잘 노출 되도록 웹페이지의 태그와 링크 구조를 개선하여 자연 유입 트래픽을 늘리는 시책
>  - title을 작성할 때, 주의점
>       1. 하나 혹은 두 개의 단어로만 제목을 구성하는 걸 피하라. 설명 형식의 문장이 좋다.
>       2. 검색 결과는 보통 페이지 제못의 첫 55~60글자만 노출한다. 글자 수를 제한하라.
>       3. 키워드 나열식의 제목은 피하라. 검색 알고리즘이 결과에서 순서를 내리곤 한다.
>       4. 사이트 내 제목이 겹치지 않도록 한다. 유사 제목은 검색 정확도를 떨어트리는 요인.

### 2. `<meta>`
  - meta 태그는 html 문서를 설명하는 정보를 담은 태그이다.
  1. <b>name</b>
      - name 특성을 지정하면 전체 페이지에 적용되는 "문서 레벨 메타데이터"를 제공합니다.
      - ex. application-name(서비스명), author(문서 저작자), description(페이지에 대한 짧고 정확한 요약), generator(소프트웨어의 식벽자), keywords(페이지 콘텐츠와 관련된 키워드 목록), referrer(문서에서의 요청의 HTTP Referrer 헤더)
      ```html
      <meta name="application-name" content="facebook" />
      ```
  2. <b>http-equiv</b>
      - http-equiv 특성을 지정하면 유사한 이름의 HTTP 헤더가 제공하는 정보와 동일한 "프래그마 지시문"이 됩니다.
      - content-security-policy
        - 현재 페이지의 콘텐츠 정책을 정의할 수 있습니다. 대부분의 콘텐츠 정책은 허용하는 서버 출처와 스크립트 엔드포인트를 지정해 사이트 간 스크립트 공격 방어에 도움을 줍니다.
    
      - content-type
        - content-type을 지정할 경우, content 특성의 값은 반드시 "text/html; charset=utf-8"이어야 합니다. 
        >참고:    text/html MIME 유형으로 제공하는 문서에서만 사용할 수 있으며, XML MIME 유형의 문서에서는    사용할 수 없습니다.
    
      - default-style
        - 기본 CSS 스타일 시트 세트의 이름을 지정합니다.
    
      - x-ua-compatible
        - 지정할 경우, content 특성의 값은 반드시 "IE=edge"여야 합니다. 사용자 에이전트는 이    프래그마를 무시해야 합니다.
    
      - refresh
        - content 특성에 양의 정수 값을 설정한 경우, 페이지를 다시 불러오기 전까지의 초 단위 대기시간.
        - content 특성이 양의 정수 값을 가지고 그 뒤를 문자열 ;url=과 유효한 URL이 뒤따른다면, 해당 URL로 이동하기 전까지의 초 단위 대기시간.
  3. <b>charset</b>
      - charset 특성을 지정하면 문서 인코딩에 사용한 문자 인코딩을 나타내는 "문자 집합 선언"이 됩니다.
      - 페이지의 문자 인코딩을 선언합니다. 이 특성이 존재할 경우, 그 값은 반드시 문자열 "utf-8"의 대소문자 구분 없는 ASCII 표현이어야 합니다.
      - initial-scale : 장치 너비와 뷰포트 너비의 비율을 정의
      - user-scalable : yes || no. 사용자가 웹 페이지를 확대할 수 있는지 여부
      ```html
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      ```
  3. <b>itemprop</b>
      - 이 특성을 지정하면 "사용자 정의 메타데이터"를 제공합니다.
  4. <b>content</b>
      - http-equiv 또는 name 특성의 값을 담습니다.

### MIME 타입
  - MIME 타입이란, 클라이언트에게 전송된 문서의 다양성을 알려주기 위한 매커니즘이다. 웹에서 파일의 확장자는 별 의미가 없다. 그러므로 각 문서와 함께 올바른 MIME 타입을 전송하도록 서버가 정확히 설정하는 것이 중요하다. 브라우저들은 리소스를 내려받았을 때 해야 할 기본 동작이 무엇인지 경정하기 위해 대게 MIME 타입을 사용한다.
  - 문서 타입 정보를 실어나르는 유일한 방법은 아니다.
  - 웹에서는 MIME 타입만이 가장 적절하다.
    > 형식
    > type/subtype
  - text/plain, text/html, text/css, text/javascript
  - image/gif, image/png, image/jpeg ...

### `<style></style>`
  - 문서나 문서 일부에 대한 스타일 정보를 포함한다.
  ```html
  <style>
    p { color: red;} // tag 식별자
    #title { background-color: black;} // id 식별자
    .box { background-color: green; } // class 식별자
  </style>
  ```

### `<script></script>`
  - 데이터와 실행 가능한 코드를 문서에 포함할 때 사용한다. 보통 javascript 코드와 함께 사용
  - script는 body 태그 내에도 작성할 수 있다.
  - 브라우저가 html을 읽을 때, 순서대로 진행되기 때문에 script 태그는 화면에 요소들이 렌더링된 이후인 html 하단에 추가하는 것이 좋다.
  ```html
  <!-- 외부 js 파일 호출 -->
  <script src="javascript.js"></script>

  <!-- 직접 실행 -->
  <script>
    alert("hello");
  </script>
  ```

<br/>
<hr/>

## 추가학습
### og tag란?
  - Open Graph Tag는 콘텐츠의 요약내용이 SNS에 게시되는데 최적화된 데이터를 가지고 갈 수 있도록 설정하는 것이다.
  - <img src="https://user-images.githubusercontent.com/62092665/131359449-f4e3c074-d5f1-423c-a8ca-0a792084f81c.png" width="50%"/>
  ```html
  <!-- 기본적으로 웹에 설정해줘야하는 og 메타태그 -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://example.com/page.html">
  <meta property="og:title" content="Content Title">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:description" content="Description Here">
  <meta property="og:site_name" content="Site Name">
  <meta property="og:locale" content="en_US">

  <!-- 다음의 태그는 필수는 아니지만, 포함하는 것을 추천함 -->
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Naver 블로그, 카카오톡 미리보기 설정 -->
  <meta property="og:title" content="콘텐츠 제목" /> 
  <meta property="og:url" content="웹페이지 URL" />
  <meta property="og:type" content="웹페이지 타입(blog, website 등)" />
  <meta property="og:image" content="표시되는 이미지" /> 
  <meta property="og:title" content="웹사이트 이름" /> 
  <meta property="og:description" content="웹페이지 설명" /> 

  <!-- 트위터 미리보기 -->
  <meta name="twitter:card" content="트위터 카드 타입(요약정보, 사진, 비디오)" /> 
  <meta name="twitter:title" content="콘텐츠 제목" /> 
  <meta name="twitter:description" content="웹페이지 설명" /> 
  <meta name="twitter:image" content="표시되는 이미지 " /> 

  <--iOS-->
  <meta property="al:ios:url" content=" ios 앱 URL" />
  <meta property="al:ios:app_store_id" content="ios 앱스토어 ID" /> 
  <meta property="al:ios:app_name" content="ios 앱 이름" /> 
  <--Android-->
  <meta property="al:android:url" content="안드로이드 앱 URL" />
  <meta property="al:android:app_name" content="안드로이드 앱 이름" />
  <meta property="al:android:package" content="안드로이드 패키지 이름" /> 
  <meta property="al:web:url" content="안드로이드 앱 URL" />

  ```

[참고](https://velog.io/@byeol4001/Meta-Tag-OG%EC%98%A4%ED%94%88%EA%B7%B8%EB%9E%98%ED%94%84-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)