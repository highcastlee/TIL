# Javascript-Algorithm


## Javascrip 정리

### 기본 자료형
  - typeof 연산자로 확인되는 6가지 기본 데이터 유형
  1. undefined
  2. Boolean
  3. Number
  4. String
  5. BigInt
  6. Symbol
  - 구조 유형
  1. Object : 데이터 구조로 사용되는 모든 생성된 개체 인스턴스에 대한 데이터가 아닌 특수한 구조 유형.
  2. Function : 비데이터 구조이지만, typeof 연산자에도 값이 나온다.

### parser
  - string -> number
    > parseInt('100') //100 정수 반환. 단, Math.floor의 대체품으로 사용x
    > parseInt('10.2') // 10
    > Number('100') // 100
    > Number('10.2') // 10.2
    > Number('a') // NaN
  - number -> string
    > 100.toString() // 100
    > const a = 10.2
    > a.toString() // 10.2


### String
 - 문자 n번 반복
   > 'a'.repeat(3); // 'aaa'
 - Array(5).join("a"); // 'aaaa' a를 n-1번 반복 (빈 요소 5개 사이에 a를 넣는 식인듯)
 - String.index('a') // 문자열에서 a를 찾아서 첫 인덱스 반환. 없으면, -1
 - String.trim() // 양쪽 공백 제거

### Array
 - for in 반복문 : 객체의 모든 열거 가능한 속성을 순회
 - for of 반복문 : 반복 가능(Iterable)한 객체의 요소를 순회 (Array, Map, Set, String, arguments 객체 등)

```javascript
var iterable = [3, 5, 7];
iterable.foo = "hello";

for (var key in iterable) {
  console.log(key); // 0, 1, 2, "foo"
}

for (var value of iterable) {
  console.log(value); // 3, 5, 7
}

```
 - Array.reduce() 를 활용하면, map, filter, find 모두 구현 가능하다.
 ```javascript 
let arr = [9, 2, 8, 5, 7]
let sum = arr.reduce((pre, val) => pre + val)
console.log(sum)	// 31

// map
var arr = ['foo', 'hello', 'diamond', 'A']
var arr2 = arr.reduce((pre, value) => {
    pre.push(value.length)
    return pre
}, [])
console.log(arr2)   // [3, 5, 7, 1]

// filter
var arr = [4, 15, 377, 395, 400, 1024, 3000]
var arr2 = arr.reduce((pre, value) => {
    if (value % 5 == 0) {
        pre.push(value);
    }
    return pre;
}, []);
console.log(arr2)    // [15, 395, 400, 3000]

// find
var arr = [4, 15, 377, 395, 400, 1024, 3000]
var arr2 = arr.reduce((pre, value) => {
    if (typeof pre == 'undefined' && value % 5 == 0) {
        pre = value;
    }
    return pre;
}, undefined);
console.log(arr2)  // 15

 ```

- 배열 요소 추가
  ```javascript
  arr.push(요소);         //배열의 끝에 요소 추가
  arr.unshift(요소);      //배열의 앞에서 요소 추가
  arr.splice(a,b,요소);   //배열의 index a의 위치에 b개 제거 후 요소 추가
  ```  
- 배열 요소 제거
  ```javascript
  arr.splice(2, 0, 요소1, 요소2);   //배열의 index 2에 0개 제거 후 요소1, 요소2 추가
  arr.splice(2, 1, 요소1, 요소2);   //배열의 index 2에 1개 제거 후 요소1, 요소2 추가
  arr.splice(2, 2);  //배열의 index 2에서 2개 제거
  arr.splice(-2, 1); //배열의 index -2에서 1개 제거
  ```
- 배열 자르기
  ```javascript
  const arr = ['a', 'b', 'c', 'd'];
  const arr1 = arr.slice(1, 3); // [ 'b', 'c' ]
  const arr2 = arr.slice(1); // ['b', 'c', 'd']
  const arr3 = arr.slice(-3, -1); // ['b', 'c'] 
  ```

- 배열의 동적 할당
  ```javascript
  var arr = ['a', 'b', 'c'];

  arr[arr.length] = 'e'; // 배열의 끝에 요소를 추가 
  // arr = ['a', 'b', 'c', 'e'];

  arr.length = arr.length - 1; // 배열의 크기를 하나 줄인다
  // arr = ['a', 'b', 'c']

  arr[5] = 'g'; // index 5 에 요소를 추가, 빈요소([3],[4])는 undefined
  // arr = ["a", "b", "c", undefined, undefined, "g"]
  ```

- 배열이 특정값 포함하는지 확인
```javascript
// arr.includes(값)

const arr = [1,2];

arr.includes(1);  // 1 포함하면, true

arr.includes(2, -1); // index -1 자리에 2가 있으면, true


//arr.some(콜백 함수);
const arr = [{name: 'apple'}, {name: 'banana'}];

function checkApple(element)  {
  if(element.name === 'apple')  {
    return true;
  }
}

document.writeln(arr.some(checkApple)); // true

// includes()는 '===' 연산자로 비교해서 참조도 같아야한다.
// 객체 비교는 some()으로 찾아야한다.

```

 - 배열 뒤집기
```javascript
const arr = ['Apple', 'Banana', 'Orange'];
// 배열 거꾸로

const reverse = arr.reverse();
// ['Orange','Banana','Apple']


// 원본 유지하는 방법
const reverse = [...arr].reverse();
// ['Orange','Banana','Apple']

```

 - 배열 -> 문자열 변환
```javascript
//arr.join()

const arr = ['Apple', 'Banana', 'Orange'];

// "Apple,Banana,Orange"
const str1 = arr.join();

// "Apple-Banana-Orange"
const str2 = arr.join('-');

// "AppleBananaOrange"
const str3 = arr.join('');

// arr.toString(); 
arr.toString();
// arr를 Apple,Banana,Orange"로 변환 후 해당 문자열 리턴


```

### 객체


### 정렬

- sort([비교함수])
  > javascript sort()함수는 파라미터로 비교함수를 받는다.
  > 파라미터가 없으면, 배열 값을 문자로 인식하고, 유니코드 순서에 따라서 값을 정렬한다.

- 숫자 정렬
  ```javascript
  const arr = [2, 1, 3, 10];

  arr.sort(); 
  document.writeln(arr + '<br>'); // [1, 10, 2, 3]
  ```
  ```javascript
  // 비교 함수의 return 값이 0보다 크면, b가 a보다 앞에 온다.
  // 비교 함수의 return 값이 0보다 작으면, a가 b보다 앞에 온다.
  // 비교 함수의 return 값이 0이면, 순서 그대로 유지.

  const arr = [2, 1, 3, 10];

  arr.sort(function(a, b)  {
    return a - b;    //숫자 오름차순  (내림차순은 b-a)
  });
  document.writeln(arr + '<br>'); // [1, 2, 3, 10]
  ```

- 문자 정렬
  > 문자열은 유니코드 순서대로 정렬하기 때문에 파라미터 입력 x
  > 코드 크기는 소문자 > 대문자 > 숫자 순서 <br/>
  > 즉, b > A > 1
  ```javascript
  const arr = ['banana', 'b', 'Boy'];

  arr.sort();
  document.writeln(arr + '<br>'); // ['Boy','b', 'banana']

  // 대소문자 구분 없이 비교 (toUpperCase() 함수)
  arr.sort(function(a, b) {
    const upperCaseA = a.toUpperCase();
    const upperCaseB = b.toUpperCase();

    if(upperCaseA > upperCaseB) return 1;
    if(upperCaseA < upperCaseB) return -1;
    if(upperCaseA === upperCaseB) return 0;
  });

  document.writeln(arr + '<br>'); // ['b', 'banana', 'Boy']

  ```


### Math
 - 내림
   > Math.floor(1.2) // 1
   > Math.floor(-1.2) // -2
   > Math.floor(null) // 0

 - 반올림
   > Math.round(1.2) // 1
   > Math.round(1.5) // 2
   > Math.round(-1.2) // -1
   > Math.round(-1.5) // -1
   
 - 올림
   > Math.ceil(1.2) // 2
   > Math.ceil(-1.2) // -1
   
 - Math.max, Math.min
   > Math.max(a,b) //a와 b중 큰 값 리턴
   > Math.max(...arr)  // arr를 풀어서 전달하고, 큰 값 리턴
