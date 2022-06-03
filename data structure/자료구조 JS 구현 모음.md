# 자료구조

- [Stack](#stack)
- [Queue](#queue)
- [Deque](#deque)
- [HashTable](#hashtable)
- [Linked list](#linked-list-연결리스트)
- [Heap](#heap)
- [Tree](#tree)


---

## Stack

#### 특징
  - LIFO(last in first out) 후입 선출 구조
  - 활용 예시
    - ctrl+z : 최근 활동 수정
    - 브라우저 뒤로가기

```javascript
function Stack(capacity = 10){
  this.capacity = capacity;
  this.array = [];
}

Stack.prototype.size = function ()  {
  return this.array.length;
}

Stack.prototype.pop = function ()  {
  if(!this.isEmpty()) this.array.pop();
  else throw new Error('stack underflow');
}

Stack.prototype.add = function (value){
  if(value === null || value === undefined) throw new Error("you can't add empty value");
  if(this.size() < this.capacity) this.array.push(value);
  else throw new Error('stack overflow');
}

Stack.prototype.peek = function ()  {
  return this.array[this.array.length-1]
}

Stack.prototype.isEmpty = function ()  {
  return this.size() === 0
}

const stack = new Stack(2);
stack.add(1);
stack.add(2);
stack.add(3);
stack.peek();   // 3
stack.pop();    // 3
stack.size();   // 2

```

---


## Queue

  - FIFO 선입 선출 구조
  - 활용 예시
    - BFS 탐색
    - 은행 창구 번호표
    - 프린트 출력
    - OS task 스케줄링

```javascript

function Queue(capacity=10){
  this.capacity = capacity;
  this.array = [];
}

Queue.prototype.size = function ()  {
  return this.array.length
}

Queue.prototype.isEmpty = function ()  {
  return this.array.length === 0
}

Queue.prototype.add = function (value)  {
  if(value === null || value === undefined) throw new Error("you can't add empty value");
  this.array.push(value);
}

Queue.prototype.pop = function ()  {
  if(this.array.length) this.array.shift();
  else throw new Error('stack underflow');
}

Queue.prototype.peek = function ()  {
  return this.array[0]
}

const queue = new Queue(5);
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);

queue.peek();  // 1
queue.pop();   // 1
queue.size();  // 3

```

---

## Deque
  - 양방향 데이터 추가/삭제 가능

```javascript

function Deque(capacity=10){
  this.capacity = capacity;
  this.array = [];
}

Deque.prototype.size = function ()  {
  return this.array.length
}

Deque.prototype.isEmpty = function ()  {
  return this.array.length === 0
}

Deque.prototype.append = function (value)  {
  if(value === null || value === undefined) throw new Error("you can't add empty value");
  this.array.push(value);
}

Deque.prototype.appendLeft = function (value)  {
  if(value === null || value === undefined) throw new Error("you can't add empty value");
  this.array.unshift(value);
}

Deque.prototype.pop = function ()  {
  if(this.array.length) this.array.pop();
  else throw new Error('stack underflow');
}

Deque.prototype.popLeft = function ()  {
  if(this.array.length) this.array.shift();
  else throw new Error('stack underflow');
}

const deque = new Deque(10);

deque.append(1);        // array : [1]
deque.append(2);        // array : [1,2]
deque.appendLeft(5);    // array : [5,1,2]

deque.pop();            // array : [5,1]
deque.popLeft();        // array : [1]

```

---



## HashTable
  - 해시맵(해시테이블)
  - key-value 형태의 데이터 구조
  - key 값을 hash 함수로 변환하여 배열의 index로 사용함
  - 데이터 캐싱에 많이 사용된다.
  - 장점
    - 배열이기 때문에 접근 시간복잡도가 O(1)로 빠르다.
      (충돌 발생하면 O(n)까지 걸릴 수는 있다)
  - 단점
    - 고정된 배열을 생성해야 하므로 공간 효율성이 좋지 않다.
    - 순서가 있는 배열에는 적합하지 않다.
    - 해시함수 의존도가 높다.

```javascript
function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable(HASH_SIZE = 40) {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
  this.HASH_SIZE = HASH_SIZE;
}

// hashCode(): 해시 함수
HashTable.prototype.hashCode = function (key)  {
  let code = 0;
  for(let i=0; i<key.length; i++){
    code += key.charCodeAt(i);
  }
  return code % this.HASH_SIZE;
};

// put(): 데이터 추가
HashTable.prototype.put = function (key, value)  {
  let index = this.hashcode(key);
  // 충돌
  if(this.table[index] !== undefined){
    return false
  }
  this.table[index] = new Element(key,value);
  this.length++;
  return true
};

// get(): 데이터 조회
HashTable.prototype.get = function (key)  {
  return this.table[this.hashcode(key)]
};

// remove(): 데이터 삭제
HashTable.prototype.remove = function (key)  {
  let element = this.table[this.hashcode(key)];
  if(element !== undefined){
    delete this.table[this.hashcode(key)];
    this.length--;
  }
};


// clear(): 초기화
HashTable.prototype.clear = function ()  {
  this.table = new Array(this.HASH_SIZE);
  this.length = 0;
};

// size(): 크기 반환
HashTable.prototype.size = function ()  {
  return this.length;
};

// getBuffer(): 존재하는 데이터 셋 반환
HashTable.prototype.getBuffer = function ()  {
  let array = [];
  for(let i=0; i<this.table.length; i++){
    if(this.table[i]){
      array.push(this.table[i]);
    }
  }
  return array;
};
```

#### 선형 조사법(Linear probing)
  - 충돌 발생 시, 다음 빈 주소를 확인하여 저장한다
  - 장점
    - 충돌 해결 가능
  - 단점
    - 다음 index 찾는데 오래 걸림
    - 데이터가 몰리는 현상(clustering) 발생 가능성 있음

```javascript
// 나머지 HashTable과 일치

LinearHashTable.prototype.put = function (key, value)  {
  let index = this.hashcode(key);
  let startIndex = index;
  do{
    if(this.table[index] === undefined){
      this.table[index] = new Element(key,value);
      this.length++;
      return true
    }
    // 1씩 고정으로 증가하며 다음 자리 찾기
    index = index+1 % this.HASH_SIZE;
  }while(index !== startIndex);

  return false
}

LinearHashTable.prototype.get = function (key, value)  {
  let index = this.hashcode(key);
  let startIndex = index;
  do{
    if(this.table[index] !== undefined && this.table[index].key === key){
      return this.table[index].value
    }
    // 1씩 이동하며 key 찾기
    index = (index+1) % this.HASH_SIZE;
  }while(index !== startIndex)

  // 1회전 후 없으면 undefined
  return undefined
}

LinearHashTable.prototype.remove = function (key, value)  {
  let index = this.hashcode(key);
  let startIndex = index;
  do{
    if(this.table[index] !== undefined && this.table[index].key === key){
      let element = this.table[index];
      delete this.table[index];
      this.length--;
      return element
    }
    index = (index+1)% this.HASH_SIZE;
  }
  return undefined
}

```


#### 이중 해싱 기법
  - index를 만들기 위한 해시함수와 탐사 이동 폭을 만들기 위한 해시함수. 이중으로 사용
  - hash로 만든 index에서 충돌이 발생하면, 탐사 이동 폭을 다른 hash로 만들어서 탐사
  - 선형 탐사법의 clustering 방지를 위한 기법
  - 이 때, 테이블 사이즈와 해시에 사용되는 수는 소수를 사용하는 것이 성능적으로 좋다.
    - 소수가 아니면 반복이 발생할 가능성이 크기 때문

```javascript
DoubleHashTable.prototype.doubleHashCode = function (key)  {
  return (this.hashcode(key)+this.hashcode(key)) % this.HASH_SIZE
}

DoubleHashTable.prototype.put = function (key, value)  {
  let index = this.hashcode(key);
  let startIndex = index;
  do{
    if(this.table[index] === undefined){
      this.table[index] = new Element(key,value);
      this.length++;
      return true
    }
    index = this.doubleHashCode(key);
  }while(index !== startIndex)
  return false
}

DoubleHashTable.prototype.remove = function (key)  {
  let index = this.hashcode(key);
  let startIndex = index;
  do{
    if(this.table[index] !== undefined && this.table[index].key === key){
      let element = this.table[index];
      delete this.table[index];
      this.length--;
      return element
    }
    index = this.doubleHashCode(key);
  }while(index !== startIndex)

  return undefined
}

DoubleHashTable.prototype.get = function (key)  {
  let index = this.hashcode(key);
  let startIndex = index;
  do{
    if(this.table[index] !== undefined && this.table[index].key === key){
      return this.table[index];
    }
    index = this.doubleHashCode(key);
  }while(index !== startIndex)

  return undefined
}
```


#### 체이닝 기법
  - 별도의 자료구조인 연결리스트를 병합 사용하여 충돌 해결
  - 연결리스트 내 탐색을 줄이기 위해 최근 추가된 값이 앞에 오게 설정한다.
  - 장점
    - 충돌 상황에서 원하는 index를 찾아가는 과정이 짧기 때문에 성능상 좋다
  - 단점 
    - 연결리스트를 추가로 구현해야한다.
    - 해시함수에 비중이 커진다.
  

```javascript

// LinkedList 생성자 함수 생략
// 추가 : append(), 삭제 : remove(), 빈 체크 : isEmepty()

ChaningHashTable.prototype.put = function (key,value)  {
  let index = this.hashcode(key);
  if(this.table[index] === undefined){
    this.table[index] = new LinkedList();
  }
  // 처음 넣을 때 연결리스트 생성하고, 이후로는 append 실행
  // 해당 append 메서드는 추가한 값이 앞에 오도록 설정
  this.table[index].append(new Element(key,value));
  this.length++;
  return true
}


ChaningHashTable.prototype.get = function (key)  {
  let index = this.hashcode(key);
  if(this.table[index] !== undefined && !this.table[index].isEmpty()){
    let current = this.table[index].head;
    // 연결리스트의 data key 값이 찾는 key일 때까지 연결리스트 탐색
    do{
      if(current.data.key === key){
        return current.data.value;
      }
      current = current.next;
    }while(current);
  }
  return undefined;
}

ChaningHashTable.prototype.remove = function (key)  {
  let index = this.hashcode(key);
  let element;
  if(this.table[index] !== undefined){
    let current = this.table[index].head;
    do{
      if(current.data.key === key){
        element = current.data;
        this.table[index].remove(current.data);
        this.length--;
        // 연결리스트에서 제거 후 비게 되면 table에서도 삭제
        if(this.table[index].isEmpty()){
          delete this.table[index];
        }
      }
      current = current.next;
    }while(current)
  }
  return element;
}
```



---


## Linked List (연결리스트)
  - 떨어진 메모리에 존재하는 데이터를 연결해서 관리하는 자료 구조
  - 노드 : 데이터 저장 단위
  - 포인터 : 각 노드 안에서 다음이나 이전 노드와의 연결 정보 가지고 있는 공간
  - 장점
    - 미리 데이터 공간을 할당하지 않아도 되므로 동적인 추가 삭제에 유리하다.
  - 단점
    - 연결을 위한 공간이 따로 필요하므로 저장 공간 효율은 좋지 않다.
    - 연결 정보 탐색 시간이 필요하여 속도가 느리다.
    - 중간 데이터 삭제 시, 앞 뒤 연결 정보 재구성이 필요하다.

```javascript

function Node(data, next = null){
  this.data = data;
  this.next = next;
}

function LinkedList(){
  this.head = null;
  this.tail = null;
  this.size = 0;
}

LinkedList.prototype.insertFirst = function (data)  {
  this.head = new Node(data, this.head);
  if(!this.tail) this.tail = this.head
  this.size++;
}

LinkedList.prototype.insertLast = function (data)  {
  let node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  }else{
    this.tail.next = node;
    this.tail = this.tail.next;
  }
  this.size++
}

LinkedList.prototype.insertAt = function (data, index)  {
  if(index === 0){
    this.insertFirst(data);
  }
  else if(index === this.size) {
    this.insertLast(data);
  }
  else{
    let curIndex = 0;
    let node = this.head;
    while(curIndex < index-1){
      node = node.next;
      curIndex++;
    }
    node.next = new Node(data, node.next);
  }
  this.size++;
}

LinkedList.prototype.remove = function (data)  {
  //얕은 비교
  // 삭제 성공하면 true, 해당 데이터 없으면 false
  let node = this.head;
  if(node.data === data) {
    this.head = node.next;
    this.size--;
    return true
  }
  while(node.next){
    if(node.next.data===data){
      node.next = node.next.next;
      this.size--;
      return true
    }
    node = node.next;
  }
  return false
}

LinkedList.prototype.getData = function ()  {
  let node = this.head;
  const listData = [];
  while(node){
    listData.push(node.data);
    node = node.next;
  }
  return listData;
}

```


#### 이중 연결리스트
  - 양방향 prev, next 노드 연결 가능
  - 노드 탐색과 이동이 자유롭다

```javascript
function Node(data, prev=null, next=null){
  this.data = data;
  this.prev = prev;
  this.next = next;
}

function DoubleLinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoubleLinkedList.prototype.size = function (){
  return this.length
}

DoubleLinkedList.prototype.insertLast = function (data){
  let node = new Node(data);
  if(!this.head){
    this.head = node;
  }else{
    this.tail.next = node;
    node.prev = this.tail;
  }
  this.tail = node;
  this.length++;
  return
}

```

---

### Heap
  - 최댓값 및 최솟값을 빠르게 찾기 위해 완전이진트리 형태로 연산을 수행하는 자료구조
  - 속성 
    - 각 노드의 값은 자식 노드가 가진 값보다 작거나 큰 순서대로 정렬
    - 완전이진트리 형태
  - 종류
    - 최소힙 : 부모 노드의 값 <= 자식 노드의 값
    - 최대힙 : 부모 노드의 값 >= 자식 노드의 값
  - 시간복잡도
    - 생성 : O(NlogN), 연산 : O(logN)
    - 삽입, 삭제는 O(1)이지만, 힙을 재구조화하는 heapify가 O(logN)
    - 힙을 만드는 것은 heapify를 최대 N번 하므로 O(NlogN)
      
#### 구현
  - 완전이진트리이므로 1차원 배열로 표현 가능
  - 현재 노드가 index일 떄 
    - 부모 노드 : Math.floor((index-1)/2)
    - 왼쪽 자식 노드 : (index*2)+1
    - 오른쪽 자식 노드 : (index*2)+2
  - 힙 삭제 시, 끝 노드와 바뀐 뒤 재구조화 하는 이유는?
    - root의 값을 바로 삭제하면 이후의 힙 전체 순서가 바뀌어 재구조화 비용이 커지기 때문


```javascript
function Heap(){
  this.heap = [];
}

Heap.prototype.getParentIndex = function (index){  
  return Math.floor((index-1)/2);
}

Heap.prototype.getLeftChildIndex = function (index){  
  return index * 2 + 1
}

Heap.prototype.getRightChildIndex = function (index){  
  return index * 2 + 2
}

Heap.prototype.getParent = function (index){  
  return this.heap[this.getParentIndex(index)]
}

Heap.prototype.getLeftChild = function (index){  
  return this.heap[this.getLeftChildIndex(index)]
}

Heap.prototype.getRightChild = function (index){  
  return this.heap[this.getRightChildIndex(index)]  
}

Heap.prototype.swap = function (index1, index2){
  [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]];
}

Heap.prototype.getData = function () {
  return this.heap;
};

// root 제거 후 위에서 아래로 재구조화
Heap.prototype.pop = function (){
  this.swap(0, this.size()-1);
  let item = this.heap.pop();
  this.heapifyDown();
  return item;
}

// 노드 추가 후 아래부터 재구조화
Heap.prototype.insert = function (item){
  this.heap[this.size()] = item;
  this.heapifyUp();
}

// bottom-up 방식 재구조화(최대힙)
Heap.prototype.heapifyUp = function (){
  let index = this.size() - 1;
  // 최소힙. 부모가 더 크면 바꿈
  // while(this.parent(index) && this.parent(index) > this.heap[index]){
  //   ...
  // }
  //
  // 최대힙. 부모가 더 작으면 바꿈
  while(this.parent(index) && this.parent(index) < this.heap[index]){
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
}

// top-down 방식 재구조화(최대힙)
Heap.prototype.heapifyDown = function (){
  let index = 0;
  // 완전 이진 트리이기 때문에 left 우선 체크
  // 최대힙. child가 더 크면 교체
  while(
    this.leftChild(index) &&
    (this.leftChild(index) > this.heap[index] ||
    this.rightChild(index) > this.heap[index])
  ){
    // left보다 right가 더 크면 parent와 바꿀 childIndex를 right로 설정
    let childIndex = this.leftChildIndex(index);
    if(this.rightChild(index) && this.rightChild(index) > this.heap[childIndex]){
      childIndex = this.rightChildIndex(index);
    }
    this.swap(childIndex, index);
    index = childIndex;
  }
}


```

---

## Tree



### 이진탐색트리 

```javascript
function Node(data, left=null, right=null){
  this.data = data;
  this.left = left;
  this.right = right;
}

function BST(){
  this.root = null;
}

BST.prototype.add = function(data){
  const node = new Node(data);
  if(!this.root){
    this.root = node;
    return
  }
  const searchTree = function (node, data){
    if(!node) return
    if(data < node.data){
      if(!node.left) node.left = new Node(data);
      else searchTree(node.left, data);
    }else if(data > node.data){
      if(!node.right) node.right = new Node(data);
      else searchTree(node.right, data);
    }
  }
  searchTree(this.root, data);
}

BST.prototype.remove = function(data){

  const removeNode = function(node, removeData){
    if(!node) return
    if(node.data === removeData){
      if(!node.left && !node.right) return null
      if(!node.left) return node.right
      if(!node.right) return node.left

      // 삭제 데이터가 현재 node이면서, left,right 모두 존재할 경우
      let temp = node.right;
      while(temp.left){
        temp = temp.left;
      }
      node.data = temp.data;
      node.right = removeNode(node.right, temp.data);
    }else if(node.data > removeData){
    // 삭제 데이터가 현재 node 기준 left에 존재할 경우
      node.left = removeNode(node.left, data);
    }else{
    // 삭제 데이터가 현재 node 기준 right에 존재할 경우
      node.right = removeNode(node.right, data);
    }
    return node;
  }
  this.root = removeNode(this.root, data);
}

```


# BST insert, remove 메서드를 구현하라.

```javascript

function TreeNode(data, left, right){
  this.data = data;
  this.left = left;
  this.right = right;
}

function BST(){
  this.root = null;
}

BST.prototype.append = function(data){
  if(!this.root) {
    this.root = new TreeNode(data);
    return
  }
  const searchTree = function(node, data){
    if(!node || node.data === data) return
    if(node.data < data){
      if(!node.left) node.left = new TreeNode(data);
      else searchTree(node.left, data);
    }else if(node.data > data){
      if(!node.right) node.right = new TreeNode(data);
      else searchTree(node.right, data);
    }
  }
  searchTree(this.root, data);
  console.log(this.root);
}

BST.prototype.remove = function (data){
  if(!this.root) return
  const removeSearchedNode = function(node, data){
    if(!node) return
    if(node.data === data) node = null
    else if(node.data < data){
      removeSearchedNode(node.right, data);
    }else if(node.data > data){
      removeSearchedNode(node.left, data);
    }
  }
  removeSearchedNode(this.root, data);
  console.log(this.root);
}

```