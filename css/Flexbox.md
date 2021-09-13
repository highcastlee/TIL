
# Flexbox
 - Flexable box layout
 - 행과 열 형태로 항목 무리를 배치하는 일차원 레이아웃 메서드
 - 부족한 공간에 맞추기 위해 축소되거나, 여분의 공간을 채우기 위해 변형된다.
 - display: flex가 설정된 부모 요소를 일컬어 **flex container**라고 한다.
 - flex container 내부에 flexbox로 레이아웃되는 항목을 **flex item**이라고 한다.
 - **기본 축**(main axis)은 flex item이 배치되고 있는 방향(flex-direction)으로 진행하는 축이다.
 - **교차 축**(cross axis)은 flex item이 배치되는 방향에 직각을 이루는 축이다.


### display 속성
  - `<display-outside>`
    - 요소의 외부 디스플레이 유형을 설정하는 키워드
    - ex. block, inline, inline-block
  
  - `<display-inside>`
    - 요소의 내부 디스플레이 유형을 설정하는 키워드
    - ex. flex, grid, inline-flex, inline-grid

  - `<display-listitem>`
    - 요소가 컨텐츠 블록 박스를 생성하고, 리스트 아이템 인라인 박스를 분리한다.
    - ex. list-item
  
  - `<display-internal>`
    - 자식이나 자손들로 채울 수 있는 다양한 역할가지며, 내재적인 디스플레이 값을 정의한다.
    - ex. table, ruby, table-row, table-cell 등

  - `<display-box>`
    - 요소가 컨텐츠를 포함하고 있는지 여부를 설정하는 키워드
    - ex. content, none

  - **접근성**
    - display:none은 접근성 트리로부터 삭제되므로, 스크린 리더에 인식되지 않는다는 것을 고려해야한다.
    - display:contents는 속성이 부여된 요소의 컨테이너를 없애는 특징이 있다. 즉, 하위 요소는 유지하고, 해당 요소는 접근성 트리로부터 삭제된다.

<hr>


## container 속성

### flex-direction
  - flex container 내의 아이템을 배치할 때 사용할 주축 및 방향(정,역방향)
  - row(기본 값), column, row-reverse; column-reverse

<img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-direction.jpg" alt="flex-direction" width="60%">
<img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-direction-main-start.jpg" alt="flex-direction" width="60%">

### flex-wrap
  - items의 여러 줄 묶음 (줄 바꿈)을 설정
  - nowrap(기본 값)
    - container 영역을 벗어나더라도 item 요소들을 한 줄에 배치한다. 이 때, 방향은 direction 유지
  - wrap
    - flex-item 요소들이 내부 로직에 의해 분할되어 여러 행에 걸쳐서 배치된다.
  - wrap-reverse
    - wrap 속성과 같지만, 요소가 나열되는 시작점과 끝점의 기준이 반대 배치된다.
  
<img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-wrap.jpg" alt="flex-wrap" width="60%">


### flex-flow
  - flex-direction과 flex-wrap의 단축 속성
  ```css
  .container{
    display: flex;
    flex-flow: row-reverse wrap;
  }
  ```

<hr>

## item 속성

### order
  - item의 순서를 설정
  - HTML 구조와 상관 없이 order 숫자가 클수록 나중 순서로 배치된다.
  - 마크업의 순서가 변경되지는 않는다.
  - 음수 값 가능하다.
  ```html
  <div class="container">
    <div class="item">1번</div>
    <div class="item">2번</div>
    <div class="item">3번</div>
  </div>
  ```
  ```css
  .container{
    display:flex;
  }
  .item:nth-child(1){
    order:2
  }
  /* item 2번이 item 1번보다 먼저 배치된다.*/
  .item:nth-child(2){
    order:1
  }
  ```

### flex-grow
  - item 증가 너비 비율을 설정
  - container 남은 공간에 item들이 각 비율로 너비를 증가시켜 채운다.
  - ex. item이 3개 일 때, 증가 비율이 1,2,1이라면,
    - item 1번은 1/4인 25%
    - item 2번은 2/4인 50%
    - item 1번은 1/4인 25%
  - 단, item의 width 이하로 줄어들지는 않고, 증가할 때의 너비만 변화한다.
<img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-grow.jpg" alt="grow" width="60%">


### flex-shrink
  - item 감소 너비 비율을 설정
  - 숫자가 크면 더 많은 너비가 감소한다.
  - flex-shrink의 기본 값이 1이기 때문에, 따로 설정 하지 않아도 감소는 동작한다.
  - item이 가변 너비가 아니거나, 0일 경우 효과가 없다.
  - 아래의 경우, item 1번은 너비 고정, 2번은 기본 1 비율, 3번은 2배 비율로 줄어든다.
    - item 1번은 0%
    - item 2번은 1/3, 33.3%
    - item 3번은 2/3, 66.6%
  ```css
  .item:nth-child(1){
    flex-shrink:0;
  }
  .item:nth-child(3){
    flex-shrink:2;
  }

  ```

### flex-basis
  - 아이템의 초기 크기를 설정
  - 개별 설정하지 않으면, flex-basis는 auto이며, item 크기는 요소의 width 값을 가리킨다.
    - basis를 설정하는 것이 직관적인 계산에 유리하다.
  - flex-basis : 0 일 때, item들의 너비 비율이 모두 1로 동일시 된다.
  - flex 단축 속성을 사용할 때, flex-basis를 생략하면 기본 값이 0이 된다.

<img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-shrink.jpg" alt="flex-basis" width="60%">



### flex 속성
  - item 너비 (grow, shrink, basis)를 설정하는 단축 속성
  - **basis를 단축 속성에서 생략할 경우, flex-basis:0 이다.**
  1. 값이 1개 일 때
      - `<number>` 값은 flex-grow
      - `<length>` 또는 % 를 지정하면 flex-basis
      - none, auto, initial 가능
  2. 값이 2개 일 때
      - 첫 번째 값은 number를 사용해야한다.
      - `<number>` 값은 flex-shrink
      - `<length>` 또는 % 또는 auto 를 지정하면 flex-basis
  2. 값이 3개 일 때
      - grow, shrink, basis 순서대로 사용

  ```css
  .item{
    /* flex-grow:1; flex-basis:0 */
    flex: 1;

    /*flex-shrink:1; flex-basis:50px */
    flex: 2 50px;

    /*flex-grow:1; flex-shrink:1;, flex-basis:20px */
    flex: 1 1 20px 
  }
  ```
  

### justify-content
  - 주 축의 정렬 방법을 설정
  - 속성 값
    - flex-start(기본 값) : 주 축의 시작점으로 정렬
    - flex-end : 주 축의 끝으로 정렬
    - center : 중앙 정렬
    - space-between : 시작 item은 주 축의 시작점, 마지막 item은 끝 점에 정렬되고, 나머지 item은 사이에 고르게 정렬.
    - space-around : item들을 균등한 여백으로 정렬 (양 끝 여백 존재)
    - space-evenly : item과 양 끝점의 여백을 균등하게 정렬

     <img src="https://studiomeal.com/wp-content/uploads/2020/01/10-1.jpg" alt="justify-content" width="60%">



### align-items
  - 교차 축의 정렬 방법을 설정 (1 줄)
  - 속성 값
    - stretch(기본 값) : Container의 교차 축을 채우기 위해 items를 늘림
    - baseline : items를 '문자 기준선'에 정렬
    - 대부분 justify-content와 동일
  - flex-wrap을 통해 items가 여러 줄일 경우, align-content 속성이 우선 적용
  - align-items를 사용하려면 align-content 속성을 기본 (stretch)로 설정해야한다.

### align-content
  - 교차 축의 정렬 방법을 설정 (여러 줄)
  - **flex items가 여러 줄이고, 여백이 있을 때 사용**

### align-self
  - 교차 축에서 개별 item의 정렬 방법을 설정
  - 필요에 의해 일부 item만 정렬 방법을 변경하려고 할 경우 사용
  - align-items 속성보다 우선
  - auto(기본 값) : align-items 속성을 상속 받음
  ```css
  .container{
    align-items: center;
  }
  .item{
    height:50px;
  }
  .item:nth-child(3){
    height:auto;
    align-self: stretch;
  }
  ```
  <img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-align-self.jpg" alt="align-self" width="60%">