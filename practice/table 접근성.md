
# 데이터 테이블 실습

## 1. 접근성이 좋지 않은 테이블 선정
  - [FC SEOUL 티켓 요금표](https://www.fcseoul.com/tickets/reserveSingleTicket)
  
    <img src="https://user-images.githubusercontent.com/62092665/135714445-6c10c7bf-2e83-45db-b5da-ded91fe089d2.png" width="100%">

  - 현재 html 코드 예시
    ```html
    <table class="seatTable">
      <thead>
        <tr>
          <th>구역</th>
          <th>권종</th>
          <th class="price">예매 가격</th>
          <th class="discount">멤버십 할인</th>
          <th class="onsite">현장 가격</th>
          <th>제공사항</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="first">
            <strong>VIP 테이블석</strong>
            <p><button data-seat="seat18">경기장 View</button></p>
          </td>
          <td>일반</td>
          <td class="price">35,000원</td>
          <td class="discount">33,000원</td>
          <td class="onsite">37,000원</td>
          <td class="last">- 테이블석(1인/2인)</td>
        </tr>
        <tr>
          <td class="first">                    	
            <strong>프리미엄<br>서측 지정석</strong>
            <p><button data-seat="seat11">경기장 View</button></p>
          </td>
          <td>일반</td>
          <td class="price">25,000원</td>
          <td class="discount">23,000원</td>
          <td class="onsite">27,000원</td>
          <td class="last" rowspan="5">- 지정석으로 운영</td>
        </tr>
        <tr>
          <td class="first">
            <strong>서측 지정석</strong>
            <p><button data-seat="seat10">경기장 View</button></p>
          </td>
          <td>일반</td>
          <td class="price">20,000원</td>
          <td class="discount">18,000원</td>
          <td class="onsite">22,000원</td>
        </tr>
        <tr>
          <td class="first" rowspan="3">
            <strong>
              <div><img src="/resources/front/images/sub/tickets/ shinhan.png" alt="신한카드"></div>
              신한카드 지정석
            </strong>
            <p><button data-seat="seat7">경기장 View</button></p>
          </td>
          <td>성인</td>
          <td class="price">16,000원</td>
          <td class="discount">14,000원</td>
          <td class="onsite">18,000원</td>
        </tr>
        <tr>
          <td>청소년</td>
          <td class="price">13,000원</td>
          <td class="discount">11,000원</td>    
          <td class="onsite">15,000원</td>                
        </tr>
        <tr>
          <td>어린이</td>
          <td class="price">7,000원</td>
          <td class="discount">5,000원</td>    
          <td class="onsite">9,000원</td>                
        </tr>
        </tbody>
    </table>
    ```

---

## 2. 해당 기존 서비스의 접근성 문제
  1. 테이블 요약 정보 미제공
  2. scope, id, headers 미적용

---
##  3. WCAG 가이드라인에 따른 수정 계획
  -  [WCAG Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/)
  1. #### 테이블 요약 정보 제공 후 숨기기
      - 방법 1) summary 속성 내 요약 정보 (HTML5 규격 제외됨)
      - 방법 2) figure, figcaption 사용
      - 방법 3) table 내 caption 요소에 포함하여 제공
      - 방법 4) aria-describedby로 외부의 요약 정보 단락을 연결
      ```html
      <!-- 방법 3번 -->
      <style>
        .a11y-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
          clip-path: polygon(0 0, 0 0, 0 0);
        }
      </style>
      <table class="seatTable">
        <caption class="a11y-hidden">
          단일 경기 티켓 예매 요금표<br/>
          경기장 구역, 권종, 예매 가격, 멤버십 할인된 가격, 제공사항 안내
        </caption>
        <thead>...</thead>
        <tbody>...</tbody>
      </table>
      ```

  2. #### `티켓`이라는 상위 column 추가하여 `구역`, `권종`을 colgroup으로 묶기
      ```html
      <caption class="a11y-hidden">...</caption>
      <colgroup span="2" class="ticket" ></colgroup>
      <colgroup class="price" ></colgroup>
      <colgroup class="discount" ></colgroup>
      <colgroup class="onsite" ></colgroup>
      <colgroup class="offer" ></colgroup>
      <thead>
        <tr>
          <th id="ticket" colspan="2" class="ticket">티켓</th>
          <th id="price" rowspan="2" class="price">예매 가격</th>
          <th id="discountPrice" rowspan="2" class="discount">멤버십 할인</th>
          <th id="onsitePrice" rowspan="2"  class="onsite">현장 가격</th>
          <th id="offer" rowspan="2" class="offer">제공사항</th>
        </tr>
        <tr>
          <th id="section" >구역</th>
          <th id="type">권종</th>
        </tr>
      </thead>
      ```

  3. #### th와 td의 구분
      - 전체 td로 구성되어 있던 것을 데이터 특성에 맞게 th로 수정
      ```html
      <tr>
        <th id="sinhan" headers="section" class="first" rowspan="3">
          <div><img src="https://www.fcseoul.com/resources/front/images/sub/tickets/shinhan.png" alt="신한카드"></div>
          <strong>
            신한카드 지정석
          </strong>
          <p><button data-seat="seat7">경기장 View</button></p>
        </th>
        <th id="sinhanAdult" headers="ticket type sinhan" >성인</th>
        <td headers="price sinhanAdult sinhan" class="price">16,000원</td>
        <td headers="discountPrice sinhanAdult sinhan" class="discount">14,000원</td>
        <td headers="onsitePrice sinhanAdult sinhan" class="onsite">18,000원</td>
      </tr>
      <tr>
        <th id="sinhanYouth" headers="ticket type sinhan" >청소년</th>
        <td headers="price sinhanYouth sinhan" class="price">13,000원</td>
        <td headers="discountPrice sinhanYouth sinhan" class="discount">11,000원</td>    
        <td headers="onsitePrice sinhanYouth sinhan" class="onsite">15,000원</td>                
      </tr>
      <tr>
        <th id="sinhanKid" headers="ticket type sinhan" >어린이</th>
        <td headers="price sinhanKid sinhan" class="price">7,000원</td>
        <td headers="discountPrice sinhanKid sinhan" class="discount">5,000원</td>
        <td headers="onsitePrice sinhanKid sinhan" class="onsite">9,000원</td>                
      </tr>
      ```

  4. #### id, headers 적용
      - 병합된 셀이 있기 때문에 scope보다 id, headers가 더 정확하다고 판단
      ```html
      <thead>
        <tr>
          <th id="ticketSection">구역</th>
          <th id="ticketType">권종</th>
          <th id="price" class="price">예매 가격</th>
          <th id="discountPrice" class="discount">멤버십 할인</th>
          <th id="onsitePrice" class="onsite">현장 가격</th>
          <th id="offer">제공사항</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <th id="vip" headers="ticketSection" class="first">
              <strong>VIP 테이블석</strong>
              <p><button data-seat="seat18">경기장 View</button></p>
            </th>
            <th id="normal" headers="ticketType">일반</th>
            <td headers="price" class="price">35,000원</td>
            <td headers="discountPrice" class="discount">33,000원</td>
            <td headers="onsitePrice" class="onsite">37,000원</td>
            <td headers="offer" class="last">- 테이블석(1인/2인)</td>
          </tr>
          ...
      </tbody>
      ```
  - #### 수정된 table 작성 코드 예시
  ```html
  <table class="seatTable">
    <caption class="a11y-hidden">
      단일 경기 티켓 예매 요금표<br/>
      경기장 구역, 권종, 예매 가격, 멤버십 할인된 가격, 제공사항 안내
    </caption>
    <colgroup span="2" class="ticket" ></colgroup>
    <colgroup class="price" ></colgroup>
    <colgroup class="discount" ></colgroup>
    <colgroup class="onsite" ></colgroup>
    <colgroup class="offer" ></colgroup>
    <thead>
      <tr>
        <th id="ticket" colspan="2" class="ticket">티켓</th>
        <th id="price" rowspan="2" class="price">예매 가격</th>
        <th id="discountPrice" rowspan="2" class="discount">멤버십 할인</th>
        <th id="onsitePrice" rowspan="2"  class="onsite">현장 가격</th>
        <th id="offer" rowspan="2" class="offer">제공사항</th>
      </tr>
      <tr>
        <th id="section" >구역</th>
        <th id="type">권종</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th id="vip" headers="section" class="first">
          <strong>VIP 테이블석</strong>
          <p><button data-seat="seat18">경기장 View</button></p>
        </th>
        <th id="vipNormal" headers="ticket type vip">일반</th>
        <td headers="price vipNormal vip" class="price">35,000원</td>
        <td headers="discountPrice vipNormal vip" class="discount">33,000원</td>
        <td headers="onsitePrice vipNormal vip" class="onsite">37,000원</td>
        <td headers="offer vip" class="last">- 테이블석(1인/2인)</td>
      </tr>
      <tr>
        <th id="premium" headers="section" class="first">                    	
          <strong>프리미엄<br/>서측 지정석</strong>
          <p><button data-seat="seat11">경기장 View</button></p>
        </th>
        <th id="premiumNormal" headers="ticket type premium">일반</th>
        <td headers="price premiumNormal premium" class="price">25,000원</td>
        <td headers="discountPrice premiumNormal premium" class="discount">23,000원</td>
        <td headers="onsitePrice premiumNormal premium" class="onsite">27,000원</td>
        <td headers="offer premium" class="last" rowspan="5">- 지정석으로 운영</td>
      </tr>
      <tr>
        <th id="west" headers="section" class="first">
          <strong>서측 지정석</strong>
          <p><button data-seat="seat10">경기장 View</button></p>
        </th>
        <th id="westNormal" headers="ticket type west" >일반</th>
        <td headers="price westNormal west" class="price">20,000원</td>
        <td headers="discountPrice westNormal west" class="discount">18,000원</td>
        <td headers="onsitePrice westNormal west" class="onsite">22,000원</td>
      </tr>
      <tr>
        <th id="sinhan" headers="section" class="first" rowspan="3">
          <div><img src="https://www.fcseoul.com/resources/front/images/sub/tickets/shinhan.png" alt="신한카드"></div>
          <strong>
            신한카드 지정석
          </strong>
          <p><button data-seat="seat7">경기장 View</button></p>
        </th>
        <th id="sinhanAdult" headers="ticket type sinhan" >성인</th>
        <td headers="price sinhanAdult sinhan" class="price">16,000원</td>
        <td headers="discountPrice sinhanAdult sinhan" class="discount">14,000원</td>
        <td headers="onsitePrice sinhanAdult sinhan" class="onsite">18,000원</td>
      </tr>
      <tr>
        <th id="sinhanYouth" headers="ticket type sinhan" >청소년</th>
        <td headers="price sinhanYouth sinhan" class="price">13,000원</td>
        <td headers="discountPrice sinhanYouth sinhan" class="discount">11,000원</td>    
        <td headers="onsitePrice sinhanYouth sinhan" class="onsite">15,000원</td>                
      </tr>
      <tr>
        <th id="sinhanKid" headers="ticket type sinhan" >어린이</th>
        <td headers="price sinhanKid sinhan" class="price">7,000원</td>
        <td headers="discountPrice sinhanKid sinhan" class="discount">5,000원</td>
        <td headers="onsitePrice sinhanKid sinhan" class="onsite">9,000원</td>                
      </tr>
      <tr>
        <th id="fifa" headers="section" class="first" rowspan="2">
          <div>
            <img src="https://www.fcseoul.com/resources/front/images/sub/tickets/fifa4.png?210304" alt="피파온라인">
          </div>
          <strong>피파온라인4<br/>ZONE</strong>
          <p><button data-seat="seat8">경기장 View</button></p>
        </th>
        <th id="fifaAdult" headers="ticket type fifa" >성인</th>
        <td headers="price fifaAdult fifa" class="price">20,000원</td>
        <td headers="discountPrice fifaAdult fifa" class="discount">-</td>
        <td headers="onsitePrice fifaAdult fifa" class="onsite">22,000원</td>
        <td headers="offer fifa" class="last" rowspan="2">
          <p>- 넥슨 캐시 10,000원 쿠폰 증정</p>
          <p class="ls">- 경기 종료 후 3일 이내 예매자 휴대폰 번호로 문자발송 예정</p>
          <p>* 넥슨 계정 1개당 1회만 사용 가능합니다.</p> 
          <p class="line">- FA컵 경기에는 미운영 예정</p>
        </td>
      </tr>
      <tr>
        <th id="fifaYouth" headers="ticket type fifa" >청소년/어린이</th>
        <td headers="price fifaYouth fifa" class="price">17,000원</td>
        <td headers="discountPrice fifaYouth fifa" class="discount">-</td>  
        <td headers="onsitePrice fifaYouth fifa" class="onsite">19,000원</td>                  
      </tr>
      <tr>
        <th id="normal" headers="section" class="first" rowspan="3">
          <strong>일반 지정석</strong>
          <p><button data-seat="seat1">경기장 View</button></p>
        </th>
        <th id="normalAdult" headers="ticket type normal" >성인</th>
        <td headers="price normalAdult normal" class="price">14,000원</td>
        <td headers="discountPrice normalAdult normal" class="discount">12,000원</td>
        <td headers="onsitePrice normalAdult normal" class="onsite">16,000원</td>
        <td headers="offer normal" class="last" rowspan="3"><p>- 지정석으로 운영</p></td>
      </tr>
      <tr>
        <th id="normalYouth" headers="ticket type normal" >청소년</th>
        <td headers="price normalYouth normal" class="price">11,000원</td>
        <td headers="discountPrice normalYouth normal" class="discount">9,000원</td>
        <td headers="onsitePrice normalYouth normal" class="onsite">13,000원</td>
      </tr>
      <tr>
        <th id="normalKid" headers="ticket type normal" >어린이</th>
        <td headers="price normalKid normal" class="price">5,000원</td>
        <td headers="discountPrice normalKid normal" class="discount">3,000원</td>
        <td headers="onsitePrice normalKid normal" class="onsite">7,000원</td>
      </tr>
      <tr>
        <th id="away" class="first" rowspan="2">
          <strong>원정석</strong>
          <p><button data-seat="seat4">경기장 View</button></p>
        </th>
        <th id="awayAdult" headers="ticket type away" >성인/청소년</th>
        <td headers="price awayAdult away" class="price">14,000원</td>
        <td headers="discountPrice awayAdult away" class="discount">-</td>
        <td headers="onsitePrice awayAdult away" class="onsite">16,000원</td>
        <td headers="offer away" class="last" rowspan="2"><p>- 지정석으로 운영</p></td>
      </tr>
      <tr>
        <th id="awayKid" headers="ticket type away" >어린이</th>
        <td headers="price awayKid away" class="price">5,000원</td>
        <td headers="discountPrice awayKid away" class="discount">-</td>
        <td headers="onsitePrice awayKid away" class="onsite">7,000원</td>
      </tr>
    </tbody>
  </table>
  ```

---
## 4. 웹 접근성 관련 체크리스트
  1. #### table이 레이아웃을 위해 사용되지 않았는지
      - table은 2차원 형태의 데이터 테이블을 마크업할 때 사용하므로, 레이아웃을 위한 table 요소 사용은 **구조적 마크업(semantic markup)** 을 해치며 이는 접근성 측면에서도 좋지 않다.
  
  2. #### 데이터 표에 적절한 제목과 요약 정보를 제공
      - 방법 1) summary 속성 내 요약 정보 (HTML5 규격 제외됨)
      - 방법 2) figure, figcaption 사용
      - 방법 3) table 내 caption 요소에 포함하여 제공
      - 방법 4) aria-describedby로 외부의 요약 정보 단락을 연결
  
  3. #### tr, th, td 요소의 적절한 사용
      - tr : table의 행
        - table은 tr을 자식 요소로 포함하고, tr 요소 내에서 th와 td를 사용하여 마크업한다.
      - th : table의 제목 셀
        - 데이터 테이블의 필드에 해당한다.
        - scope 속성으로 해당 셀이 영향을 주는 내용 셀의 범위를 지정할 수 있다.
      - td : table의 내용 셀
        - td 요소 안에 제목을 사용하여도 HTML5는 독립된 콘텐츠로 인식하여 아웃라인에 영향 주지 않음
        - 특정 셀과 병합하고자 할 때, colspan, rowspan 등으로 병합 가능하다.

  4. #### 테이블 열 그룹화
      - `<colgroup></colgroup>` : 열 그룹화
      - `<col />` : colgroup으로 그룹화된 열의 의미 부여를 위한 요소
        ```html
        <table>
          <caption>...</caption>
          <colgroup class="ranking"></colgroup>
          <colgroup class="team"></colgroup>
          <colgroup span="2" class="game">
           <col class="victory">
           <col class="defeat">
          </colgroup>
        </table>
        ```
  5. #### 테이블 행 그룹화
      - `<thead></thead>` : 테이블의 제목 셀 그룹
      - `<tbody></tbody>` : 테이블의 본문 행
      - `<tfoot></tfoot>` : 테이블의 푸터 행
        - table 요소 내에서 한 번만 사용할 수 있다.
      - 행 그룹화 요소의 작성 순서와 상관없이 tfoot 요소는 테이블의 가장 마지막에 렌더링 된다.
      >thead, tfoot의 장점
      > - 테이블의 데이터가 많아 인쇄 시, 여러 장에 걸치게 될 경우 페이지마다 thead와 tfoot 정보를 인쇄할 수 있다. 페이지마다 종합 정보를 미리 알 수 있다.

  6. #### scope, id, headers 속성
      - scope는 th 요소의 속성으로, 단순한 테이블에서 해당 셀이 열의 제목인지 행의 제목인지 판단할 수 있게 한다.
      - id, headers는 행과 열이 병합된 복잡한 테이블에서 제목 셀과 내용 셀의 관계를 지정한다.
      - `scope`와 `id & headers`를 동시에 사용하는 것은 중복 작업이므로, 데이터 테이블의 형태에 따라 판단하여 둘 중 하나를 사용하도록 한다.


>**KWCAG 7.3.2.(표의 구성)**
>
>- 표는 이해하기 쉽게 구성해야 한다. 표를 제공할 경우, 표의 이해를 돕기 위한 내용 및 구조에 대한 정보를 제공해야 한다.
>    - (1) 표 정보 제공 : 데이터를 표로 구성할 경우, 표의 내용, 구조 등을 이해할 수 있도
록 정보를 제공하여 표의 이용 방법을 예측할 수 있도록 한다.
>    - (2) 표의 구성 : 표의 내비게이션을 위하여 표의 셀은 제목 셀과 데이터 셀이 구분되도
록 구성해야 한다.
>
>- 검사 항목 7.3.2 절을 준수함으로써 얻을 수 있는 기대 효과는 다음과 같다.
>    - (1) 제목 셀과 데이터 셀이 구분되도록 구현한 데이터 테이블은 시각 장애인에게 데이터
셀에 대한 제목 셀의 내용 또는 제목 셀과의 관계를 알려주므로 내용 파악이 쉽다.


---
## 5. HTML/CSS를 활용하여 구현
  <img src="https://user-images.githubusercontent.com/62092665/135730304-09fe19f0-a2f2-417e-a3d6-9f9e0ae9555b.png" width="100%" alt="수정된 데이터 테이블 예제"/>

  - [FC SEOUL table 실습 html 코드 바로가기](https://github.com/highcastlee/TIL/blob/main/practice/table_practice.html)

---

## 6. 문법 검사 결과 제출
  1. #### 첫 번째 제출 결과
      <img src="https://user-images.githubusercontent.com/62092665/135725890-30f91ee0-816c-49fd-9297-672908f5cdff.png" width="100%" />
      
      - `Error: Element div not allowed as child of element strong in this context.`
      
        - 문제 : strong 요소 내 div 요소 사용 불가
          - FC SEOUL 사이트에서도 strong 내 div가 포함되어 있음
          - 다른 행에서는 div 이후 strong으로 되어있는 것으로 보아 오타 실수로 추정됨
        - 해결 : div 이후 strong 요소 사용으로 수정
  
  2. #### 두 번째 제출 결과
      <img src="https://user-images.githubusercontent.com/62092665/135726067-985b6609-0c2d-47f4-95c1-65ece70801ce.png" width="100%" />
      - No errors or warnings

---

## 7. FC SEOUL 페이지 LightHouse 분석 보고서
  - [FC SEOUL 단일 경기 티켓 예매 페이지](https://www.fcseoul.com/tickets/reserveSingleTicket)

### 7-1. 접근성 보고서
  <img src="https://user-images.githubusercontent.com/62092665/135726356-db7463eb-4b76-4d7b-bfea-5568f6a4156d.png" width="100%" alt="lighthouse accessibility report"/>
  
  1. #### 콘텐츠의 가독성을 향상시켜라
      - Message : **`Background and foreground colors do not have a sufficient contrast ratio`**
        - <img src="https://user-images.githubusercontent.com/62092665/135726554-b411a4fe-f315-41b7-a484-dd40a6883545.png" width="200px"/>
        - 문제 : 명도 대비 문제로, footer의 특정 글자의 명도 대비가 낮아서 발생
          - 1.3.3 (텍스트 콘텐츠의 명도 대비) 텍스트 콘텐츠와 배경 간의 명도 대비는 4.5대 1 이상이어야 한다.
        - 해결 : 해당 텍스트의 명도 수정

  2. #### Names and labels. 보조 기술 사용자들을 위해 명칭과 레이블을 제공하라
      - Message : **`<frame> or <iframe> elements do not have a title`**
        - <img src="https://user-images.githubusercontent.com/62092665/135726644-6160bc30-4d45-409a-9bfc-b9696403fef5.png" width="100%"/>
        - 문제 : iframe을 사용할 때, title 속성 등 적절한 제목을 제공하지 않음
          - 2.4.2 (제목 제공) 페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 한다.
        - 해결 : title 속성으로 제목 제공
          - `<iframe title="장애인 전용 게이트 구역별 입장 동선 안내"> ... </iframe>`

      - Message : **`Image elements do not have [alt] attributes`**
        - <img src="https://user-images.githubusercontent.com/62092665/135726685-cca626c5-b8d4-41e2-9842-1dce675fefaa.png" width="200px"/>
        - 문제 : image에 alt 속성을 사용하지 않음
          - 1.1.1 (적절한 대체 텍스트 제공) 텍스트 아닌 콘텐츠는 그 의미나 용도를 이해할 수 있도록 대체 텍스트를 제공해야 한다.
        - 해결 alt 속성으로 이미지 설명 추가


### 7-2. SEO 보고서
  <img src="https://user-images.githubusercontent.com/62092665/135726303-b1ddc796-1260-41f0-b35f-ce5099cb7966.png" width="100%" alt="lighthouse SEO report"/>

  1. #### 모바일 친화적인 페이지를 제공하라.
      - Message : **`Does not have a <meta name="viewport"> tag with width or initial-scale`**
        - 문제 : 브라우저에 뷰포트 정보를 제공하지 않음
        - 해결
          - html head 내 `<meta name="viewport" content="width=device-width, initial-scale=1">` 사용
          >(개인적 생각) IE10에서 사용하는 css 내 `@viewport {width: device-width;}`를 통한 viewport 설정법도 있지만, SEO 보고서가 meta 태그를 기준으로 체크하는 것으로 유추된다.
  2. #### 콘텐츠의 이해를 돕기 위한 크롤링이 가능하게 HTML을 구성하라.
      - Message : **`Image elements do not have [alt] attributes`**
        - 문제 : image에 alt 속성을 사용하지 않음
          - 1.1.1 (적절한 대체 텍스트 제공) 텍스트 아닌 콘텐츠는 그 의미나 용도를 이해할 수 있도록 대체 텍스트를 제공해야 한다.
        - 해결 alt 속성으로 이미지 설명 추가


--- 

## 접근성 개선 후기
  - 개선 전
    <img src="https://user-images.githubusercontent.com/62092665/135714445-6c10c7bf-2e83-45db-b5da-ded91fe089d2.png" width="100%">

  - 개선 후
    <img src="https://user-images.githubusercontent.com/62092665/135730304-09fe19f0-a2f2-417e-a3d6-9f9e0ae9555b.png" width="100%">

  1. **무엇이 th이고, 무엇인 td인가**
      - 작업할 데이터 테이블을 예상하며 데이터의 형태에 따라 th와 td를 구분해야하는데, th의 기준을 잡는 것이 애매하다고 느껴질 때가 있다. 내가 작업한 FC SEOUL 티켓 요금표 테이블에서도 '구역' column의 데이터는 th로 설정하는 것이 맞다고 생각했지만, 다음 column인 '권종' 또한 th로 볼 수 있지 않을까 생각이들었다. 왜냐하면, 신한카드 지정석의 경우 권종이 각 행의 제목이 될 수 있기 때문이다. 그리고 '권종'을 th로 설정한다면, 애초에 `구역`과 `권종` column을 하나의 colgroup으로 묶을 때, 테이블이 더 명확한 의미를 가지지 않을까 생각이 들었다.
  
  <br/>
  
  2. **scope와 id&headers 선택** 
      - 처음에는 어떤 차이가 있는지 몰랐지만, 구현하는 과정에서 내린 결론은 보조 기술 사용자 입장에서 단방향으로 열이나 행 제목의 정보만 제공한다면 scope를 사용하고, 여러 행과 열의 제목을 포함하는 복잡한 데이터라면 id, headers가 더 정확하다는 것을 알게 되었다. 따라서, 본 실습에서는 여러 가지의 th와 셀 병합이 존재하므로 id, headers를 사용했다.
      - 다만, id, headers는 코드 작업의 양이 많아지기 때문에 코드 가독성이나 유지 보수 측면에서 효율적이지는 않을 것 같다. 
  
  <br/>
  
  3. **웹 접근성을 고려하지 않았던 과거의 프로젝트들에 대한 반성**
      - 구현과 결과물에만 초점을 둔 프로젝트는 종종 주관적 기준으로 개발이 진행될 때가 있는데, 웹 표준과 접근성이라는 보다 명확한 기준을 가지고 웹을 바라보니 실제 운영 중인 서비스 중에서도 개선점을 찾아낼 수 있었다. 웹 표준과 접근성을 공부하면서 엉망이었던 지난 프로젝트들이 계속 떠올랐지만, 부끄러움과 괴로움을 느낀만큼 다음 작업에서는 다양한 관점으로 보다 나은 개발을 할 수 있을 것으로 기대한다.
  
  <br/>
  
  4. **라이트하우스 사용**
      - 웹 성능 평가나 사이트 분석에 대한 경험이 없었고, 툴에 대한 지식도 없었는데, 크롬 브라우저 개발자 도구에 내장된 라이트하우스를 처음 사용해보게 되었다. 웹 페이지 품질 개선에 대한 검사는 크게 5가지 지표인 `Performance`(페이지 속도 관련), `Accessibility`(접근성), `Best Practices`(웹 표준 관련), `SEO`(검색엔진최적화), `Progressive Web App(PWA)`(앱처럼 보이는 모바일 웹서비스 관련) 으로 구성되는데, 사용해본 결과 생각보다 **자세한 내용을 친절한 방식으로 제공**해주는 듯하다. 해당 점수가 절대적인 웹에 대한 기준이 되지는 않겠지만, 마땅히 수정이 필요한 부분에 대한 정보를 주는 도구이기 때문에 많은 개발자들이 사용하고 또 공식적으로 제공을 하게 되지 않았을까 싶다. 웹 페이지 평가와 관련한 새로운 도구를 알게되었으니 이후 개발에서 큰 도움이 될 것 같다.
      - `HTTP/HTTPS 페이지 및 크롬 확장 프로그램만 평가할 수 있다`는 아쉬움이 있다. 
