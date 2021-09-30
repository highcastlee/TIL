
# Math
  - 표준 bulit-in 객체로써 수학적인 연산을 위한 속성값과 메서드를 제공하는 객체
  - Math는 생성자 함수가 아니며, 모든 속성과 메서드는 정적이기에 Math.function()으로 언제든 호출 가능
  - 대표 속성 및 메서드
    - 오일러 상수(e) : Math.E
    - PI(파이) : Math.PI
    - 절대값 : Math.abs(x)
    - 최대값 : Math.max(a,b, ...)
    - 최소값 : Math.min(a,b, ...)
    - 랜덤 난수 값 : Math.random()
      - 0 이상 1 미만의 랜덤 수
    - 제곱과 제곱근 : Math.pow(x,y), Math.sqrt(x)
    - 소수점 처리
      - Math.round(x)  // x를 반올림한 수와 가장 가까운 정수
      - Math.ceil(x)   // x 이상의 가장 작은 정수
      - Math.floor(x)  // x 이하의 가장 큰 정수


  ```javascript
  let nums = [1,-1,5,23,17,-4];

  console.log(Math.max(1,-1,5,23,17,-4)) // 23
  console.log(Math.max(1,-1,5,'23',17,-4)) // 23
  console.log(Math.max.apply(null, nums)) // 23
  console.log(Math.max(...nums));  // 23
  ```