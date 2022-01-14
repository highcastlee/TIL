
# k진수에서 소수 개수 구하기
  - [k진수에서 소수 개수 구하기](https://programmers.co.kr/learn/courses/30/lessons/92335)


### solution
  - n.toString(k)로 k진수로 변환
  - '0'으로 split()하여 각 자리 숫자가 prime Number인지 확인하여 개수 반환

  ```javascript
  function isPrime(n){
    if(typeof n !== 'number' || n < 2) return false
    for(let i=2; i<=Math.sqrt(n); i++) if(n%i === 0) return false
    return true
  }

  function solution(n, k) {
    let nums = n.toString(k).split('0');
    return nums.filter(v=>isPrime(+v)).length
  }
  ```