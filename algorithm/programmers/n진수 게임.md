# n진수 게임
  - [n진수 게임](https://programmers.co.kr/learn/courses/30/lessons/17687)

### 풀이
  - n진법으로 변환한 수의 문자열 nums
  - 접근하고자 하는 크기가 최대 t*m
  - 대문자 변환
  - p-1부터 m 간격 만큼 answer에 추가

```javascript
function solution(n, t, m, p) {
    let [answer, nums] = ['','']
    let i = 0
    while(nums.length<t*m) nums+= (i++).toString(n)
    nums = nums.toUpperCase()
    for(let j=p-1; j<m*t; j+=m) answer += nums[j]
    return answer
}
```