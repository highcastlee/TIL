
# N-Queen
  - [N-Queen](https://programmers.co.kr/learn/courses/30/lessons/12952)

  <img src="https://user-images.githubusercontent.com/62092665/137754576-837b3c35-cd18-4baa-86f3-eef751c5b6f6.png">


### 풀이
  - 가로, 세로 축을 반복하며 조건 체크
    - 조건 1. 같은 축에 존재하면 안 됨
    - 조건 2. 대각선에 존재하면 안 됨
  - dfs로 각 케이스마다 재귀 실행
  - arr는 index가 col, value가 row인 말의 위치 배열

```javascript
function isPossible(arr, row, col){
  for (let c=0; c<col; c++){
    // 들어있는 말 중 넣으려는 행과 같은 행이 있다면 false
    if(arr[c]==row) return false;

    // 넣으려는 col과 row의 대각선에 다른 말이 있으면 false
    if(Math.abs(c-col) == Math.abs(arr[c]-row)) return false;
  }
  return true
}

function dfs(n, arr, col){
  if (col==n) return 1;

  let count =0;
  for(let row =0; row<n; row++){
    if(isPossible(arr,row,col)){
      arr[col] = row;
      // 특정 col에 말을 놓으면 그 다음 col부터 값이 들어간 arr로 다시 dfs 실행하여 위치 찾음
      count += dfs(n,arr,col+1);
    }
  }
  return count;
}

function solution(n){
  return dfs(n,[],0);
}
```