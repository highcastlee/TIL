
# 그리드 레이아웃

## grid
  - 웹 페이지를 위한 이차원 레이아웃 시스템


### display:grid
  - 블록 레벨 레이아웃 container
  - 정의된 컨테이너의 자식 요소들은 자동으로 grid items로 정의된다.

### grid-template-columns
  - 명시적 열 크기를 정의한다.
  - 라인의 이름도 정희할 수 있다.
  - fr(fraction, 공간 비율) 단위 사용 가능
  - repeat() 함수 사용 가능
  ```css
  .container{
    display:grid;
    /* 3개 아이템 열을 동일한 비율로 나타냄 */
    grid-template-columns: 1fr 1fr 1fr;
    
    /* grid 너비의 2대 1 비율로 2개 열 생성 */
    grid-template-columns: 2fr 1fr;

    /* 90px 크기의 열 4개 반복 생성 */
    grid-template-columns: repeat(4, 90px);

    /* 선의 이름 정의 */
    grid-template-columns: [first] 1fr [second] 1fr [third] 1fr;
  }
  ```

### grid-template-rows
  - 명시적 행 크기를 정의한다.
  - grid-template-column와 유사

### grid-template-areas
  <img src="https://heropy.blog/images/screenshot/css-grid/grid-template-areas-1.jpg" alt="grid-area">

  - 지정된 그리드 영역 이름(grid-area)을 참조해 템플릿을 생성
    - grid-area는 item에 적용하는 속성
  ```css
  .container {
    display: grid;
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "hd hd hd"
      "ma ma sb"
      "ft ft ft";
  }
  .header { grid-area: hd; }
  .main   { grid-area: ma;   }
  .sidebar  { grid-area: sb;  }
  .footer { grid-area: ft; }
  }
  ```

### row-gap(grid-row-gap)
  - 각 행과 행 사이의 간격을 지정한다.


### column-gap(grid-column-gap)
  - 각 열과 열 사이의 간격을 지정한다.


### gap
  - 단축 속성
  - row-gap, column-gap 순서 고정
  ```css
  .contaimer{
    /* row-gap column-gap*/
    gap: 30px 50px;
  }
  ```

### grid-auto-rows
  <img src="https://heropy.blog/images/screenshot/css-grid/grid-auto-rows-1.jpg" alt="grid-auto-rows">

  - *암시적* 행의 크기를 정의
  - item이 grid-template-rows로 정의한 명시적 행 외부에 배치되는 경우 암시적 행의 크기 적용
  ```css
  .container{
    display: grid;
    grid-template-rows: 100px 100px;
    grid-auto-rows:100px;
  }
  ```

### grid-auto-columns
  <img src="https://heropy.blog/images/screenshot/css-grid/grid-auto-columns-1.jpg" alt="grid-auto-columns">

  - *암시적* 열의 크기를 정의

### grid-auto-flow
  <img src="https://heropy.blog/images/screenshot/css-grid/grid-auto-flow-1.jpg" alt="grid-auto-flwo">

  - 배치하지 않은 item을 어떤 방식의 '자동 배치 알고리즘'으로 처리할 지 정의
  - 배치한 item은 grid-area를 사용한 아이템을 의미

### grid
  - 명시적(grid-template-rows, grid-template-columns, grid-template-areas), 암시적(grid-auto-rows, grid-auto-columns, grid-auto-flow) 속성 값을 한 번에 설정할 수 있다.
  - grid-template-XXX grid-auto-XXX
  - 개별 속성으로 연습하는 게 좋다.
  ```css
  .container {
    grid: <grid-template>;
    grid: <grid-template-rows> / <grid-auto-flow> <grid-auto-columns>;
    grid: <grid-auto-flow> <grid-auto-rows> / <grid-template-columns>;
  }
  ```


### justify-content
  - contents를 수평(행 축) 정렬
  - container가 전체 content보다 커서 남은 여백이 있어야한다.

### align-content
  - contents를 수직(열 축) 정렬
  - container가 전체 content보다 커서 남은 여백이 있어야한다.


### justify-items
  <img src="https://heropy.blog/images/screenshot/css-grid/justify-items-1.jpg" alt="justify-items">

  - item들을 수평(행 축) 정렬한다.
  - item 하나의 위치를 정렬하는 방법
  - stretch :(기본 값)
  ```css
  .container{
    display:grid;
    grid-template-rows:repeat(3, 1fr);
    justify-items: end;
  }
  .item{
    width:50px;
    height: 50px;
  }
  .item:nth-child(2){
    <!-- 자기 자신의 justify-items 속성을 지정할 수 있음 -->
    justify-self: start;
  }
  ```

### grid-row
  - grid-row-start, grid-row-end 단축 속성
  - grid-row-start
    - 그리드 선의 시작 위치 지정 (행의 순서가 아닌, 그리드 선!)
    - 숫자나 선 이름 or span 키워드 사용
  - grid-row-end
    - 그리드 선의 마지막 위치 지정
  - span 키워드
    - 현재 위치로부터 몇 칸인지 카운트
    - ex. span 2는 현재 위치로부터 2칸을 의미
  - 기본 값 : span 1
  - 마지막 선 : -1
  ```css
  .item:nth-child(1) {
    /* grid-row-start: span 1; (생략 시, 기본 값) */
    grid-row-end: 3;

    /* Column 4번에서 2번(4-2=2)까지 */
    grid-column-start: span 2;
    grid-column-end: 4;

    grid-row: 1 / 4
  }
  ```

  <img src="https://heropy.blog/images/screenshot/css-grid/grid-area-4.jpg" alt="grid-row">


### grid-area
  - grid-row-start, grid-column-start, grid-row-end, grid-column-end의 단축 속성
  - 키워드를 입력하면, 영역의 이름을 지정
  ```css
  /* 아래 예시는 같은 의미 */

  .item {
    grid-row: 2 / 3;
    grid-column: span 2 / -1;
  }
  .item {
    /* 시작 / 시작 / 끝 / 끝 */
    grid-area: 2 / span 2 / 3 / -1;
  }
  ```

### order
  - 아이템이 자동 배치되는 순서를 변경
  - 숫자가 작을수록 먼저 배치됨
  
  ```css
  .container {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
  .item:nth-child(1) { order: 1; }
  .item:nth-child(3) { order: 5; }
  .item:nth-child(5) { order: -1; }
  ```
  <img src="https://heropy.blog/images/screenshot/css-grid/order-1.jpg" alt="order">


### z-index
  - z-index로 아이템이 쌓이는 순서 변경 가능
  ```css
  .item:nth-child(1) {
    grid-area: 1 / 1 / 2 / 3;
  }
  .item:nth-child(2) {
    grid-area: 1 / 2 / 3 / 3;
    z-index: 1;
  }
  .item:nth-child(3) {
    grid-area: 2 / 2 / 3 / 4;
  }
  ```


<img src="https://heropy.blog/images/screenshot/css-grid/z-index-1.jpg" alt="z-index">


### grid의 단위
  - fr : fraction
  - 사용 가능한 공간에 대한 비율
  ```css
  .container {
    grid-template-columns: 1fr 2fr 100px 25%;
  }
  ```
  <img src="https://heropy.blog/images/screenshot/css-grid/fr-1.jpg" alt="fr">


  - min-content
    - contents의 최소 크기
    - 줄 바꿈이 최대한 발생시켜 크기를 줄인다.
  <img src="https://heropy.blog/images/screenshot/css-grid/min-content-2.jpg">

  - max-content
    - contents의 최대 크기
    - 줄 바꿈을 발생시키 않고 크기를 최대한 유지.
  <img src="https://heropy.blog/images/screenshot/css-grid/max-content-1.jpg">



### auto-fill, auto-fit
  - 행/열 개수를 그리드 및 행/열 크기에 맞게 자동으로 조정
  - repeat()과 함께 사용하며, 개수가 명확할 필요 없거나 명확하지 않은 경우에 유용하다. (반응형에 유리)
  - auto-fill은 남은 공간을 그대로 유지
  - auto-fit은 남는 공간을 축소

  ```css
  .container{
    display:grid;
    grid-template-columns: repeat(auto-fill, 100px);

    /* minmax -> 최소 100px, 최대 1fr */
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

  }
  ```

<img src="https://heropy.blog/images/screenshot/css-grid/auto-fill-3.jpg">