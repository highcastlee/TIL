
## 멀티 스레드 구현하기
  - 멀티스레드는 자원을 여러 스레드가 공유하며 동작하는 원리
  - 접근 가능한 자원을 선언하고, 각 다른 스레드가 해당 자원을 사용하도록 구현
  - 구현 설명
    - 멀티스레드의 핵심은 공유 자원을 여러 스레드에서 접근 및 변경 가능하는 것 + 각 스레드 비동기적 실행
    - javascript에서 함수의 상위 스코프는 함수가 정의되는 시점에 결정되기 때문에 해당 예제 코드에서 각 스레드가 data.name에 접근할 수 있음


```javascript
function MultiThread() {
  const data = {
    name: "홍길동",
  };

  function Thread1() {
    console.log("스레드 1번 : " + data.name);
    data.name = "김개똥";
  }

  function Thread2() {
    console.log("스레드 2번 : " + data.name);
    data.name = "장발장";
  }

  setInterval(Thread1, 1000);
  setInterval(Thread2, 3000);
}

MultiThread();

```


### LRU Cache 구현하기
  - 자료구조 : Linked List + HashMap
  - head에 가까울수록 최근 사용한 데이터
  - tail에 가까울수록 오래 사용되지 않은 데이터
  - 용량 한계를 넘으면 tail에 가까운 데이터 먼저 삭제하고 새로 삽입한 데이터는 head로 이동

```javascript
function Node(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
}

function LRUCache() {
  this.head = null;
  this.tail = null;
  this.size = 0;
  this.maxSize = 4;
  this.cache = {};
}

LRUCache.prototype.set = function (key, value) {
  let newNode;
  if (this.cache[key] === undefined) {
    newNode = new Node(key, value);
  }

  if (this.size === 0) {
    this.head = newNode;
    this.tail = newNode;
    this.size++;
    this.cache[key] = newNode;
    return this;
  }

  if (this.size === this.maxSize) {
    delete this.cache[this.tail.key];
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size--;
  }

  this.head.prev = newNode;
  newNode.next = this.head;
  this.head = newNode;
  this.size++;

  this.cache[key] = newNode;
  return this;
};

LRUCache.prototype.get = function (key) {
  if (!this.cache[key]) {
    return undefined;
  }

  let foundNode = this.cache[key];

  if (foundNode === this.head) return foundNode;

  let previous = foundNode.prev;
  let next = foundNode.next;

  if (foundNode === this.tail) {
    previous.next = null;
    this.tail = previous;
  } else {
    previous.next = next;
    next.prev = previous;
  }

  this.head.prev = foundNode;
  foundNode.next = this.head;
  foundNode.prev = null;
  this.head = foundNode;

  return foundNode;
};

```


