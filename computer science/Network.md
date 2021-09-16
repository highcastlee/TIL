
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



<img src="https://media.vlpt.us/post-images/conatuseus/d6b2f390-d3c9-11e9-b578-e7ac71f50ec2/image.png" width="70%">



<hr/>

### IP(인터넷 프로토콜)
  - 인터넷에서의 주소를 의미한다.
  - "192.168.100.100"과 같은 형태의 IPv4(32bit)를 이용하며, 주소 공간 부족 문제로 인해 점차적으로 IPv4에서 IPv6(128bit) 프로토콜이 제안되고 있다.
    <img src="https://t1.daumcdn.net/cfile/tistory/2270873B5715D31315" width="40%">

  - source address : 출발지 IP
  - destination address : 도착지 IP
  - IP 프로토콜의 한계
    1. 비연결성
        - 패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷을 전송한다.
    2. 비신뢰성
        - 전송 중간에 패킷이 사라지거나 순서가 맞지 않는 등 신뢰할 수 없는 데이터가 전송될 수 있다.
    3. 프로그램 구분의 어려움
        - 같은 IP를 사용하는 서버에서 통신하는 애플리케이션이 둘 이상이면, 구분하기가 어렵다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHRSzS%2FbtqPRAr6xDG%2FCkp66BkXS06UnTV68zQ5xK%2Fimg.png">



### TCP(Transmission Control Protocol)
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBMWnc%2FbtqP6oQsrbw%2FtiKNn3hymKrr2UMBzUBxN0%2Fimg.png" width="70%">

  - 전송 제어 프로토콜
  - 서버와 클라이언트 간에 데이터를 신뢰성 있게 전달하기 위한 프로토콜
  - 현재는 대부분 TCP를 사용한다.
  - IP의 단점들을 보완할 수 있는 특징들을 가진다.
    1. 연결 지향
        - TCP 3 way handshake(가상 연결)
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/handshake-1.png" width="50%">
        - A->B SYN 패킷 보낸 후, SYN/ACK 응답을 기다린다.
        - B->A SYN 요청 받고, SYN flag와 ACK를 보낸다.
        - A->B SYN/ACK 받고, ACK를 보낸다.
        - 따라서, 서로 연결되었음을 확인하고, 신뢰성을 확보한다.

    2. 데이터 전달 보증

    3. 순서 보장

  <img src="https://hongchangsub.com/content/images/2021/07/-----------2021-07-13-------11.40.23.png" width="70%">


