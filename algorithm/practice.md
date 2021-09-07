
# javasript algorithm practice 1~4

## practice 1
  - 유형 : 배열, 해시
  - 핵심 : 입력 배열의 길이 만큼 번호 생성 후, 입력 배열에 없는 번호를 배열로 return
```javascript
const nums = [22, 99, 88]

console.log(solution(nums))

function solution (arr) {
  const n = arr.length
  const result = []
  const real = Array.from({ length: n }, (_, i) => i + 1)
  for (let i of real) {
    if (!nums.includes(i)) result.push(i)
  }
  return result
}

// [1,2,3]

```


## practice 2
 - 유형 : DFS
 - 핵심
    - 특정 word 찾는 문제이므로, index별 단어가 다르면 return false
    - 중복 단어(ex. '기기기기')일 경우, 배열 내 이전 단어 중복 체크 제외해야하므로 '*' 치환 후, 다음 자리 dfs 실행. 다시 원상태 복원 작업
    - 개인적으로, return 값을 boolean으로 체크하는 것이 계산에 편리함
```javascript
const input1 = [
  ['가', '나', '콜', '사'],
  ['라', '기', '참', '세'],
  ['미', '모', '리', '움'],
  ['상', '지', '곤', '타']
]

const input2 = '콜로세움'

console.log(solution(input1, input2))

function solution (puzzle, word) {
  const N = puzzle.length
  const dx = [0, 0, 1, -1]
  const dy = [1, -1, 0, 0]

  function dfs (x, y, count) {
    // 특정 word를 찾는 문제이므로, count를 세면서 각 자리 글자가 다르면 다 false
    if (puzzle[x][y] !== word[count]) return false
    // 글자 같고, 길이 full이면 true
    if (count === word.length - 1) return true

    puzzle[x][y] = '*'
    for (let i = 0; i < N; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
        continue
      }
      // dfs true이면 계속 return true
      if (dfs(nx, ny, count + 1)) return true
    }
    puzzle[x][y] = word[count]
    return false
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false
}

```

## practice 3
  - 유형 : 정렬
```javascript
const condition = [
  [4, 5, 6, 7, 8],
  [11, 12, 13, 14, 15],
  [15, 16, 19, 33, 35],
  [6, 8, 20, 22, 88],
  [8, 55, 66, 77, 100]
]
const n = 11

console.log(solution(condition, n))

function solution (arr, num) {
  const result = []
  arr.map(innerArr => innerArr.map(i => result.push(i)))
  result.sort((a, b) => a - b)
  return result[num - 1]
}
```

  #### 모범답안
  - 이진 탐색으로 특정 index의 값 찾기
  - 이진 트리는 이미 정렬이 된 것을 의미. 즉, arr 파라미터 입력 전에 정렬해야한다.

```javascript
function solve(arr, num) {
  const maxArray = arr[arr.length-1];
  const minNum = arr[0].length-1;
  let min = arr[0][0];
  let max = maxArray[minNum] + 1;
  while (min < max) {
    let mid = min + Math.floor((max-min)/2);
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] <= mid) {
          cnt++;
        } else {
          break;
        }
      }
    }
    if (cnt < num) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }
  return min;
};
```


## practice 4
  - 유형 : 서브배열, 슬라이딩 윈도우
  - 핵심
      - 중복 index를 찾아 첫 번째 중복된 단어의 index 이후부터 다시 체크
      - 중복 발생 시, 그 시점 최대 길이 maxLen 기록.
```javascript
const str = 'yeongmin'

console.log(solution(str))

function solution (s) {
  let store = []
  let maxLen = 0
  for (let i = 0; i < s.length; i++) {
    if (store.includes(s[i])) {
      let restartIdx = store.indexOf(s[i]) + 1
      maxLen = Math.max(maxLen, store.length)
      store = store.slice(restartIdx)
    }
    store.push(s[i])
  }
  return Math.max(maxLen, store.length)
}

```