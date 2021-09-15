
# 구글 CSS Style Guide
  - [Google Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Style_Rules)


## 1. 유효성 검사
  - [W3C CSS 유효성 검사 툴](https://jigsaw.w3.org/css-validator/) 사용


## 2. CSS 네이밍
  - 의미 있거나 일반적인 네이밍을 사용한다.
  - 요소의 목적을 반영하는 명칭 지향
  - 아래의 예시 중, button-green은 내부 색을 green -> red로 변경하고자 할 때, 클래스 이름까지 바꿔야하는 경우가 발생하므로 지양해야할 표현법이다.

```css
/* 비추천 */
#yee-100 {...}

.button-green {...}

/* 추천 */
#gallery {...}

.video {...}

```


## id, class 네이밍
  - 의미를 파악할 수 있는 선에서 짧게 축약
  - id나 class에 어떤 메시지를 담을 것인지 고민
  - 축약 : ex. navigation -> nav
  - 의미 파악 : ex. atr -> author


## 타입 선택자
  - 꼭 필요한 경우가 아니라면, 요소에 id, class를 지정하여 사용하지 않는다.
  - 불필요한 부모, 조상 선택자의 사용을 피한다.

```css
/* 비추천 */
ul#expmple{...}
div.error{...}

/* 추천 */
#example{...}
.error{...}
```

## 단축 속성 사용
  - 코드 효율과 빠른 이해를 위해 가능한 한 단축 속성을 사용한다.

```css
/* 비추천 */
.error{
  padding-top:0;
  padding-right:2em;
  padding-bottom:3em;
  padding-left:2em;
}

/* 추천 */
.error{
  /* top, left & right, bottom */
  padding: 0 2em 3em;
}
```

## 0의 단위 및 생략
  - 0 값은 단위를 붙이지 않는다.
  - -1과 1 사이의 정수 부분 0은 생략할 수 있다.

```css
div{
  /* flex-basis는 0이라도 단위 필요함 */
  flex:1 1 0px;
  margin: 0;
  /* 0.8rem = .8rem */
  font-size: .8rem;
}
```

## 단어 사이 하이픈(-) 사용
  - id, class의 이해와 검색 가능성을 높이기 위해 단어와 단어 사이 하이픈 사용
  - **하이픈 사용법은 구글 스타일 가이드일 뿐, 필수는 아니다.**
```css
/* 비추천 */
.demoImage {...}
.error_code {...}

/* 추천 */
#video-id {...}
.ads-sample {...}
```




## property 선언 순서 (선택적)
  - 개발 편의를 위해 사용하지만, 공식적인 방법은 아니다.

>벤더 프리픽스(vendor prefix)란 이러한 주요 웹 브라우저 공급자가 새로운 실험적인 기능을 제공할 때 이전 버전의 웹 브라우저에 그 사실을 알려주기 위해 사용하는 접두사(prefix)를 의미
>ex. -moz-border-radius:3px;
>    -webkit-border-radius:3px;

  1. Google Style Guide
      - 알파벳 순서대로 속성 선언
      - vendor-prefix 선언은 알파벳 선언순서를 무시
      ```css
      .sample {
          background-color:#000;
          border:1px solid #eee;
          -moz-border-radius:3px;
          -webkit-border-radius:3px;
          border-radius:3px;
          color:#222;
          text-align:center;
      }
      ```
  2. NHN Style Guide
      - 내부적으로 결정한 css 속성 중요도에 따른 순서
      <img src="https://blog.kakaocdn.net/dn/diEEK0/btqxWc8083c/HxfiqurJJ2hjaQs0VchkD1/img.png" />


## 블록 내 들여쓰기 사용
  - 코드 가독성을 위한 들여쓰기 사용
  ```css
  .sample {
    background-color:#000;
    border:1px solid #eee;
  }
  @media screen {
    .sample {
      background-color:#222;
      border:1px solid #444;
    }
  }
  ```

## 선언 중지(; 사용)
  - 마지막 속성까지 세미콜론 사용하여 일관성 유지
  ```css
  /* 비추천 */
  .sample {
      background-color:#000;
      border:1px solid #eee
  }

  /* 추천 */
  .sample {
      background-color:#000;
      border:1px solid #eee;
  }
  ```

## 속성과 값 사이 여백
  ```css
  /* 비추천 */
  .sample {
      background-color:#000;
      border:1px solid #eee;
  }

  /* 추천 */
  .sample {
      background-color: #000;
      border: 1px solid #eee;
  }
  ```


## 선언 블록 분리
  - 여러 선택자를 사용할 때, 선택자 간 줄바꿈으로 구분한다.
  - 콤마로 구분된 것과 자손 관계인 것을 구분하기 쉬워지는 장점이 있다.
```css
/* 비추천 */
.sample, .sample2, .sample {...}

/* 추천 */
.sample,
.sample2,
.sample3 {...}
```


## 메타(meta) 규칙 - 섹션 주석 처리
  - 주석 및 줄바꿈을 통해 섹션을 구분한다.

  ```css
  /* Header */
  
  #adw-header {...}
  
  /* Footer */
  
  #adw-footer {...}
  
  /* Gallery */
  
  .adw-gallery {...}
  ```
