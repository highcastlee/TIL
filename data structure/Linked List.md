

### 연결 리스트(Linked List)
  - 배열은 순차적으로 연결된 공간에 데이터를 나열하는 구조라면, 연결 리스트는 떨어진 곳에 존재하는 데이터를 연결해서 관리하는 구조이다.
  - 노드(Node) : 데이터 저장 단위(data, pointer)로 구성
  - 포인터(pointer) : 각 노드 안에서, 다음이나 이전의 노드와의 연결 정보를 가지고 있는 공간
  
### 연결 리스트 장단점 (C언어 기준)
  - 장점
    - 미리 데이터 공간을 할당하지 않아도 된다.
      (배열은 미리 공간 할당 해야한다.)
  - 단점
    - 연결을 위한 공간이 필요하므로 저장 공간 효율이 좋지 않다.
    - 연결 정보를 찾는 시간이 필요하므로 접근 속도가 느리다.
    - 중간 데이터 삭제 시, 앞 뒤 연결 정보를 재구성해야하는 작업이 필요하다.


### Javascript 객체지향 연결 리스트 및 관련 함수 구현
  ```javascript
  class Node {
    constructor(data, next = null) {
      //data와 next를 넣고 next의 디폴트는 null로 지정 왜냐하면 linkedlist의 tail(마지막은) null로 끝나기때문
      this.data = data;
      this.next = next;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    // 리스트 앞에 데이터 삽입
    insertFirst(data){
      //head에는 입력된 data가 들어가고, 기존 head는 next로 들어감.
      this.head = new Node(data, this.head);
      this.size++;
    }

    //리스트 끝에 데이터 삽입
    insertLast(data){
      // 마지막 데이터 삽입 시, next 없이 입력 받은 data만 넣음
      let node = new Node(data);
      let current;

      if (!this.head){
        this.head = node;
      } else{
        current = this.head;
        // 현재 head로부터 마지막 node까지 도달하기
        while (current.next){
          current = current.next;
        }
        // 마지막 노드에서 입력받은 데이터 삽입
        current.next = node;
      }
      this.size++;
    }

    //특정 index에 데이터 삽입
    insertAt(data, index){
      // 넣고싶은 index가 size 범위를 넘어서면 중간 삽입 못함
      if (index > 0 && index > this.size){
        return;
      }
      // index가 0이면 첫 자리에 data 넣고 next에 기존 this.head 연결시킨다.
      if (index === 0){
        this.head = new Node(data, this.head);
        this.size++;
        return;
      }
      
      const node = new Node(data);
      let current, previous;
      
      current = this.head;
      let count = 0;
      // index 위치까지 current node 변경하기
      while (count < index){
        previous = current;
        count++;
        current = current.next;
      }
      // 이전 노드의 next에 삽입할 node를 넣고, node에 index 이후 리스트를 연결시킨다.
      node.next = current;
      previous.next = node;
      this.size++;
    }

    // 특정 index의 데이터 호출
    getAt(index){
      let current = this.head;
      let count = 0;
      while (current){
        if (count === index){
          return current.data
        }
        count++;
        current = current.next
      }
      return null;
    }

    // 특정 index의 데이터 삭제
    removeAt(index){
      if (index>0 && index > this.size){
        return;
      }
      let current = this.head;
      let previous;
      let count = 0;

      if (index === 0){
        this.head = current.next;
      } else{
        while(count < index){
          count++;
          previous = current;
          current = current.next;
        }
        // current가 아닌 next를 넣어주면서, 제거 시도
        previous.next = current.next;
      }
      this.size--;
    }

    // 연결 리스트의 데이터만 반환하기
    getListData(){
      const data = [];
      let current = this.head;
      while (current){
        data.push(current.data);
        current = current.next;
      }
      return data;
    }
  }
  ```
  

### 이중 연결 리스트
  - <img src="https://itwiki.kr/images/1/1a/%EC%9D%B4%EC%A4%91_%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8.jpeg" alt="linked list image" />
  - 연결 저장 공간에 next뿐만 아니라, prev도 저장한 연결 리스트
  - 양방향으로 연결되어 있기 때문에, 노드를 탐색하는 방향이 양쪽으로 가능하다.

  ```javascript
  // node에 prev가 추가된다.
  function Node(data) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }

  function DoubleLiskedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // size() : 연결 리스트 내 노드 개수 확인
  DoubleLinkedList.prototype.size = function () {
    return this.length;
  }

  // isEmpty(): 객체 내 노드 존재 여부
  DoubleLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  }

  //
  DoubleLinkedList.prototype.size = function () {
    return this.length;
  }
  ```

  - 연결 예제
    ```javascript
    let dll = new DoubleLinkedList();
    let node;
    
    node = new Node(123);
    dll.head = node;
    dll.tail = node;
    dll.length++;
    console.log(dll);
    // DoubleLinkedList{
    //   head: Node(123)
    //   tail: Node(123)
    //   length: 1 
    // }

    node = new Node(456);
    dll.tail.next = node;     // Node(123) next에 Node(456) 넣음
    node.prev = dll.tail;     // Node(456) prev에 Node(123) 넣음
    dll.tail = node;          // dll.tail 자리에 Node(456) 넣음
    dll.length++;
    console.log(dll);
    // DoubleLinkedList{
    //   head: Node{
    //          data : 123,
    //          next : Node(456),
    //          prev : null,
    //         }
    //   tail: Node{
    //          data : 456,
    //          next : null,
    //          prev : Node(123),
    //         }
    //   length: 1 
    // }
    ```

  - 기타 함수
    ```javascript
    // printNode() : 노드 정방향 출력
    DoubleLinkedList.prototype.printNode = function(){
      for (let Node = this.haed; node != null; node=node.next){
        console.log(node.data);
      }
      console.log('null');
    }

    // printNodeInverse() : 노드 역방향 출력
    DoubleLinkedList.prototype.printNodeInverse = function(){
      let temp = [];
      for (let Node = this.tail; node != null; node=node.prev){
        temp.push(node.data);
      }
      // 노드 데이터 저장 후 역방향 출력
      for (let i = temp.length-1; i >= 0; i--){
        console.log(temp[i]);
      }
      console.log('tail');
    }

    // append() : 마지막 노드 추가
    DoubleLinkedList.prototype.append = function (value){
      let node = new Node(value);

      if (this.head === null){
        this.head = node;
        this.tail = node;
      } else{
        this.tail.next = node;  // 객체 tail 다음에 node 연결
        node.prev = this.tail;  // 객체 tail을 node의 prev에 연결
        this.tail = node;       // 객체의 tail을 node로 변경
      }
      this.length++;
    }


    // insert() : position 위치에 노드 추가
    DoubleLinkedList.prototype.insert = function (value, position=0){
      if (position < 0 || position > this.length){
        return false;
      }

      let node = new Node(value),
        current = this.head,
        index = 0,
        prev;
      

      if (position === 0){        // 첫 자리에 추가
        if (this.head === null){    // 리스트에 데이터 없을 때
          this.head = node;
          this.tail = node;
        } else{                     // 리스트에 데이터 있을 때
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (position === this.length){ // 마지막 자리에 추가
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else{                       // 특정 index에 추가
        while(index++ < position){
          prev = current;           // 특정 index 이전 노드
          current = current.next;   // 현재 옮겨야할 노드
        }
        node.next = current;        // 추가할 node 의 다음은 옮길 노드
        prev.next = node;   // 이전 노드의 다음은 추가할 node

        current.prev = node;  // 옮길 노드의 이전은 추가할 node
        node.prev = prev;   // 추가할 node의 이전은 prev
      }
      this.length++;
      return true;
    }

    // remove() : value 데이터를 찾아 노드 삭제
    DoubleLinkedList.prototype.remove = function(value){
      let current = this.head,
        prev = current;
      
      while (current.data != value && current.next != null){
        prev = current;
        current = current.next;
      }

      // 끝까지 찾았는데 없으면 null
      if (current.data != value){
        return null
      }

      if (current === this.head){ // 첫 자리에 있으면
        this.head = current.next;   // 다음 노드를 head로 설정
        if(this.length === 1) this.tail=null; 
        else this.head.prev = null; 
      } else if (current === this.tail){  // 마지막 자리에 있으면
        this.tail = current.prev;
        this.tail.next = null;
      } else{
        prev.next = current.next;  // 이전 노드와 다음 노드를 연결
        current.next.prev = prev;  // 다음 노드의 이전을 이전 노드로 연결
      }

      this.length--;

      return current.data; // 현재 삭제될 데이터 리턴
    }

    // removeAt(): position 위치의 노드 삭제
    DoubleLinkedList.prototype.removeAt = function(position=0){
      if (position < 0 || position >= this.length){
        return null;
      }

      let current = this.haed,
        index = 0,
        prev;

      if (position === 0){  // 첫 자리 
        this.head = current.next;  
        if(this.length === 1) this.tail=null; 
        else this.head.prev = null; 
      } else if (position === this.length-1){  // 마지막 자리
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else{                     // 특정 index까지 이동
        while(index++ < position){  
          prev = current; 
          current = current.next;
        }
        prev.next = current.next; 
        current.next.prev = prev;   
      }
      this.length--;

      return current.data;
    }

    // indexOf(): value 값을 갖는 노드의 인덱스 반환
    DoubleLinkedList.prototype.indexOf = function(value){
      let current = this.head,
        index=0;
      
      while (current != null){
        if(current.data === value){
          return index;
        }
        index++;
        current = current.next;
      }
      return -1;
    };

    // remove2(): indexOf + removeAt = remove
    // indexOf()와 removeAt()이 구현되어있으면, remove()는 간단하게 구현 가능
    DoubleLinkedList.prototype.remove2 = function(value){
      let index = this.indexOf(value);
      return this.removeAt(index);
    }
    ```