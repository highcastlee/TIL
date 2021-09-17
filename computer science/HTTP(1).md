
# 네트워크

## OSI 7계층 vs TCP/IP 4계층
  <img src="https://t1.daumcdn.net/cfile/tistory/999DED345B7A26DF05" width="70%">

  - TCP/IP는 OSI 7계층보다 먼저 나온 규격이다.
  >**OSI 7 Layer는 장비 개발과 통신 자체를 어떻게 표준으로 잡을지 사용되는 반면에 실질적인 통신 자체는 TCP/IP 프로토콜을 사용한다.**

  - **TCP/IP 4계층**
    - <b>4계층, 응용 계층(Application Layer)</b> 
      - 응용 프로그램들이 이용할 수 있는 인터페이스 제공
      - HTTP, FTP, Telnet 등의 프로토콜 존재
      - OSI 7계층에서 5,6,7계층 역할
    - <b>3계층, 전송 계층(Transport Layer)</b> 
      - 네트워크로 접속되어 있는 2대의 컴퓨터 사이의 데이터 흐름을 제공
      - 두 지점의 신뢰성 있는 데이터 전송
      - TCP(Transmission Control Protocol)와 UDP(User Data Protocol) 두 가지 프로토콜이 있다.
      - OSI 7계층에서 4계층 역할
    - <b>2계층, 인터넷 계층(Internet Layer)</b> 
      - IP 헤더를 붙여서 패킷을 만들어 전송하는 역할
      - 여러 가지 선택지 중에서 하나의 길을 결정하는 것이 네트워크 계층의 역할
      - OSI 7계층에서 3계층 역할
    - <b>1계층, 네트워크 엑세스 계층(Network Access Layer || Network Interface Layer)</b> 
      - 하드웨어적 전송 담당. MAC 주소를 이용해 신뢰성 있는 전송 보장.
      - OSI 7계층에서 1,2계층 역할

      <img src="https://media.vlpt.us/post-images/conatuseus/d6b2f390-d3c9-11e9-b578-e7ac71f50ec2/image.png" width="50%">



<hr/>

### IP(인터넷 프로토콜)
  - 인터넷에서의 주소를 의미한다.
  - "192.168.100.100"과 같은 형태의 IPv4(32bit)를 이용하며, 주소 공간 부족 문제로 인해 점차적으로 IPv4에서 IPv6(128bit) 프로토콜이 제안되고 있다.
  <div>
    <img src="https://t1.daumcdn.net/cfile/tistory/2270873B5715D31315" width="40%">
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHRSzS%2FbtqPRAr6xDG%2FCkp66BkXS06UnTV68zQ5xK%2Fimg.png" width="50%">
  </div>

  - source address : 출발지 IP
  - destination address : 도착지 IP
  - IP 프로토콜의 한계
    1. 비연결성
        - 패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷을 전송한다.
    2. 비신뢰성
        - 전송 중간에 패킷이 사라지거나 순서가 맞지 않는 등 신뢰할 수 없는 데이터가 전송될 수 있다.
    3. 프로그램 구분의 어려움
        - 같은 IP를 사용하는 서버에서 통신하는 애플리케이션이 둘 이상이면, 구분하기가 어렵다.

<br/>
<br/>



### TCP(Transmission Control Protocol)
  <div>
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBMWnc%2FbtqP6oQsrbw%2FtiKNn3hymKrr2UMBzUBxN0%2Fimg.png" width="50%">
    <img src="https://hongchangsub.com/content/images/2021/07/-----------2021-07-13-------11.40.23.png" width="40%">
  </div>

  - 전송 제어 프로토콜
  - 서버와 클라이언트 간에 데이터를 신뢰성 있게 전달하기 위한 프로토콜
  - 현재는 대부분 TCP를 사용한다.
  - IP의 단점들을 보완할 수 있는 특징들을 가진다.
    1. 연결 지향
        - TCP 3 way handshake(가상 연결)
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/handshake-1.png" width="50%">
        - A->B SYN 패킷 보낸 후, SYN/ACK 응답을 기다린다.
          - Client state: SYN_SENT
          - Server state : Wait Client
        - B->A SYN 요청 받고, SYN flag와 ACK를 보낸다.
          - Server state : SYN_RECEIVED
        - A->B SYN/ACK 받고, ACK를 보낸다.
          - Server state : ESTABLISHED
        - 따라서, 서로 연결되었음을 확인하고, 신뢰성을 확보한다.
        - 실제 물리적으로 연결된 것이 아닌, 논리적으로 서로의 연결을 확인했음을 의미한다.

    2. 데이터 전달 보증

    3. 순서 보장




## URI
```
URI는 Locator, or Name 또는 둘 다를 추가할 수 있다.
1. URL = URI + Locator 
  ex. foo://example.com:8042/over/there?name=ferret#nose
  (scheme)://(authority)    /(path)    ?(query)    # fragment

2. URN = URI + Name 
  ex. urn:example:animal:ferret:noes
    (scheme):(authority + path)
```
### URI(Uniform Resource Identifier)
  - Uniform : 리소스를 식별하는 통일된 방식
  - Resource : 자원, URI로 식별할 수 있는 모든 것(제한 없음)
  - Identifier : 다른 항목과 구분하는데 필요한 정보

  - URL : 리소스가 있는 위치 지정
  - URN : 리소스에 이름을 부여

### URL
  - 구조
    - scheme://[userinfo@]host[:post][/path][?query][#fragment]
    - ex. https://www.google.com:443/search?q=hello&hl=ko
    - 프로토콜(https)
    - 호스트명(www.google.com)
    - 포트 번호(443)
    - 패스(/search)
    - 쿼리 파라미터(q=hello&hl=ko)
  1. **scheme**
      - 주로 프로토콜을 사용
      - 프로토콜 : 어떤 방식으로 자원에 접근할 것인가 하는 약속 규칙
        - ex. http, https, ftp 등
      - http는 80포트, https는 443 포트를 주로 사용하며, 포트는 **생략이 가능**하다.
      - https는 http에 보안이 추가된 HTTP Secure
  2. **userinfo**
      -  사용자를 입력하는 곳이지만, 거의 사용하지 않는다.
  3. **host**
      - 호스트명
      - 도메인명이나 IP주소를 직접 사용 가능
  4. **port**
      - 접속 포트
      - 일반적으로 생략, 생략 시 http는 80, https는 443
  5. **path**
      - 리소스 경로, 계층적 구조
      - ex. /home/file1.jpg  (home 경로 내 file1.jpg 파일)
      - ex. /members/100     (members 경로 내 100)
  
  6. **query**
      - key=value 형태
      - ?로 시작, &로 추가 가능
        - ex. ?keyA=valueA&keyB=valueB
      - query parameter, query string으로 불림. (통신 과정에서 문자로 제공되기 때문)
  7. **fragment**
      - html 내부 북마크 등에 사용
      - 서버로 전송하는 정보 아님


<hr/>

### HTTP(HyperText Transfer Protocol)
  - 이전에는 텍스트 전송이 목적이었으나, 현재는 HTTP 메시지에 모든 것을 전송
  - HTML, 이미지, 음성, 영상, 파일, JSON, XML 등 모든 형태의 데이터 전송 가능
  - **HTTP/1.1**
    - 가장 많이 사용하며, 우리에게 가장 **중요**한 버전
    - RFC2068(1997) -> RFC2616(1999) -> RFC7230~7235(2014)
  - HTTP/2
    - 2015년 성능 개선
  - HTTP/3
    - 현재 진행 중. TCP 대신 UDP를 사용하여 성능 개선
  
### HTTP 특징
#### 1. 클라이언트 서버 구조
  - Request Response 구조
  - 클라이언트는 서버에 요청을 보내고, 응답을 대기
  - 서버가 요청에 대한 결과를 만들어서 응답

#### 2. 무상태 프로토콜(stateless)
  - Stateful
    - 서버가 클라이언트의 이전 상태를 보존
    - 항상 같은 서버가 유지되어야 한다.
    - 단점
      - 하나의 서버에 문제가 생기면, 다른 서버를 활용할 때 이전 상태를 잃는다.
  - Stateless
    - 서버가 클라이언트의 이전 상태를 보존하지 않음
    - 장점
      - 갑자기 클라이언트의 요청이 증가해도, **서버를 대거 투입할 수 있다.**
      - 무한한 서버 증설 가능
    - 한계
      - 무상태로 설계할 수 없는 경우도 있다.
        - 무상태 : 로그인이 필요 없는 서비스
        - 상태 유지 : 로그인
          - 브라우저 쿠키, 서버의 세션 등으로 로그인 상태 유지
      - 전송 데이터가 크다.
    
#### 3. 비연결성
  > 연결을 유지하는 모델은 서버의 자원이 지속적으로 소모된다.
  - 연결을 유지하지 않는 모델
    - 요청이 발생할 경우에만 연결 후, 연결 끊기
    - 최소한의 자원을 유지할 수 있다.
    - HTTP는 기본이 비연결 모델
    - 일반적으로 초 단위의 빠른 속도로 응답
    - 1시간 동안 수천명이 서비스를 사용해도 실제 서버의 동시 처리 요청은 수십개 이하(지속적으로 통신이 필요한 기능을 사용하지 않기 때문)
  - 한계
    - TCP/IP 연결을 새로 맺어야 한다. 3 way handshake 시간이 추가됨
    - 웹 브라우저 요청 시, HTML 뿐만 아니라, js,css, 이미지 등 많은 데이터가 요청된다.
  - 현재는 HTTP 지속 연결(Persistent Connections)로 문제 해결
  - HTTP/2, HTTP/3에서는 더 최적화 되었음


#### 4. HTTP 메시지
  - HTTP 요청 메시지
    <img src="https://media.vlpt.us/images/gparkkii/post/0a8a066b-b53b-4c86-a522-32e848c5f54f/HTTP_Request.png" width="50%"/>
    >// rfc7230 공식
    >GET/search?q=hello&hl=ko HTTP/1.1
    >Host:www.google.com
  
  - HTTP 응답 메시지
    <img src="https://media.vlpt.us/images/gparkkii/post/c5ee6879-e3af-49f9-a8d0-5922b49c53ce/HTTP_Response.png" width="50%">



  <img src="https://media.vlpt.us/images/sdc337dc/post/83c5250a-805e-4c2f-ac94-c221bb97ecba/image.png" width="80%">

  - **start-line**
    1. Request-line
        - **method** SP(공백) **request-target** SP **HTTP-version** CRLF(줄바꿈)
        - Method
          - GET, POST, PUT, DELETE ...
        - Request-target
          - absolute-path[?query] (절대경로[?쿼리])
          - 절대 경로 = '/'로 시작하는 경로
          - *, http://...?x=y 와 같이 다른 유형의 경로 표현도 있다.
        - HTTP-version
          - ex. HTTP/1.1
    2. status-line
        - **HTTP version** SP **status-code** SP **reason-pharse** CRLF
        
  - **HTTP Header**
    - HTTP 전송에 필요한 모든 부가정보
    - ex. 메시지 body 내용, 크기, 압축, 인증, 요청 클라이언트 정보, 서버 정보, 캐시 관리 정보 등
    - 표준 헤더가 너무 많음
    - 필요시 임의의 헤더 추가 가능
      - 약속된 클라이언트와 서버만 통신 가능
  
  - **HTTP 메시지 바디**
    - 실제 전송할 데이터
    - HTML 문서, 이미지, 영상, JSON 등 byte로 표현 가능한 모든 데이터


<br/>
<br/>
<br/>

#### 5. 단순함, 확장 가능
  - HTTP는 단순하다.
  >대부분의 성공하는 표준 기술은 단순하지만 확장 가능한 기술...




