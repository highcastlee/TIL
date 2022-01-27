
# 2 x n 타일링
  - [2 x n 타일링](https://programmers.co.kr/learn/courses/30/lessons/12900)


### 풀이
  - DP
  - 1부터 시작하는 피보나치

  ```javascript
  function solution(n) {
    const hash = {1:1,2:2};
    for(let i=3; i<n+1; i++){
        if(hash[i]) continue;
        hash[i] = (hash[i-1] + hash[i-2]) % 1000000007;
    }
    return hash[n]
  }
  ```