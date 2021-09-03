
# 해쉬 테이블

<img src="https://user-images.githubusercontent.com/62092665/131308927-ff882793-4b27-402a-b860-6ce10b965a02.png" width="50%"/>

## 1. 해쉬 구조
  - 키(key)에 데이터(value)를 저장하는 데이터 구조
    - Key를 통해 바로 데이터를 받을 수 있으므로, 속도가 획기적으로 빨라짐
    - Python의 딕셔너리 타입이 해쉬 테이블이다.
    - 보통 배열로 hash table을 미리 원하는 크기만큼 생성한 후 사용(공간과 탐색 시간을 맞바꾸는 기법)

## 2. 해쉬 관련 용어
  - Hash : 임의 값을 고정 길이로 변환하는 것
  - Hash Table : 키 값의 연산에 의해 직접 접근이 가능한 데이터 구조
  - Hash function(해쉬 함수) : key에 대해 산술 연산을 이용해 데이터 위치를 찾을 수 있는 함수
  - Hash value or Hash address : 해쉬 테이블 내 특정 값 및 해당 데이터의 위치
  - 슬롯(slot): 한 개의 데이터를 저장할 수 있는 공간
  - 저장할 데이터에 대해 key를 추출할 수 있는 별도의 함수도 존재 가능

## 3. 해쉬 테이블
  - 장점
    - 데이터 저장/읽기 속도가 빠르다.
    - 해쉬는 키에 대한 데이터가 있는지 중복 확인이 쉬움

  - 단점
    - 저장 공간이 조금 더 많이 필요하다.
    - 여러 키에 해당하는 주소가 동일할 경우 충돌을 해결하기 위한 별도의 자료구조가 필요하다.
  - 주요 용도
    - 검색이 많이 필요한 경우
    - 저장, 삭제, 읽기가 빈번한 경우
    - 캐쉬 구현시 (중복 확인 쉽기 때문)

## 4. 충돌(Collision)
  - 해쉬 테이블 내 여러 데이터가 같은 인덱스를 배정 받을 경우, 충돌이라고 한다.
    ### 1) Chaining 기법
      - 개방 해싱 or Open Hashing 기법 중 하나
        - 해쉬 테이블 저장공간 외의 공간을 활용하는 기법
        - 링크드 리스트 자료구조를 사용해서, 링크드 리스트로 데이터를 추가로 뒤에 연결시켜서 저장하는 기법
      >해쉬 테이블 검색 예시. //hash table 내 링크드 리스트를 사용한다.
      >1) 찾고자하는 데이터의 indexKey = hash(key) 생성
      >// indexKey는 내부 연결 리스트 내에서 구체적으로 내가 원하는 데이터를 구분하기 위한 key 값이다.(충돌 해결용 key )
      >2) indexKey를 해시 함수로 변환 // hashAddress = hashFunction(indexKey)
      >3) hashTable 내 hashAddress를 키로 갖는 값이 존재한다면,
      >   ```python
      >    for (let index in hashTable[hashAddress]){
      >      if (hashTable[hashAddress][index][0] === indexKey){
      >        return hashTable[hashAddress][index][1]
      >      }
      >    }
      >    return null
      >   ```
      >4) 존재하지 않는다면, return null



    ### 2) Linear Probing 기법
      - 폐쇄 해싱 or Close Hashing 기법 중 하나
        - 해쉬 테이블 저장공간 안에서 충돌 문제 해결
        - 해당 hash address의 다음 address부터 맨 처음 나오는 빈공간에 저장하는 기법
      ```python
      <!-- python -->

      hash_table = list([0 for i in range(8)])

      def get_key(data):
          return hash(data)

      def hash_function(key):
          return key % 8

      def save_data(data, value):
          index_key = get_key(data)
          hash_address = hash_function(index_key)
          if hash_table[hash_address] != 0:
              <!-- hash table 내 address 이후부터 빈 공간을 찾아 넣는다. -->
              for index in range(hash_address, len(hash_table)):
                  if hash_table[index] == 0:
                      hash_table[index] = [index_key, value]
                      return
                  elif hash_table[index][0] == index_key:
                      hash_table[index][1] = value
                      return
          else:
              <!-- 해당 address에 데이터가 있으면, value로 update 시킨다. -->
              hash_table[hash_address] = [index_key, value]

      def read_data(data):
          index_key = get_key(data)
          hash_address = hash_function(index_key)
          
          if hash_table[hash_address] != 0:
              for index in range(hash_address, len(hash_table)):
                    <!-- 빈 공간이 먼저 나오면 데이터 없음 -->
                    if hash_table[index] == 0:
                        return None
                    elif hash_table[index][0] == index_key:
                        return hash_table[index][1]
            else:
                return None
      ```

    ### 3) 빈번한 충돌을 개선하는 기법
      - 해쉬 함수를 재정의 및 해쉬 테이블 저장공간을 확대
      - ex. hash_table의 슬롯을 6개 -> 16개로 확대


    ### 4) 시간 복잡도
      - 충돌(collision)이 없다면, O(1)
      - 최악의 경우(모두 충돌)라면, O(n)
        - 해쉬 테이블의 경우, 충돌이 없는 것을 기대하고 만들기 때문에, 시간 복잡도는 O(1)이라고 말할 수 있다.
  
    ### 5) 검색에서의 해쉬 테이블
      - 16개의 배열에 데이터를 저장하고, index를 돌며 검색할 때 O(n)
      - 16개의 데이터 저장공간을 가진 해쉬 테이블에 데이터를 저장하고, 검색할 때 O(1)
