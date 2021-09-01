

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
  <!-- node에 prev가 추가된다. -->
  class Node {
    constructor(data, prev=null, next = null) {
      this.data = data;
      this.prev = prev;
      this.next = next;
    }
  }

  <!-- 각 작업에서 prev와 next를 모두 갱신한다. -->
  ```