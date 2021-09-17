
# HTTP 메서드

## HTTP API


### API URI 설계
  - URI 설계의 핵심은 리소스 식별이다.
  - 리소스의 의미
    - 회원가입에서 리소스는 [회원 등록], [회원 수정] 등이 아니라, 회원이라는 개념 자체가 리소스다.
    - 리소스와 행위를 분리
      - 리소스 : 회원
      - 행위 : 조회, 등록, 삭제, 변경
    - 리소스는 명사, 행위는 동사


  - GET : 리소스 조회
  - POST : 요청 데이터 처리, 주로 등록에 사용
  - PUT : 리소스를 대체, 해당 리소스 없으면 생성
  - PATCH : 리소스 부분 변경
  - DELETE : 리소스 삭제
  - 기타 메서드
    - HEAD: GET과 동일하지만, 메시지 부분을 제외하고 상태 줄과 헤더만 반환
    - OPTIONS: 대상 리소스에 대한 통신 가능 옵션(메서드)을 설명 / 주로 CORS에서 사용
    - CONNECT: 대상 자원으로 식별되는 서버에 대한 터널을 설정
    - TRACE: 대상 리소스에 대한 경로를 따라 메시지 루프백 테스트를 수행

#### GET
  - 리소스 조회
  - 서버에 전달하고 싶은 데이터는 query를 통해서 전달
  - 메시지 바디를 사용해서 데이터를 전달할 수 있지만, 지원하지 않는 곳이 많아서 데이터 전송으로 권장하지 않음

  <img src="https://t1.daumcdn.net/cfile/tistory/21282E3B554A0A1B2C" >


#### POST
  - 요청 데이터 처리
  - 메시지 body를 통해 서버로 요청 데이터 전달
  - 서버는 요청 데이터를 처리
    - 메시지 바디를 통해 들어온 데이터를 처리하는 모든 기능을 수행
  - 주로 전달된 데이터로 신규 리소스 등록, 프로세스 처리에 사용
  - 공식 스펙
    - <i>대상 리소스가 리소스의 고유한 의미 체계에 따라 요청에 포함된 표현을 처리하도록 요청</i>
    - example
      - HTML form에 입력한 정보 처리
      - 게시판 CRUD
      - 서버가 아직 식별하지 않은 새 리소스 생성
        - 신규 주문 생성, 신규 회원 생성
      - 기존 자원에 데이터 추가
        - 한 문서 끝에 내용 추가 등
  - POST 요청이 오면, 해당 데이터를 처리하는 방법은 리소스마다 따로 설정해야한다.
  - **POST는 단순 데이터 생성, 변경을 의미하지 않는다.**  
  - 다른 메서드로 처리하기 애매한 경우, 보통 POST를 사용한다.
    - ex. JSON으로 조회 데이터를 넘겨야할 때(= 쿼리로 불가능할 때), GET 사용이 어려운 경우. (GET 메서드의 body 데이터를 허용하지 않는 서버들이 있음)


#### PUT
  - 리소스를 대체
    - 있으면 대체, 없으면 생성
    - 덮어쓰기
  - **클라이언트가 리소스를 식별**
    - 클라이언트가 리소스 위치를 알고 URI 지정
    - POST와 차이점 (PUT은 구체적인 리소스 위치를 알고 지정한다.)
  ```
  기존 리소스 = {"age":50,"name":"kim"}
  PUT 요청 리소스 = {"age":70} 일 때,
  PUT 이후 리소스는 전체 덮어쓰기가 되어 {"age":70} 으로 변경된다.
  -> name은 삭제됨
  ```

#### PATCH
  - 리소스 부분 변경
  - PUT은 전체 덮어쓰기라면, PATCH는 부분적으로 업데이트한다.
  - PATCH 지원이 안 되는 경우, POST 사용
  ```
  기존 리소스 = {"age":50,"name":"kim"}
  PATCH 요청 리소스 = {"age":70} 일 때,
  PATCH 이후 리소스는 부분 변경되어 {"age":70, "name":"kim"} 으로 변경된다.
  ```

#### DELETE
  - 리소스 삭제

<br/>
<br/>
<hr/>
<br/>

### HTTP 메서드의 속성
  ![image](https://user-images.githubusercontent.com/62092665/133766583-76f05754-7da3-4427-be26-afef422127e0.png)



#### 1. 안전
  - 호출해도 리소스를 변경하지 않는다.
  - 여기서 안전의 의미는 해당 리소스만 고려한다.
    - ex. 지속적 호출로 로그가 쌓여 장애가 발생하는 등의 문제는 포함하지 않은 개념


#### 2. 멱등
  - 한 번 호출하든 두 번 호출하든 결과가 똑같다.
  - 메소드별 멱등 
    - GET : 멱등O
    - PUT : 결과를 대체한다. 멱등O
    - DELETE : 결과를 삭제. 멱등O
    - POST : 멱등 X
  - 활용
    - 멱등한 요청은 두 번해도 괜찮기 때문에 자동 복구 매커니즘에 사용 가능하다.
  - 멱등은 외부 요인으로 중간에 리소스가 변경되는 것까지 고려하지는 않는다.

#### 3. 캐시 가능
  - GET, HEAD, POST, PATCH 캐시 가능
  - 실제로는 GET, HEAD 정도만 주로 캐시 활용


<hr/>

## HTTP 메서드 활용

### Client -> Server 데이터 전송

#### 1. query parameter를 통한 데이터 전송
  - GET
  - 주로 정렬, 필터(검색어)에 사용


#### 2. message body를 통한 데이터 전송
  - POST, PUT, PATCH
  - 회원가입, 상품 주문, 리소스 CRUD 등


#### case 1 : 정적 데이터 조회
  - GET을 사용하여 이미지, 정적 텍스트 문서
  - 일반적으로 쿼리 파라미터 없이 리소스 경로만으로 조회 가능

#### case 2: 동적 데이터 조회
  - 쿼리 파라미터 사용하여 리소스 GET 조회
  >GET/search?q=hello&hl=ko HTTP/1.1
  >Host:www.google.com
  - 주로 검색, 게시판 목록에서 정렬 필터(검색어)
  - 조회 조건을 줄여주는 필터, 조회 결과를 정렬하는 정렬 조건에 주로 사용

#### case 3-1: HTML Form 데이터 전송 (application/x-www-form-urlencoded)
  ```html
  <form action="/save" method="POST">
    <input type="text" name="username" />
    <input type="text" name="age" />
    <button type="submit">전송</button>
  </form>
  ```

  - POST 전송 - 저장
  >POST /save HTTP/1.1
  >Host:localhost:8080
  >Content-type: application/x-www-form-urlencoded
  >
  >username=kim&age=20

  - GET 전송 - 저장
    - Form 전송 시, GET 메소드일 경우, URL 경로에 쿼리로 데이터 넣음
    - **하지만, GET은 조회 메소드이므로 form 전송에 적절하지 않다.**
  > GET /save?username=kim&age=20 HTTP/1.1
  >Host:localhost:8080

  - application/x-www-form-urlencoded는 전송 데이터를 url encoding 처리
    - 한글을 %EA%B9 등으로 변환


#### case 3-2: HTML Form 데이터 전송 (multipart/form-data)
  ```html
  <form action="/save" method="POST" enctype="multipart/form-data">
    <input type="text" name="username" />
    <input type="text" name="age" />
    <button type="submit">전송</button>
  </form>
  ``` 
  >POST /save HTTP/1.1
  >Host:localhost:8080
  >Content-type: multipart/form-data; boundary=----XXX
  >Content-Length:10457
  >
  >----XXX
  >Content-Disposition:form-data; name="username"
  >
  >kim
  >----XXX
  >Content-Disposition:form-data; name="age"
  >
  >50
  >----XXX

  - form 데이터를 multipart로 나누어 name과 값을 나누어 전송한다.
  

#### case 4: HTTP API 데이터 전송
  - 서버 to 서버. 백엔드 시스템 통신
  - 앱 클라이언트
    - IOS, Android
  - 웹 클라이언트
    - AJAX
  - POST, PUT, PATCH : 메시지 바디를 통해 데이터 전송
  - GET: 조회, 쿼리 파라미터로 데이터 전달
  - Content-Type: application/json을 주로 사용 (사실상 표준)
    - TEXT/XML,JSON 등
