# LRU Cache
 - [LRU Cache](https://leetcode.com/problems/lru-cache/)


### 풀이
  - Map을 활용한 LRU Cache 구현
  - Map을 이용하면 get, set으로 O(1)의 시간복잡도를 적용할 수 있다.
  - map.keys()는 iterator를 반환하고, next() 메서드로 set 순서대로 key를 하나씩 반환하기 때문에 일반적인 객체와 달리 순서를 확인할 수 있다.


  ```javascript
  /**
   * @param {number} capacity
   */

  var LRUCache = function(capacity) {
      this.capacity = capacity;
      this.map = new Map();
  };

  /** 
   * @param {number} key
   * @return {number}
   */
  LRUCache.prototype.get = function(key) {
      if(typeof this.map.get(key) === 'undefined') return -1
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return this.map.get(key);
  };

  /** 
   * @param {number} key 
   * @param {number} value
   * @return {void}
   */
  LRUCache.prototype.put = function(key, value) {
      this.map.delete(key);
      if(this.map.size >= this.capacity){
          this.map.delete(this.map.keys().next().value);
      }
      this.map.set(key,value);
  };

  /** 
   * Your LRUCache object will be instantiated and called as such:
   * var obj = new LRUCache(capacity)
   * var param_1 = obj.get(key)
   * obj.put(key,value)
   */
  ```