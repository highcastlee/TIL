
# JadenCase 문자열 만들기
  - [JadenCase 문자열 만들기](https://programmers.co.kr/learn/courses/30/lessons/12951#)

  <img src="https://user-images.githubusercontent.com/62092665/138240194-77dfa4d5-2437-4f48-9d85-4c56fdd845dd.png">


### 풀이
  - 문자열을 공백 기준으로 나눈다
  - 첫 자리를 대문자로, 그 다음 자리는 소문자로 변환
  - 단, s 문자열에 공백이 연속으로 있을 경우, split(" ") 실행 시, ""가 요소에 추가될 수 있으므로, 해당 조건 체크


```javascript
function solution(s) {
    let arr = s.split(' ')
    for (let i=0; i<arr.length; i++){
        if(arr[i] == "") continue
        if(arr[i].length > 1){
            arr[i] = arr[i][0].toUpperCase()+arr[i].substr(1).toLowerCase()            
        }else{
            arr[i] = arr[i][0].toUpperCase()
        }
    }
    return arr.join(' ');
}
```


### 다른 풀이
  - v[0] 대신 v.charAt(0)을 한 이유는 공백이 연속으로 있을 때 발생하는 ""문자 때문이다.
  - "".[0]은 undefined
  - "".charAt(0)는 ""

```javascript
function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
```