


### 1. 접근성이 좋지 않은 테이블 선정
  - [FC SEOUL 티켓 요금표](https://www.fcseoul.com/tickets/reserveSingleTicket)
    <img src="https://user-images.githubusercontent.com/62092665/135714445-6c10c7bf-2e83-45db-b5da-ded91fe089d2.png" width="70%">

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


### 해당 서비스의 접근성 문제
  1. 테이블 요약 정보 미제공
  2. scope, id, headers 미적용

###  WCAG 가이드라인에 따른 수정 계획
  -  [WCAG Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/)
  1. 테이블 요약 정보 제공.
      - 방법 1) summary 속성 내 요약 정보 (HTML5 규격 제외됨)
      - 방법 2) figure, figcaption 사용
      - 방법 3) table 내 caption 요소에 포함하여 제공
      - 방법 4) aria-describedby로 외부의 요약 정보 단락을 연결
      ```html
      <table class="seatTable">
        <caption>
          단일 경기 티켓 예매 요금표<br/>
          경기장 구역, 권종, 예매 가격, 멤버십 할인된 가격, 제공사항 안내
        </caption>
        <thead>...</thead>
        <tbody>...</tbody>
      </table>
      ```

  2. scope, id, headers 적용
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
  - 수정된 table 작성 코드 예시
  ```html
      <table class="seatTable">
        <caption>
          단일 경기 티켓 예매 요금표<br/>
          경기장 구역, 권종, 예매 가격, 멤버십 할인된 가격, 제공사항 안내
        </caption>
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
            <td headers="ticketType vip">일반</td>
            <td headers="price vip" class="price">35,000원</td>
            <td headers="discountPrice vip" class="discount">33,000원</td>
            <td headers="onsitePrice vip" class="onsite">37,000원</td>
            <td headers="offer vip" class="last">- 테이블석(1인/2인)</td>
          </tr>
          <tr>
            <th id="premium" headers="ticketSection" class="first">                    	
              <strong>프리미엄<br>서측 지정석</strong>
              <p><button data-seat="seat11">경기장 View</button></p>
            </th>
            <td headers="ticketType premium">일반</td>
            <td headers="price premium" class="price">25,000원</td>
            <td headers="discountPrice premium" class="discount">23,000원</td>
            <td headers="onsitePrice premium" class="onsite">27,000원</td>
            <td headers="offer premium" class="last" rowspan="5">- 지정석으로 운영</td>
          </tr>
          <tr>
            <th id="sinhan" headers="ticketSection" class="first" rowspan="3">
              <strong>
                <div><img src="/resources/front/images/sub/tickets/shinhan.png" alt="신한카드"></div>
                신한카드 지정석
              </strong>
              <p><button data-seat="seat7">경기장 View</button></p>
            </th>
            <td headers="ticketType sinhan" >성인</td>
            <td headers="price sinhan" class="price">16,000원</td>
            <td headers="discountPrice sinhan" class="discount">14,000원</td>
            <td headers="onsitePrice sinhan" class="onsite">18,000원</td>
          </tr>
          <tr>
            <td headers="ticketType sinhan" >청소년</td>
            <td headers="price sinhan" class="price">13,000원</td>
            <td headers="discountPrice sinhan" class="discount">11,000원</td>    
            <td headers="onsitePrice sinhan" class="onsite">15,000원</td>                
          </tr>
          <tr>
            <td headers="ticketType sinhan" >어린이</td>
            <td headers="price sinhan" class="price">7,000원</td>
            <td headers="discountPrice sinhan" class="discount">5,000원</td>    
            <td headers="onsitePrice sinhan" class="onsite">9,000원</td>                
          </tr>
          ...
        </tbody>
      </table>
  ```


### 웹 접근성 관련 체크리스트
  1. table이 레이아웃을 위해 사용되지 않았는지
      - table은 2차원 형태의 데이터 테이블을 마크업할 때 사용하므로, 레이아웃을 위한 table 요소 사용은 **구조적 마크업(semantic markup)** 을 해치며 이는 접근성 측면에서도 좋지 않다.
  
  2. 데이터 표에 적절한 제목과 요약 정보를 제공
      - 방법 1) summary 속성 내 요약 정보 (HTML5 규격 제외됨)
      - 방법 2) figure, figcaption 사용
      - 방법 3) table 내 caption 요소에 포함하여 제공
      - 방법 4) aria-describedby로 외부의 요약 정보 단락을 연결
  
  3. tr, th, td 요소의 적절한 사용
      - tr : table의 행
        - table은 tr을 자식 요소로 포함하고, tr 요소 내에서 th와 td를 사용하여 마크업한다.
      - th : table의 제목 셀
        - 데이터 테이블의 필드에 해당한다.
        - scope 속성으로 해당 셀이 영향을 주는 내용 셀의 범위를 지정할 수 있다.
      - td : table의 내용 셀
        - td 요소 안에 제목을 사용하여도 HTML5는 독립된 콘텐츠로 인식하여 아웃라인에 영향 주지 않음
        - 특정 셀과 병합하고자 할 때, colspan, rowspan 등으로 병합 가능하다.

  4. 테이블 열 그룹화
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
  5. 테이블 행 그룹화
      - `<thead></thead>` : 테이블의 제목 셀 그룹
      - `<tbody></tbody>` : 테이블의 본문 행
      - `<tfoot></tfoot>` : 테이블의 푸터 행
        - table 요소 내에서 한 번만 사용할 수 있다.
      - 행 그룹화 요소의 작성 순서와 상관없이 tfoot 요소는 테이블의 가장 마지막에 렌더링 된다.
      >thead, tfoot의 장점
      > - 테이블의 데이터가 많아 인쇄 시, 여러 장에 걸치게 될 경우 페이지마다 thead와 tfoot 정보를 인쇄할 수 있다. 페이지마다 종합 정보를 미리 알 수 있다.

  6. scope, id, headers 속성
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


