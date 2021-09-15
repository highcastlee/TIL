
# HTML Style Guide
  - [HTML 스타일 가이드](https://www.w3schools.com/html/html5_syntax.asp)



## 문서 유형 사용
  - `<!DOCTYPE html>` or `<!doctype html>`으로 문서의 유형을 가장 먼저 선언해야한다.
  - DOCTYPE은 대문자를 사용하는 것이 일반적이다.
  >웹 브라우저는 새로운 표준으로 제작된 사이트와 예전 방식으로 제작된 사이트를 렌더링하기 위한 두 가지 모드를 제공하는데, 크게 **호환 모드(quirks mode)**, **거의 표준 모드(almost standards mode)**, **표준 모드(standards mode)**의 세 가지 방식이 존재한다.
  >이 때, DOCTYPE을 통해 브라우저가 HTML 페이지를 렌더링할 모드를 결정한다.

```html
<!DOCTYPE html>
```

## head 태그 생략 가능하지만, 작성하기
  - head 태그를 생략하면 HTML의 복잡성을 줄일 수 있고, 유효성 검사에서 에러나 경고 메시지가 뜨지도 않는다.
  - 하지만, 개발자들에게 익숙하지 않아 작성하는 것이 좋다.

## html과 body 태그 생략 가능하지만, 작성하기
  - HTML5에서 html과 body 태그는 생략은 가능하지만, html 태그는 `<html lang="ko"></html>` 처럼 페이지 언어를 지정하는데 권장되는 장소이므로, 생략하지 않는 것이 좋다.
  - body 태그를 새략할 경우, 구형 브라우저에서 오류가 발생할 수 있다.

## 요소(Element) 소문자 이름 사용
  - html은 대소문자를 구분하지 않아 어떤 것을 사용해도 동작은 같다.
  - HTML5 이전의 XHTML은 태그를 소문자로 작성해야했으므로, HTML5에서도 태그의 이름은 소문자로 작성하는 것을 추구한다.
  - 대소문자를 혼용하여 사용하는 것을 지양한다.

```html
<section>
  <h2>this is second title</h2>>
</section>
```

## 모든 HTML 요소 닫기
  - 요소를 닫지 않아도 동작은 동일하지만, 모든 HTML 요소를 닫는 것을 지향한다.

## 빈 요소 닫기
  - HTML5에서 빈 요소를 닫는 것은 선택 사항이지만, XHTML, XML에서는 닫는 슬래시(/)가 필수이므로, 닫기 슬래시를 유지하는 것이 좋다.

```html
<meta charset="utf-8" />
<!-- or -->
<div>
  <span>hi</span><br/><span>my name is ...</span>
</div>
```

## 소문자 속성 이름 사용
  - HTML5는 속성 이름에 대소문자를 섞을 수 있다.
  - 일관성을 위해 소문자를 사용하는 것이 좋다.

```html
<div class="menu"></div>
```


## 속성 값 따옴표 사용
  - HTML5는 따옴표 없이 속성 값을 허용한다.
  - 값에 공백이 있으면 따옴표를 사용해야한다.
  - 따옴표로 묶인 값은 읽기 쉬우므로 따옴표를 사용하는 것을 지향한다.

```html
<!-- not working-->
<table class=striped table>

<!-- bad -->
<table class=striped>

<!-- good -->
<table class="striped table">
```

## img 사용 시, 대체 텍스트 alt 속성 추가
  - 항상 이미지에 alt 속성을 추가하는 것을 지향한다.
  - 이미지를 표시할 수 없는 경우 중요하다.
  - 이미지의 width와 height를 정의하는 것은 이미지를 로드하기 전 공간을 미리 설정해놓기 때문에 깜빡임 현상이 줄어든다.

```html
<img src="./image.png" alt="이미지 설명" />
```


## 등호 주위 공백 미사용
  - 등호 주위 공백은 허용되지만, 공간과 그룹화를 위해 지향한다.

```html
<!-- bad -->
<link rel = "stylesheet" href = "style.css" />

<!-- good -->
<link rel="stylesheet" href="style.css" />
```


## 긴 코드 라인 피하기
  - 편집기 사용 시, 코드가 좌우로 길어지면 스크롤하기 불편하다.
  - 80자보다 긴 코드 행을 피하는 것을 지향한다.


## 빈 줄과 들여쓰기
  - 의미 없이 빈 줄을 추가하지 마라.
  - 논리적으로 의미가 있을 때, 블록을 분리하기 위해 빈 줄 사용 가능
  - 가독성을 위해 들여쓰기를 사용하라.
    - 모든 요소를 들여 쓸 필요는 없다.
```html
<body>
  <h1>City</h1>

  <h2>Tokyo</h2>
  <p>도쿄는 어쩌고저쩌고 블라블라</p>

</body>
```


## 메타 데이터 작성
  - title 요소는 HTML5에 필요하다.
    - title은 가능한 한 의미있게 작성한다.
  - 정확한 해석과 SEO를 위해 언어와 인코딩 모두 문서의 상단에 정의한다.

```html
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 Coding Style</title>
  </head>
</html>
```

## 뷰포트 설정하기
  - meta 태그를 통해 뷰포트를 제어할 수 있다.
  - 페이지의 크기와 스케일링을 제어하는 방법을 브라우저에 제공
  - width=device-width 는 페이지 너비를 장치 화면 너비에 따라 설정 (장치마다 다름)
  - initial-scale=1.0은 브라우저가 페이지를 처음 로드할 때 줌 레벨 설정

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```


## HTML 주석 처리
  - html의 주석은 `<!-- 주석 내용 입력 -->`로 표기한다.

## type 속성
  - CSS 및 Javascript에 대한 유형 속성을 생략한다.
  - HTML5는 text/css, text/javascript 를 기본값으로 포함하므로, 따로 지정할 필요 없다.

```html
<!-- 비추천 : 속성 지정 -->
<link rel="stylesheet" href="style.css" type="text/css">
<script src="common.js" type="text/javascript"></script>

<!-- 추천 : 속성 생략 -->
<link rel="stylesheet" href="style.css">
<script src="common.js"></script>
```
