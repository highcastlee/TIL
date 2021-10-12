
# 트라이(Trie)
  - 탐색 트리의 일종으로, 문자열이나 연관 배열을 저장하는데 사용되는 트리 자료구조
  - 문자열 검색에 특화된 자료구조
  - 시간복잡도 
    - 문자열 길이가 L일 경우 O(L)의 시간 복잡도로 검색 가능
    - 총 문자열 수가 M일 때, 전체 트라이 생성 시 시간복잡도는 O(M * L)
      - 하나 삽입할 때는 O(L)
    


### 트라이 구현

```javascript
function TireNode(){
  this.children = {};     // key: 문자, value : TrieNode (하위 트라이)
  this.endOfWord = false; // 해당 단어가 끝 단어인지 여부
}

function Trie(){
  this.root = new TrieNode();
}
```
- 문자열 추가
```javascript
Trie.prototype.insert = function(word){
  let current = this.root;
  for(let i=0; i<word.length; i++){
    let ch = word[i];
    let node = current.children[ch];
    // node가 처음 등장하는 값이라면,
    if(node === undefined){
      node = new TrieNode();
      current.children[ch] = node;
    }
    current = node;
  }
  current.endOfWord = true;
}
```
- 문자열 검색(Boolean)
```javascript
Trie.prototype.search = function(word){
  let current = this.root;

  for(let i=0; i< word.length;i++){
    let ch = word[i];
    let node = current.children[ch];
    if(node === undefined){
      return false;
    }
    current = node;
  }
  return current.endOfWord;
}

```
- 문자열 삭제
  1. 삭제하고자 하는 문자의 endOfWord가 true이어야 한다.
      - 하위 노드가 더 존재한다면, 해당 문자 삭제가 다른 문자에 영향을 끼치기 때문

  2. 하위 노드부터 삭제하며 올라갈 때, 중간 노드의 endOfWord는 false이어야 한다.
      - 중간 과정에서 endOfWord === true 라는 것은 다른 단어가 존재한다는 뜻이므로 삭제하면 안 된다.
  
  3. 현재 노드의 자식 노드가 없어야한다.
      - 하위에서 삭제하며 올라왔는데, 자식 노드가 있다는 것은 해당 문자를 사용하는 다른 단어가 있다는 뜻이므로 삭제하면 안 된다.
  
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fdy1Z8N%2FbtqYE8zxugn%2FwkYf4ptTrjoJLmy9istFVK%2Fimg.png" width="500px">

    - "beer"를 삭제하고자 할 때, 가장 하위의 "r"부터 삭제를 시작하며 그 다음 "e" 까지는 삭제 가능하지만, 상위 "e"는 다른 자식 노드를 가지고 있으므로 삭제 불가.




```javascript
Trie.prototype.delete = function(word, current=this.root, index=0){
  if(index === word.length){
    // current가 찾는 단어 길이의 마지막 노드일 때
    // 단어의 끝이 아니라면 삭제 실패
    if(!current.endOfWord) return false;
    // 단어의 끝일 때, 삭제하게 되므로 endOfWord = false로 변경
    current.endOfWord = false;

    // 삭제할 노드의 자식이 더 있으면 false, 없으면 true 반환
    return Object.keys(current.children).length === 0;
  }

  let ch = word[index];
  let node = current.children[ch];
  // word 끝에 도달하기 전인데, 자식 노드가 없으면 삭제 실패
  if(node === undefined) return false;

  // 하위 노드 삭제 여부 && 하위 노드가 다른 단어의 끝이 아닌지 여부
  let isDeleteNode = this.delete(word, node, index+1) && !node.endOfWord;

  if(isDeleteNode){
    // 해당 문자를 포함하는 '하위 노드' 삭제
    delete current.children[ch];
    // '현재 노드'의 자식이 또 따로 있으면 삭제 실패, 없으면 성공
    return Object.keys(current.children).length === 0;
  }
  // 하위 노드 삭제 실패 시, 단어 삭제 실패
  return false;
}
```



---

#### mention
  트라이 단어 삭제는 구현이 복잡해서 연습이 더 필요하다.

