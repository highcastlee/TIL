
# Collection

## 생성자 함수
  - 유사한 객체를 다중으로 만들 때 사용되는 함수
    - 타 언어의 class 개념과 유사
  - 일반적으로 생성자 함수의 첫 글자는 대문자로 시작
  - 생성자 함수로 객체 생성 시 new 연산자를 통해 객체 생성

  ```javascript
  function FishBread(flavor, price){
    this.flavor = flavor;
    this.price = price;
    this.base = "flour";
  }

  let bread_1 = new FishBread("cream", 1200);
  let bread_2 = new FishBread("redbean", 1000);
  let bread_3 = new FishBread("milk", 1500);
  ```

  - new 연산자를 사용하지 않고 생성된 경우 new.target으로 확인 가능
  ```javascript
  function FishBread(flavor, price){
    if (!new.target){
      // new 로 생성된 객체가 아닐 경우, new로 다시 return
      return new FishBread(flavor,price);
    }
    this.flavor = flavor;
    this.price = price;
    this.base = "flour";
  }
  ```


## Collection
  - 구조 혹은 비구조화 형태로 프로그래밍 언어가 제공하는 값을 담을 수 있는 공간
  - 자바스크립트에서 제공하는 collection
    1. Indexed Collection
        - Array
        - Typed Array
    2. keyed Collection
        - Object
        - Map
        - Weak Map
        - Set
        - Weak Set


### Map
  - 다양한 자료형의 key를 허용하고, key-value 형태의 자료형을 저장할 수 있는 Collection
  - Map 객체는 Map을 반환하므로 체이닝 가능
  - Map은 Object와 비교했을 때, 보다 다양한 key를 허용하고, 값의 추가/삭제 시 메서드를 통해야 한다는 차이가 있다.
    - **Object의 key는 String 이거나 Symbol 값이다.**
  - 대표 속성 및 메서드 
    - 생성자 : new Map()
      - 초기화(배열 이용) : `new Map( [ [key,value], [key,value] ] )`
    - 요소 개수 : Map.size
    - 요소 추가 : Map.set(key,value)
    - 요소 접근 : Map.get(key)
    - 요소 삭제 : Map.delete(key)
    - 전체 삭제 : Map.clear()
    - 요소 존재 확인 : Map.has(key)
    - 기타 : Map.keys(), Map.values(), Map.entires()

  - Map 반복문
    - Map은 iterator 속성을 가지고 있으므로 for .. of 구문을 통해 반복 가능
      ```javascript
      let recipe = new Map([['a',50],['b',100],['c',200]]);
      
      for (let item of recipe) console.log(item);
      // ['a',50]
      // ['b',100]
      // ['c',200]
      ```
  
  - Map <-> Object 변환
    - Object.fromEntries([iterable]);
    - Object.entries(obj)
    ```javascript
    let recipe = new Map([['a',50],['b',100],['c',200]]);
    // Map(3) { 'a' => 50, 'b' => 100, 'c' => 200 }

    let recipe_obj = Object.fromEntries(recipe);
    // { a: 50, b: 100, c:200}

    let recipe_kv = Object.entries(recipe_obj);
    // [['a',50],['b',100],['c',200]]

    let recipe_map = new Map(recipe_kv);
    // Map(3) { 'a' => 50, 'b' => 100, 'c' => 200 }

    ```
  
### Set
  - value만 저장하며 중복을 허용하지 않는 Collection
  - 중복 제거를 위해 주로 사용됨
  - Set 객체는 Set을 반환하므로 체이닝 가능
  - 대표 속성 및 메서드
    - 생성자 : new Set()
    - 요소 개수 : Set.size
    - 요소 추가 : Set.add(value)
    - 요소 삭제 : Set.delete(key)
    - 전체 삭제 : Set.clear()
    - 요소 존재 확인 : Set.has(key)
    - 기타 : Set.keys(), Set.values(), Set.entires()
  
  ```javascript
  let set = new Set();              // Set(0) {}
  let num = new Set([1,2,3,4,5]);   // Set(5) {1,2,3,4,5}
  let str = new Set("hello");       // Set(4) {'h',e','l','o'}

  set.add(1).add(1).add(10);   // Set(2) {1, 10,}
  
  console.log(set.has(10));    // true

  set.delete(1);
  console.log(set);  // Set(1) {10}
  ```

  - Set은 iterable 하므로 for ... of 구문을 통해 반복문 수행 가능
    ```javascript
    let str = new Set("Hello!");

    for (let item of str) console.log(item); 
    // H
    // e
    // L
    // o
    // !

    // Set의 entries()는 Map 과의 호환성을 위해 존재 [value, value] 형식 반환
    console.log(str.entries());
    // SetIterator {'H' => 'H', 'e' => 'e', 'l' => 'l', 'o' => 'o', '!' => '!'}
    
    for (let item of str.entries()) console.log(item)
    // ['H', 'H']
    // ['e', 'e']
    // ['L', 'L']
    // ['o', 'o']
    // ['!', '!']

    ```