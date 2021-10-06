
# 큐 (Queue)
  - 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 기반의 선형 자료구조

  ```javascript
  function Queue(array){
    this.array = array ? array : [];
  }

  Queue.prototype.getBuffer = function () {
    return this.array.slice();
  }

  Queue.prototype.isEmpty = function(){
    return this.array.length == 0;
  }

  let stack = new Queue([1,2,3]);


  // enqueue(): 끝에 데이터 추가
  Queue.prototype.enqueue = function (element){
    return this.array.push(element);
  }

  // dequeue(): 끝 데이터 삭제
  Queue.prototype.dequeue = function(){
    return this.array.shift();
  }
  
  // front() : 가장 첫 데이터 반환
  Queue.prototype.front = function(){
    return this.array.length == 0 ? undefined : this.array[0];
  }

  // size() : 스택 길이
  Queue.prototype.size = function(){
    return this.array.length;
  }

  // clear() : 큐 초기화
  Queue.prototype.clear = function(){
    this.array = [];
  }

  // indexOf() : 데이터 위치 값 조회
  Queue.prototype.indexOf = function(element, position = 0){
    for(let i=position; i<element; i++){
      if (element == this.array[i]) return i;
    }
    return -1;
  }

  // includes() : 데이터 존재 확인
  Queue.prototype.includes = function(element, position=0){
    for(let i=position; i<element; i++){
      if (element == this.array[i]) return true;
    }
    return false;
  }
  ```




### 큐 최적화
  - push/shift 방식을 index로 찾도록 변경
    - O(n) -> O(1)로 최적화할 수 있다.
  
  ```javascript
  function Queue(array){
    this.array = array ? array : [];
    this.tail = array ? array.length : 0;
    this.head = 0;
  }

  Queue.prototype.enqueue = function (element){
    return (this.array[this.tail++] = element)
  }

  Queue.prototype.dequeue = function(){
    if (this.tail === this.head) return undefined;
    let element = this.array[this.head];
    delete this.array[this.head++];
    return element;
  }
  ```