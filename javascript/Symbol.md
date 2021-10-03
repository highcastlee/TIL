
# Symbol
  - ES6에서 도입된 7번째 데이터 타입
  - immutable value 
  - 주로 이름의 충돌 위험이 없는 유일한 객체의 property key를 만들기 위해 사용한다.



### Symbol 생성
  - Symbol()은 다른 생성자 함수와 달리 new 연산자를 사용하지 않는다.
  - Symbol() 함수를 호출하면 Symbol 이라는 type의 값을 생성한다.
  ```javascript
  let unique = Symbol();

  console.log(unique);         // Symbol()
  console.log(typeof unique);  // symbol

  let test = new Symbol();     // Uncaught TypeError: Symbol is not a constructor
  ```


  - Symbol() 함수에는 문자열을 인자로 전달할 수 있다.
    - 이 문자열은 Symbol 생성에 영향을 주지 않으며, 해당 Symbol에 대한 설명으로 디버깅 용도로만 사용된다.
    ```javascript
    let desc = Symbol('test');

    console.log(desc);                    // Symbol(test)
    console.log(desc == Symbol('test'));  // false
    ```
  

### Symbol의 사용
  - Symbol 값을 객체의 프로퍼티 키로 사용할 수 있다.
    - Symbol 값은 유일한 값이므로 Symbol을 키로 갖는 프로퍼티는 다른 어떠한 프로퍼티와도 충돌하지 않는다.
  
    ```javascript
    const obj = {};

    const test = Symbol('test2');
    obj[test] = 123;

    console.log(obj);       // { [Symbol(test)]: 123 }
    console.log(obj[test]);  // 123

    // errors 
    console.log(obj.[Symbol('test')])   // Uncaught SyntaxError: Unexpected token '['
    console.log(obj.Symbol('test'))   // Uncaught TypeError: obj.Symbol is not a function
    ```


### Symbol 객체
  - Symbol() 함수로 Symbol 값을 생성할 수 있다는 것은 Symbol이 함수 객체라는 의미이다.
  - Symbol 객체는 프로퍼티와 메소드를 가진다.
    - 프로퍼티 중 length와 prototype을 제외한 프로퍼티를 `Well-known Symbol`이라 부른다.



### Symbol.iterator
  - Well-known Symbol은 자바스크립트 엔진에 상수로 존재.
    - 자바스크립트 엔진은 Well-known Symbol을 참조하여 일정한 처리를 진행.
    - 즉, 어떤 객체가 **Symbol.iterator를 key로 사용한 메서드** 를 가지고 있으면 js 엔진이 해당 객체가 iteration protocol을 따르는 것으로 간주하고 iterator로 동작하게 한다.
  
  - 아래의 객체들은 iterator protocol을 준수하고 있으며 iterator를 반환한다.
    ```javascript
    Array
    Array.prototype[Symbol.iterator]
    
    String
    String.prototype[Symbol.iterator]
    
    Map
    Map.prototype[Symbol.iterator]
    
    Set
    Set.prototype[Symbol.iterator]
    
    DOM data structures
    NodeList.prototype[Symbol.iterator] HTMLCollection.prototype[Symbol.iterator]
    
    arguments
    arguments[Symbol.iterator]
    ```

  - 예제
    ```javascript
    const iterable = [1,2,3];

    const iterator = iterable[Symbol.iterator]();

    // 이터레이터의 next() 함수는 순회 가능한 자료 구조인 이터러블의 요소를 탐색하기 위한 포인터로서 value, done 프로퍼티를 갖는 객체를 반환한다.

    console.log(iterator.next()); // {value: 1, done: false }
    console.log(iterator.next()); // {value: 2, done: false }
    console.log(iterator.next()); // {value: 3, done: false }
    console.log(iterator.next()); // {value: undefined, done: true }
    ```



### iterable & iterator
  - 이터러블(iterable)
    - 이터러블 프로토콜을 준수한 객체
    - 이터러블은 Symbol.iterator 메소드를 구현하거나 프로토타입 체인에 의해 상속한 객체를 말한다.
    - Symbol.iterator 메소드는 이터레이터를 반환
    - 이터러블은 for … of 문에서 순회할 수 있으며 Spread 문법의 대상으로 사용할 수 있다.
  
  - Symbol.iterator 메소드를 소유하지 않은 일반 객체
    ```javascript
    const obj = { a: 1, b: 2 };
    // 일반 객체는 Symbol.iterator 메소드를 소유하지 않는다.
    // 따라서 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다.

    console.log(Symbol.iterator in obj); // false  
    for (const p of obj) {   // TypeError: obj is not iterable
      console.log(p);
    }
    ```

  - 하지만 일반 객체가 이터레이션 프로토콜을 준수하도록 구현하면 이터러블이 된다.
    ```javascript
    let numbers = {
      start = 0;
      end = 2;

      *[Symbol.iterator](){
        for (let num = this.start; num<=this.end; num++){
          yeild num+5;
        }
      }
    };
    console.log([...numbers]);
    ```
  


### Symbol.for()
  - 인자로 전달받은 문자열을 키로 사용하여 Symbol 값드리 저장되어 있는 전역 Symbol 레지스트리에서 해당 키와 일치하는 저장된 Symbol 값을 검색.
    - 값이 있으면 Symbol 값 반환
    - 값이 없으면 새로운 Symbol값 생성하여 해당 키로 전역 Symbol 레지스트리에 저장한 후, Symbol 값 반환

  ```javascript
  // 전역 Symbol registry에 name이라는 키로 저장된 Symbol 없으면 새 Symbol 생성 후 반환
  const test = Symbol.for('name');

  // 전역 Symbol registry에 name이라는 키로 저장된 Symbol이 있으므로 해당 Symbol 값 반환
  const test2 = Symbol.for('name');

  console.log(test);                // Symbol.for(name)
  console.log(test2);               // Symbol.for(name)
  console.log(test === test2);      // true
  ```  

  - Symbol()함수는 매번 다른 Symbol 값을 생성하지만, Symbol.for을 사용하면 같은 Symbol을 공유할 수 있다.



### Symbol.keyfor()
  - 전역 Symbol 레지스트리로부터 주어진 Symbol에 대한 공유 심볼 키(shared symbol key)를 반환

  - Symbol() 함수로 생성한 심볼 값은 키가 없다.
  - Symbol.for() 메서드로 생성한 심볼 값은 키가 있다.

    ```javascript
    const shareSymbol = Symbol.for('testKey');
    const key1 = Symbol.keyFor(shareSymbol);
    console.log(key1); // testKey

    const unsharedSymbol = Symbol('forKey');
    const key2 = Symbol.keyFor(unsharedSymbol);
    console.log(key2); // undefined
    ```



### typeof Symbol
  ```javascript
  typeof Symbol() === 'symbol'          //true
  typeof Symbol('foo') === 'symbol'     //true
  typeof Symbol.iterator === 'symbol'   //true
  ```

  ```javascript
  let test = Symbol('a');
  console.log(typeof test);  // 'symbol'
  
  console.log(Object(test) == test);  // true

  console.log(Object(test) === test);  // false

  ```



#### Symbol은 for ... in 반복문 사용 불가
  ```javascript
  var obj = {};
  
  obj[Symbol("a")] = "a";
  obj[Symbol.for("b")] = "b";
  obj["c"] = "c";
  obj.d = "d";
  
  // 심볼은 i에 포함되지 않는다.
  for (var i in obj) {
     console.log(i); 
  }
  //"c"
  //"d"
  ```



#### 기타
  - Object.getOwnPropertySymbols() 를 이용하여 심볼 값만 추출할 수는 있다.

  - 심볼을 키로 사용한 속성은 JSON.stringify()을 사용할 때 완전히 무시된다.

  - 속성의 키로서의 심볼 래퍼 객체
    ```javascript
    var sym = Symbol("foo");
    var obj = {[sym]: 1};
    obj[sym];            // 1
    obj[Object(sym)];    // 1
    ```