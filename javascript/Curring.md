

# Currying

## What?

- 커링은 f(a, b, c)처럼 단일 호출로 처리하는 함수를 f(a)(b)(c)와 같이 각각의 인수가 호출 가능한 프로세스로 호출된 후 병합되도록 변환하는 것입니다.


- 커링은 언어에 상관 없이 존재하는 하나의 기법입니다



- **Partial Application**: 함수를 반환하는 함수이지만 함수가 받는 인자는 하나일 필요는 없다. 여러 개를 받을 수도 있다.


```{.javascript}

// Currying function
const add = x => y => z => x + y + z;

// Partial Application function
const add = x => (y, z) => x + y + z;

```





## Why?

 - **Lazy evaluation** (지연 평가) : 계산의 결과 값이 필요할 때 까지 계산을 늦추는 기법이며, 이를 통해 불필요한 계산을 줄일수 있습니다.
 
 - 커링을 통해 함수의 **재사용성**을 높일 수 있습니다.
 
 
```{.javascript}
var fullName = function(last, first) {
    console.log(last + first);
};
fullName('홍', '길동'); // 홍길동
fullName('홍', '석준', ); // 홍석준
fullName('홍', '수지'); // 홍수지
```
 

 
 ```{.javascript}
let fullName = last => first => console.log(last + first); // 커링 함수

let family = fullName('홍');
family('길동'); // 홍길동
family('석준'); // 홍석준
family('수지'); // 홍수지
 
 
 ```



## How?

```{javascript}
	
//ES2015 버전
cosnt curry = f => a => b => f(a,b);
    
const sum = (a,b) => a+b;
    
let curriedSum = curry(sum);
arlert(curriedSum(1)(2));

```    
```{javascript}
function curry(f) {
 	return function(a) {
    	return function(b) {
      		return f(a, b);
    	};	
  	};
}

function sum(a, b) {
  	return a + b;
}

let curriedSum = curry(sum);
alert( curriedSum(1)(2) ); // 3

```



- 위 예시에서 return function()을 계속해서 만드는 것이 비효율적이기 때문에, 재귀를 활용하여 정의하는 방법도 있습니다.

```{javascript}

Function.prototype.curry = function(one) {
  var origFunc = this;
  var target = origFunc.length;
  var args = [];
  function next(nextOne) {
    args = args.concat(nextOne);
    if (args.length === target) {
      return origFunc.apply(null, args);
    } else {
      return function(nextOne) { return next(nextOne) };  //인수 개수가 맞을 때까지 next(nextOne) 반복 생성
    }
  }
  return next(one);
}

function multiplyFour(w, x, y, z) {
  return w * x * y * z;
}
multiplyFour.curry(2)(3)(4)(5); // 120


```



[참고자료](https://www.zerocho.com/category/JavaScript/post/579236d08241b6f43951af18)

