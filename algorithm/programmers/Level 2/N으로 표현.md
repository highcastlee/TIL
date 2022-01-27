
# N으로 표현

## DP
  - [N으로 표현](https://programmers.co.kr/learn/courses/30/lessons/42895)

  <img src="https://user-images.githubusercontent.com/62092665/137697967-93beb9df-30ef-40e5-836d-526a67f0a294.png">

### 풀이 
  - N 사용 횟수의 최솟값을 구하는 문제
  - N의 개수를 1~8개까지 늘리면서 number가 되면 해당 개수 리턴
  - padstart는 i개 만큼 N을 채우는 String 메서드
  - Set에 각 계산 결과 값을 중복 없이 저장
  - Set에 저장된 계산 결과 중 number 찾기
  - 핵심
    - Set을 통해 중복 없이 저장
    - N을 i개 만큼 반복해서 연결시킴
    - s[i-j]를 통해 4개 사용 시, (1개+3개),(2개+2개),(3개+1개) 경우 모두 체크

```javascript
function solution(N, number) {
    let s = new Array(9).fill(0).map(()=>new Set())
    
    for (let i=1; i<9;i++){
        s[i].add(Number("".padStart(i,N)));
        
        for(let j=1;j<i;j++){
            for (const arg1 of s[j]){
                for(const arg2 of s[i-j]){
                    s[i].add(arg1+arg2);
                    s[i].add(arg1-arg2);
                    s[i].add(arg1*arg2);
                    s[i].add(Math.floor(arg1/arg2));
                }
            }
        }
        if(s[i].has(number)) return i;
    }
    return -1;
}
```