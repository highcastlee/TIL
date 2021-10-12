
# 힙(Heap)
  - 최댓값 혹은 최솟값을 빠르게 찾기 위해 완전이진트리 형태로 연산을 수행하는 자료구조
  - 대표 속성
    - 정렬 : 각 노드의 값은 자식 노드가 가진 값보다 작거나 큰 순서대로 정렬
    - 형태 : 트리의 형태는 완전이진트리(complete binary tree) 모양
  - 종류
    - 최소 힙(Min Heap) : 부모 노드의 값이 자식 노드의 값보다, 작거나 같은 완전 이진 트리
    - 최대 힙(Max Heap) : 부모 노드의 값이 자식 노드의 값보다, 크거나 같은 완전 이진 트리


### 힙 구현
  - 완전이진트리 성질을 만족하기 때문에 1차원 배열로 표현 가능
  - 현재 노드 : N
  - 부모 노드 : (N-1)/2
  - 왼쪽 자식 노드 : (N*2)+1
  - 오른쪽 자식 노드 : (N*2)+2

- Heap 생성 및 위치 변경
```javascript
function Heap(){
  this.items = [];
}

Heap.prototype.swap = function(index1, index2){
  let tmp = this.items[index1];
  this.items[index1] = this.items[index2];
  this.items[index2] = tmp;
}
```

- index 및 노드 값 구하기

```javascript
Heap.prototype.parentIndex = function(index){
  return Math.floor((index-1)/2);
}

Heap.prototype.leftChildIndex = function (index){
  return index * 2 + 1;
}

Heap.prototype.rightChildIndex = function (index){
  return index * 2 + 2;
}

Heap.prototype.parent = function (index){
  return this.items[this.parentIndex(index)]
}
Heap.prototype.leftChild = function (index){
  return this.items[this.leftChildIndex(index)]
}
Heap.prototype.rightChild = function (index){
  return this.items[this.rightChildIndex(index)]
}

```

- peek(), size()

```javascript

// peek(): 현재 정렬된 최소/최대 요소 값 반환
// 최소힙은 최소, 최대힙은 최대
Heap.prototype.peek = function (){
  return this.items[0]
}

Heap.prototype.size = function (){
  return this.items.length;
}
```


- 노드 추가 : insert(), bubbleup()
  - (최소힙) 추가한 item의 index를 기준으로 부모 노드가 item보다 더 크면, 부모 노드와 index를 교환
  - item이 최소가 되는 위치까지 반복

```javascript
Heap.prototype.insert = function(item){
  // item 추가 후, 해당 item 위치 변경
  this.items[this.size()] = item;
  this.bubbleup();
}

Heap.prototype.bubbleup = function(){
  let index = this.size() - 1;
  while(this.parent(index) && this.parent(index) > this.items[index]){
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
}
```

- 노드 삭제 : extract(), bubbleDown()
  - (최소힙) root 노드와 가장 끝 노드 위치 바꾼 후 pop()으로 root 노드 삭제
  - root 위치로 이동한 끝 노드를 bubbleDown을 통해 위치 정렬

```javascript
Heap.prototype.extract = function(){
  let item = this.items[0];
  this.items[0] = this.items[this.size()-1];
  this.items.pop()
  this.bubbleDown();
  return item;
}

Heap.prototype.bubbleDown = function () {
  let index = 0;
  while(
    this.leftChild(index) &&
    (this.leftChild(index) < this.items[index] ||
     this.rightChild(index) < this.items[index])
  ) {
    let childIndex = this.leftChildIndex(index);
    // 만약 왼쪽 자식 노드보다 오른쪽 자식 노드가 더 작으면(최소힙) 오른쪽이랑 바꾼다.
    if(
      this.rightChild(index) &&
      this.rightChild(index) < this.items[childIndex]
    ){
      childIndex = this.rightChildIndex(index);
    }
    this.swap(childIndex, index);
    index = childIndex;
  }
};
```

- 최대힙
  - 최소힙에서 비교함수만 바꾸면 된다.

```javascript
Heap.prototype.bubbleup = function(){
  let index = this.size() - 1;
  while(this.parent(index) && this.parent(index) < this.items[index]){
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
}

Heap.prototype.bubbleDown = function () {
  let index = 0;
  while(
    this.leftChild(index) &&
    (this.leftChild(index) > this.items[index] ||
     this.rightChild(index) > this.items[index])
  ) {
    let childIndex = this.leftChildIndex(index);
    // 만약 왼쪽 자식 노드보다 오른쪽 자식 노드가 더 작으면(최소힙) 오른쪽이랑 바꾼다.
    if(
      this.rightChild(index) &&
      this.rightChild(index) > this.items[childIndex]
    ){
      childIndex = this.rightChildIndex(index);
    }
    this.swap(childIndex, index);
    index = childIndex;
  }
};
```