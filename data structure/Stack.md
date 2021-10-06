
# 스택(Stack)
  - 나중에 넣은 데이터가 먼저 나오는 후입선출, LIFO(Last In First Out) 기반의 선형 자료 구조
  
  ```javascript
  function Stack(array){
    this.array = array ? array : [];
  }

  Stack.prototype.getBuffer = function () {
    return this.array.slice();
  }

  Stack.prototype.isEmpty = function(){
    return this.array.length == 0;
  }

  let stack = new Stack([1,2,3]);


  // push(): 끝에 데이터 추가
  Stack.prototype.push = function (element){
    return this.array.push(element);
  }

  // pop(): 끝 데이터 삭제
  Stack.prototype.pop = function(){
    return this.array.pop();
  }
  
  // peek() : 가장 끝 데이터 반환
  Stack.prototype.peek = function(){
    return this.array[this.array.length-1];
  }

  // size() : 스택 길이
  Stack.prototype.size = function(){
    return this.array.length;
  }

  // indexOf() : 데이터 위치 값 조회
  Stack.prototype.indexOf = function(element, position = 0){
    for(let i=position; i<element; i++){
      if (element == this.array[i]) return i;
    }
    return -1;
  }

  // includes() : 데이터 존재 확인
  Stack.prototype.includes = function(element, position=0){
    for(let i=position; i<element; i++){
      if (element == this.array[i]) return true;
    }
    return false;
  }
  ```