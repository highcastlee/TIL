
# 트리 (Tree)
  - Node와 Branch를 이용해서, 사이클을 이루지 않도록 구성한 데이터 구조
  - 트리 중 이진 트리 (Binary Tree) 형태의 구조가 주로 사용되며, 탐색(검색) 알고리즘 구현을 위해 많이 사용됨

## 용어
  - Node: 트리에서 데이터를 저장하는 기본 요소 (데이터와 다른 연결된 노드에 대한 Branch 정보 포함)
  - Root Node: 트리 맨 위에 있는 노드
  - Level: 최상위 노드를 Level 0으로 하였을 때, 하위 Branch로 연결된 노드의 깊이를 나타냄
  - Parent Node: 어떤 노드의 다음 레벨에 연결된 노드
  - Child Node: 어떤 노드의 상위 레벨에 연결된 노드
  - Leaf Node (Terminal Node): Child Node가 하나도 없는 노드
  - Sibling (Brother Node): 동일한 Parent Node를 가진 노드
  - Depth: 트리에서 Node가 가질 수 있는 최대 Level 
<img src="http://www.fun-coding.org/00_Images/tree.png" width="70%">

### 3. 이진 트리와 이진 탐색 트리(BST)
  - 이진 트리
    - 노드의 최대 Branch가 2인 트리
  - 이진 탐색 트리(Binary Search Tree)
    - 왼쪽 자식 노드는 해당 부모 노드보다 작은 값, 오른쪽 자식 노드는 해당 부모 노드보다 큰 값을 가진 이진 트리

### 4. 자료구조 이진 탐색 트리의 장점과 용도
  - 용도 : 주로 데이터 검색에 활용
  - 장점 : 탐색 속도를 개선할 수 있음
    - **이진트리와 정렬된 배열간의 탐색 비교**
      - 정렬된 배열 : 처음부터 index 증가하며 탐색 O(n)
      - BST : 중간 값을 찾으며 빠르게 탐색 O(logn)

  - 단점 : 평균 시간 복잡도는 O(logn)이지만, 편향된 데이터에서는 O(n)을 가진다.

  - 편향 이진 탐색 트리를 문제를 해결하기 위해 자가 균형 이진 탐색 트리인 **Red-Black-tree** 가 있음

### Red-black-tree
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcitWfI%2FbtrptgRQlFi%2Fvd9FwY1WQKUpKDkjZWIGD1%2Fimg.png">

  - 자가 균형 이진 탐색 트리
  - 조건
    - 모든 노드는 Red 혹은 Black이다
    - 루트 노드는 Black이다
    - 모든 리프 노드(NIL)들은 검은색이다. (NIL : null leaf, 자료를 갖지 않고 트리의 끝을 나타내는 노드)
    - 빨간색 노드의 자식은 검은색이다. No Double Red(빨간색 노드가 연속으로 나올 수 없다)
    - 모든 리프 노드에서 Black Depth는 같다. 
      - 리프노드에서 루트 노드까지 가는 경로에서 만나는 검은색 노드의 개수가 같다.
  - Double Red 발생 시 처리 방법
    1. Restructuring
        - 조건 : double red 발생한 노드의 삼촌 노드(부모의 형제노드)가 black 일 때 
        - 수정 단계
          1. 조상, 부모, 현재 노드를 정렬하여 중간 값을 부모 노드로, 나머지를 자식 노드로 설정
          2. 부모 노드는 Black, 자식 노드는 Red로 설정
    2. Recoloring
        - 조건 : double red 발생한 노드의 삼촌 노드가 red 일 때
        - 수정 단계
          1. 부모와 삼촌 노드를 Black으로 바꾸고, 조상 노드를 Red로 바꾼다.
            (조상 노드가 root라면 black으로 바꾼다.)
          2. 다시 double red가 발생하면 계속 restructuring 또는 recoloring을 실행한다.

### javascript 로 구현하는 Tree

#### 1. class형 Tree
  ```javascript
  class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }

  class BST {
    constructor() {
      this.root = null;
    }

    add(data) {
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        const searchTree = function (node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              //left에 함수 있을 시 재귀 함수 적용
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }

    remove(data) {
      //제거할 data의 파라미터를 두번째에 놓았다.
      const removeNode = function (node, data) {
        if (node == null) {
          return null;
        }
        if (data == node.data) {
          // node has no children ~ 밑에 뿌리가 없는 노드
          if (node.left == null && node.right == null) {
            return null;
          }
          // node has no left child  ~ left는 없는 경우 node right가 해당 삭제 데이터에   들어간다.
          if (node.left == null) {
            return node.right;
          }
          // node has no right child 
          if (node.right == null) {
            return node.left;
          }
          // node has two children
          var tempNode = node.right;
          //tempNode는 삭제할 node의 right가 되고
          while (tempNode.left !== null) {
            tempNode = tempNode.left; //다시 node right의 left가 된다.
          }
          node.data = tempNode.data; //그리고 삭제 node에는 위의 tempnode가 들어가게된다.
          node.right = removeNode(node.right, tempNode.data);
          return node;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      }
      this.root = removeNode(this.root, data);
    }
  } 

  const bst = new BST();
  ```

#### 2. Function형 Tree
  // class형 참고하여 작성
  ```javascript
  function Node(data, left =null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }

  function BST{
    this.root = null;

    this.add = function(data){
      const node = this.root;
      // root가 null이면 첫 노드 추가이므로 root 설정만 실행
      if (node === null){
        this.root = new Node(data);
        return;
      }else {
        const searchTree = function(node){
          if(data < node.data){
            if (node.left === null){
              node.left = new Node(data);
              return;
              // 현재 노드의 left가 존재한다면, 해당 left 기준 다시 search 실행
            } else if (node.left !== null){
              return searchTree(node.left);
            }
          } else if (data > node.data){
            if(node.right  === null){
              node.right = new Node(data);
              return;
            } else if (node.right !== null){
              return searchTree(node.right)
            }
          // data와 같을 경우 아무 실행하지 않음
          }else {
            return null;
          }
        };
        return searchTree(node);
      }
    }

    this.remove = function(data){
      const removeNode = function(node, data){
        if(node === null){
          return null;
        }
        if (data === node.data){
          if (node.left === null && node.right === null){
            return null;
          }
          if (node.left === null){
            return node.right;
          }
          if (node.right === null){
            return node.left;
          }
          // 중요!
          // 삭제할 노드의 오른쪽 노드를 현재 노드로 변경. 기존 left를 현재로 설정할 right의 left로 변경한다.
          const tempNode = node.right;

          // 오른쪽에서 가장 작은 노드를 찾아 현재 right로 설정한다.
          while (tempNode.left !== null){
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        // 삭제 data가 현재 data보다 작은 경우, 삭제 data까지 이동 후 삭제 실행
        }else if (data < node.data){
          node.left = removeNode(node.left, data);
          return node;
        // 삭제 data가 현재 data보다 큰 경우, 삭제 data까지 이동 후 삭제 실행
        }else{
          node.right = removeNode(node.right, data);
          return node;
        }
      }
      this.root = removeNode(this.root, data);
    }
  }

  const bst = new BST();
  ```