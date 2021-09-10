
# transform


## transform
  - 요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여하는 속성
  - none 혹은 다양한 transform-function으로 표현된다.


### transform 장점
  - 요소의 스타일을 직접 수정하는 것이 아니기 때문에 Reflow와 Repaint 가 발생하지 않는다.
  - 따라서, Reflow, Repaint가 발생하는 다른 속성보다 스타일 변경 즉, 애니메이션 구현의 성능이 좋다.


### transform-function
  - 변형 함수는 왼쪽에서 오른쪽으로 곱해진다.
  - 즉, 요소 변형을 오른쪽부터 왼쪽으로 하나씩 순서대로 적용한다.
  - 변형을 표현할 때, 다양한 좌표계를 사용할 수 있다.
  - **직교좌표계**
      - 평면 위의 점은 X좌표와 Y좌표를 사용
      - 벡터 표현 (x,y)로 나타냄
      - 원점 (0,0)은 좌상단 꼭짓점을 가리킨다.
      - 양의 좌표는 원점의 **오른쪽**과 **아래**로 진행
      - 음의 좌표는 왼쪽과 위로 진행
  

<img src="https://www.w3.org/TR/css-transforms-1/examples/origin1.svg" alt="transform">

### transform : scale()
  - 2차원 크기 조절 함수
  - 요소의 크기(width, height)는 변하지 않고, 화면 상의 크기만 변한다.
  ```css
  .example{
    transform:scale(0.5);       // 전체 크기 조절
    transform:scale(1.5, 0.5);  // x축 크기, y축 크기 조절
    transform:scaleX(0.5);       // x축 크기 조절
    transform:scaleY(0.5);       // y축 크기 조절
  }
  ```
  > 3차원 크기 조절은 scale3d() 함수 사용.

### transform : rotate()
  - 회전 함수
  - `<angle>` 자료형으로 표현된 값을 가진다.
    1. **deg**
        - 각도 표현
        - 45deg === 45도
    2. grad
        - grade
        - 1회전 = 400grad
    3. rad
        - radians
        - 1회전 = 2π radians, 약 6.2832rad
        - 1rad = 180/π deg
    4. **turn**
        - 회전 수를 표현
        - 0.25turn === 45도
  ```css
  .example{
    transform: rotate(45deg);
    transform: rotate(0.25turn) scale(0.5);
  }
  ```


### tranform : translate()
  - 이동 함수
  - 값이 하나일 때, translate(10px) = translate(10px, 0)로 인식한다.
  
  ```css
  .example{
    /* Single <length-percentage> values */
    transform: translate(200px);        // x축으로 200px 이동
    transform: translate(50%);          // x축으로 요소 크기의 50%만큼 이동

    /* Double <length-percentage> values */
    transform: translate(100px, 200px); // x축 100px, y축 200px 이동
    transform: translate(100px, 50%);
    transform: translate(30%, 200px);
    transform: translate(30%, 50%);
  }
  ```


### transform : skew()
  - 기울임 함수
  - deg, rutn, rad 등 angle 자료형을 사용한다.
  - 인자가 하나일 때, x축 기준으로 동작한다.
  - skewX()는 x축 방향으로 길어진다고 생각. x축으로 얼마나 벌어졌는지.
  - skewY()는 y축 방향으로 길어진다고 생각. y축으로 얼마나 벌어졌는지.
  <img src="https://t1.daumcdn.net/cfile/tistory/2479CC3E57B1282523" alt="skew">
  ```css
  .example{
    transform: skew(10deg);  //x축 기준 10도 기울임
    transform: skew(0, 10deg); // y축 기준 10도 기
  }
  ```

### tranform-origin
  - tranform의 기준점을 변경하는 속성
  - 기본 값은 요소의 중심인 center = (50%, 50%)
  ```css
  .example{
    transform-origin: center; // default
    transform-origin: top left; // 왼쪽 상단점 기준
    transform-origin: 50px 50px; // 왼쪽 상단에서 x축 50px y축 50px 이동한 지점 기준
  }
  ```

