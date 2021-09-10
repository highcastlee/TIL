
# transition

## transition(전환)
  - 요소의 두 가지 상태 사이에 변화를 줄 수 있다.
  - javascript를 사용하지 않고, 시간에 따른 스타일의 변화를 줄 수 있다.


### transition-property
  - 변화를 주고자 하는 **특정 속성**을 선택하는 속성
  ```css
  .example{
    transition-property: none;         // 속성 선택 안 함
    transition-property: all;          // 모든 속성 선택
    transition-property: margin-right; // margin-right 속성 선택
  }
  ```

### transition-duration
  - 변화를 주고자 하는 **시간**을 선택하는 속성
  - `<time>` css data type 사용
  - s : second
  - ms : milisecond (1s === 1000ms)
  ```css
  .example{
    transition-property: margin-right; // margin-right 속성 선택
    transition-duration: 3s; // margin-right 속성에 3초 적용
  }
  ```

```css
.box{
  width:300px;
  background-color: black;

  transition-property: all;
  transition-duration: 2s;
}
/* hover 동작 시, 2초 동안 width, background-color 변경됨 */
/* transition 속성을 .box에 적용해야 hover 적용 전후로 모두 transition 동작한다. */
/* hover에 적용할 경우, 마우스가 떨어질 때 transition 바로 사라짐 */

.box:hover{
  width:400px;
  background-color: grey;

  /* transition-property: all; */
  /* transition-duration: 4s; */
}
```

### transition-delay
  - transition 요청이 적용되기 전까지 기다리는 시간을 임의로 지정
  ```css
  .example{
    transition-delay: 2s; //transition이 2초 뒤에 시작한다.
  }
  ```

### transition-timing-function
  - transition이 변경되는 중간 과정에서 속도를 조절한다.
  - 각 키워드는 cubic-bezier(n,n,n,n)을 미리 설정한 값이다.
  - n 값은 0이 가장 빠르고, 1이 가장 느리다.
    - 즉, cubic-bezier(0,1,1,0) 은 (빠름, 느림, 느림, 빠름)을 의미한다.
    - n이 음수일 경우, 반대 방향으로 동작한다.
  - cubic-bezier(n,n,n,n)으로 직접 설정할 수도 있다.
    >ease = cubic-bezier( 0.25, 0.1, 0.25, 1 )
    >linear = cubic-bezier( 0, 0, 1, 1 )
    >ease-in = cubic-bezier( 0.42, 0, 1, 1 )
    >ease-out = cubic-bezier( 0, 0, 0.58, 1 )
    >ease-in-out = cubic-bezier( 0.42, 0, 0.58, 1 )
    >step-start = steps( 1, start )
    >step-end = steps( 1, end )
    >steps( n, start|end ) : n단계로 나누어서 변화. start 또는 end를 입력하지 않으면 end로 처리
    >cubic-bezier( n, n, n, n ) : n에는 0부터 1까지의 수를 넣을 수 있다.

  <img src="https://www.codingfactory.net/wp-content/uploads/css-transition-timing-function-03-1024x601.png" alt="cubic-bezier">

  <br>

  <img src="https://static.commonlounge.com/fp/600w/DR4iAGakwKWanzAqAZrSE7Y091530232546_kc" alt="transition">

  ```css
  /* Keyword values */
  transition-timing-function: ease;
  transition-timing-function: ease-in;
  transition-timing-function: ease-out;
  transition-timing-function: ease-in-out;
  transition-timing-function: linear;
  transition-timing-function: step-start;
  transition-timing-function: step-end;

  /* Function values */
  transition-timing-function: steps(4, jump-end);
  transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);

  /* Steps Function keywords */
  transition-timing-function: steps(4, jump-start);
  transition-timing-function: steps(10, jump-end);
  transition-timing-function: steps(20, jump-none);
  transition-timing-function: steps(5, jump-both);
  transition-timing-function: steps(6, start);
  transition-timing-function: steps(8, end);

  /* Multiple timing functions */
  transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.  1);
  ```

### transition
  - transition-property, transition-duration, transition-timing-function, transition-delay 를 위한 단축 속성
  - 가장 먼저 property를 작성해야 어떤 속성을 선택할 지 알 수 있기에 아래의 순서를 따르는 게 좋다.
  ```css
  .example{
    /*
      transition-property: all;
      transition-duration: 3s;
      transition-timing-funtion: ease-in-out;
      transition-delay: 1s;
    */
    transition: all 3s ease-in-out 1s;
  }
  ```

### transform + transition 활용
  
```css
.box{
  width: 500px;
  height: 500px;
  background: #55efc4;

  transition: all 2s ease-in-out 1s;
  /* hover의 변화가 발생하면 1초 뒤 해당 transition 적용하여
    모든 속성을 2초 동안 ease-in-out 방식으로 변화한다.
  */
}

.box:hover{
  border-radius: 80px;
  background-color: #d63031;
  transform: translate(300px, 300px) rotate(180deg);
}
```

<img src="https://blog.kakaocdn.net/dn/ctDuZy/btqxqJ6RdSM/Hakx9K86wGgWwWEGjzaGik/img.gif" alt="transform and transition">