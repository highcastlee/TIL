#### **문제**

<img src="https://blog.kakaocdn.net/dn/CjpS6/btrbOIvm4FB/Xx2UsY3FoGG9QWhNpWjqEK/img.png"/>

#### **풀이**

```javascript
function solution(citations) {
     citations = citations.sort(sorting);
     for(let i=0; i < citations.length; i++){
       if(citations[i] < i) return i
     }
     function sorting(a, b){
         return b - a;
     }
}
```

 1. 피인용수 내림차순 정렬

 2. (피인용수(citation) <= 논문 수 )가 될 때, h가 됨

   - 특정 값 이상의 논문 수를 정렬한 배열의 인덱스로 구한다.

\*아쉬운 점은 문제 설명에 h 조건이 안 될 때 return case에 대한 언급이 없어서 이해하는 데 불편했다. 채점 케이스에서는 h가 가능한 케이스만 주어지는 것으로 예상된다.

#### **참고**

[https://www.ibric.org/myboard/read.php?Board=news&id=270333](https://www.ibric.org/myboard/read.php?Board=news&id=270333) 