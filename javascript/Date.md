
# Date


## Date 객체 기본
  - 표준 Built-in 객체로써, 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체
  - Date 객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값으로 표현
  - 생성자 및 대표 메서드
    - Date 객체 생성자 : new Date()
    - 현재 시간 기준 문자열 : Date()
    - 날짜 정보 얻기 (년/월/일) : 
      - Date.getFullYear()
        - getYear() 함수는 2000년 이후로 이슈가 발생하기 때문에 deprecated.
        - 표준인 getFullYear()를 사용하도록 한다.
      - Date.getMonth()
      - Date.getDate()
    - 날짜 정보 얻기 (시/분/초) : 
      - Date.getHours()
      - Date.getMinutes()
      - Date.getSeconds()
    - 날짜 정보 설정 (년/월/일) :
      - Date.setFullYear()
      - Date.setMonth()
      - Date.setDate()
    - 날짜 정보 설정 (시/분/초) : 
      - Date.setHours()
      - Date.setMinutes()
      - Date.setSeconds()
    - 그 외 날짜 정보 얻기
      - Date.getDay()
        - 주어진 날짜의 현지 시간 기준 요일을 반환
        - sunday:0, monday:1, ...
      - Date.getTime()
        - 표준시에 따라 지정된 날짜의 시간에 해당하는 숫자 값을 반환
        ```javascript
        const time = new Date();  //Thu Sep 30 2021 18:48:59 GMT+0900 (한국 표준시)
        console.log(time.getTime()); // 1632995339249
        ```
      - Date.getTimeZoneOffset()
        - 현재 로케일 (즉, 호스트 시스템 설정)에 대한 시간대 오프셋 (UTC)을 분 단위로 반환
        - 시간대 오프셋은 UTC와 현지 시간의 차이(분)
        - 로컬 시간대가 UTC보다 뒤떨어져 있으면 오프셋이 양수이고 앞에있을 경우 음수임을 의미
        ```javascript
        const now = new Date();
        const nowOffset = now.getTimezoneOffset() // -540
        ```


### Date 생성
  - new 연산자 없이 Date()를 사용한 날짜 분석은 동작이 일관적이지 못하고 브라우저끼리 차이가 존재하므로 사용하지 않는 것이 좋다.(Date.parse 때문)
  - 새로운 Date 객체를 생성하는 방법은 new 연산자를 사용하는 것이 유일
  - `let now = Date();`처럼 Date를 직접 호출하면 새로운 Date 객체가 아니라 문자열을 반환
    - 위 경우, Date 객체의 메서드를 사용할 수 없다.

  ```javascript
  new Date();
  new Date(value);  // 밀리초 단위의 유닉스 시간으로 인식
  new Date(dateString);
  
  // 중요! month는 index로 구분하여 0이 1월, 11이 12월이다.
  new Date(year, monthIndex);
  new Date(year, monthIndex, day);
  new Date(year, monthIndex, day, hours);
  new Date(year, monthIndex, day, hours, minutes);
  new Date(year, monthIndex, day, hours, minutes, seconds);
  new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);
  ```

  - 주의사항
    - 최신 브라우저가 아닌 경우 마지막에 Z 문자가 없으면 UTC 기준으로 해석해야 함에도 불구하고 로컬 타임을 기준으로 해석하는 경우가 있다.
    - 브라우저 버전별로 다르게 해석되는 문제를 막기 위해서는 타임존 데이터가 없는 경우 문자열의 마지막에 항상 Z를 추가해 주어야 한다.
    - 아래의 예제는 IE10 에서 실행시킨 결과이다.
      ```javascript
      let d1 = new Date('2017-03-11T11:30:00');   // 로컬 기준
      let d2 = new Date('2017-03-11T11:30:00Z');  // UTC 기준
      
      d1.toString(); // "Sat Mar 11 11:30:00 UTC+0900 2017"   
      //로컬 기준 11시 30분은 로컬 시간으로 11시 30분이다.
      
      d2.toString(); // "Sat Mar 11 20:30:00 UTC+0900 2017"   
      //UTC 기준으로 11시 30분은 로컬 시간으로 20시 30분이다.
      ```


### Date 예제
  ```javascript
  // 크롬에서는 로컬 타임존 사용되어 UTC 기준에서 +09:00 계산됨

  let now = new Date();       // Thu Sep 30 2021 22:37:37 GMT+0900 (한국 표준시) // object
  let now_str = new Date();   // 'Thu Sep 30 2021 22:37:37 GMT+0900 (한국 표준시)' // string
  
  // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시) // UTC에서 +09:00가 계산되어 표시됨
  let ms_1 = new Date(0); // 1970년 1월 1일 0시 0분 0초 기준
  
  // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시) // UTC에서 +09:00가 계산되어 표시됨
  let ms_2 = new Date(24* 60 * 60 * 1000); 

  // Wed Jan 01 2020 09:00:00 GMT+0900 (한국 표준시)  // UTC에서 +09:00가 계산되어 표시됨
  let date_str = new Date('2020-01-01');  

  // Wed Jan 01 2020 00:00:00 GMT+0900 (한국 표준시)  // UTC에서 +09:00가 계산 안 되고 표시됨
  let date_params_1 = new Date(2020, 0, 1);

  // Wed Jan 01 2020 15:12:18 GMT+0900 (한국 표준시) // UTC에서 +09:00가 계산되어 표시됨
  let date_params_2 = new Date(Date.UTC(2020, 0, 1, 6, 12, 18, 24));

  // Wed Jan 01 2020 09:00:00 GMT+0900 (한국 표준시) // UTC에서 +09:00가 계산되어 표시됨
  let date_params_3 = new Date(Date.UTC(2020, 0, 1));

  ```

  - 함수 시간 차 구하기 예제
    ```javascript
    function dateSub(old_date, new_date){
      return new_date - old_date;
    }
    function getTimeSub(old_date, new_date){
      return new_date.getTime() - old.date.getTime();
    }

    function benchmark(callback_func){
      let date_1 = new Date('2020-01-01');
      let date_2 = new Date();
      let start = Date.now();
      
      for(let i=0;i<100000; i++){
        callback_func(date_1,date_2);
      }

      // 해당 콜백함수 실행 전후의 시간차 계산
      return Date.now()-start;
    }

    // Date 객체 - Date 객체
    console.log('dateSub : ' + benchmark(dateSub) + "ms");
    // 41ms (예시)

    // Date.getTime() - Date.getTime()
    console.log('getTimeSub : ' + benchmark(getTimeSub) + "ms");
    // 4ms (예시)

    // Date 객체의 차이로 비교하는 것보다 getTime()으로 변환 후 비교하는 것이 빠르다.
    ```


---

## Javascript에서의 타임존

##### GMT (Greenwich Mean Time)
  - 경도 0도에 위치한 영국 그리니치 천문대를 기준으로 하는 태양 시간
  - 한국의 타임존은 보통 GMT+09:00 으로 표현된다.

##### UTC
  - 영어권의 CUT(Coordinated Universal Time)와 프랑스어권의 TUC (Temps Universal Coordonn)의 중재안으로 합의된 이름
  - GMT 또한 UTC라고 불린다.
    - 엄밀히 따지자면, UTC는 지구 자전주기의 흐름이 늦어지고 있는 문제를 해결하기 위해 국제 원자시를 기준으로 다시 지정된 시간대이다. 즉 UTC가 조금 더 정확한 새로운 표준이며, 소프트웨어에서 사용할 때는 UTC라고 하는 것이 더 정확한 표현

##### 오프셋 (Offset)
  - UTC+09:00 에서 +09:00의 의미는 UTC의 기준시간 보다 9시간이 빠르다는 의미 
  - 즉, UTC 기준으로 12:00 이라면, 한국시간으로는 21:00 이다.
  - UTC 기준시간보다 느린 경우 음수로 표현된다. (ex. -09:00)
  - 국가나 지역마다 자신의 타임존에 고유의 이름을 부여한다.
    - KST(Korea Standard Time) = UTC+09:00 이다.

>타임존은 국가나 지역이 법적으로 결정하기 때문에, 정치적 혹은 경제적 이유로 변경될 수 있다.
>즉, 타임존 !== 오프셋 이다.


## 날짜 구문 방식
  1. Unix time
      - 1970년 1월 1일 00:00:00 협정 세계시(UTC) 부터 경과 시간을 초로 환산하여 정수로 나타낸 것
      - 서울의 2017년 3월 10일 오후 9시 30분은 unix time으로 `1489113000` 이다.
        ```javascript
        let time = new Date();
        time.getTime();  //return 1633006839125 (객체가 생성된 순간의 unix time)
        ```
  2. ISO 8601
      - 날짜와 시간 표현에 대한 국제 표준
      - 형식 : YYYY-MM-DDTHH:mm:ss.sssZ
      - 시간, 분, 초 단위로 기록될 수 있다.
      - 날짜 문자열에서 시간(T)은 날짜와 시간 사이의 UTC 시간을 나타낸다.
      - 서울의 2017년 3월 10일 오후 9시 30분은 `2017-03-10T11:30:00+09:00`이다.
      - yyyy-mm-dd || yyyy-mm || yyyy
        - `var d = new Date("2015-03-25");`
      - YYYY-MM-DDTHH:MM:SS
        - `var d = new Date("2015-03-25T12:00:00");`


### Date.parse(dateString) 사용 주의사항
  - **결론 : 문자열로 된 날짜는 parsing이 불확실하기 때문에 되도록 사용하지 않고, 사용하더라도 주의해서 사용해야 한다.**
  <br/>
  - dateString 
    - RFC2822 또는 ISO 8601 날짜를 나타내는 문자열
  - Date.parse(dateString)는 문자열을 파싱하여 날짜를 분석한 후, Unix time을 반환.
    - 문자열 인식이 되지 않거나 잘못된 날짜인 경우 NaN 반환
  - **Date.parse()는 브라우저마다 구현 상태가 다르고, 문자열의 형태에 따라 정확한 값을 예측하기 어렵기 때문에 사용하지 않는 것을 권장하고 있다.**
    - 예를 들어 `2015-10-12 12:00:00` 같은 문자열
      - 사파리나 IE의 경우 `NaN` 을 반환
      - 크롬이나 파이어폭스의 경우 로컬 타임존의 값을 반환
      - 경우에 따라 다른 환경에서는 UTC 기준의 값을 반환
    > ECMAScript 5판부터 ISO-8601 을 지원하도록 명시되어 있기 때문에, ECMAScript 5판을 지원하는 IE9 이상의 브라우저에서는 주의해서 사용하면 ISO-8601 형식의 문자열을 Date 생성자에 사용할 수 있다.
  
  ```javascript
  // Z가 붙으면 UTC 기준 시간으로 인식

  let ms_parse = Date.parse("2020-03-31T00:00:00.000"); // 1585580400000
  new Date(ms_parse)  // Tue Mar 31 2020 00:00:00 GMT+0900 (한국 표준시)

  let ms_parse_2 = Date.parse("2020-03-31T00:00:00.000Z"); // 1585612800000
  new Date(ms_parse_2)  // Tue Mar 31 2020 09:00:00 GMT+0900 (한국 표준시)  //+09:00 계산됨

  ```




### 로컬 타임존 변경하기

##### 특정 시간의 서울과 뉴욕 시간 확인
  - 조건
    - 주어진 특정 시간(2017년 3월 11일 오전 11시 30분)의 유닉스 시간은 1489199400000(ms)
    - 뉴욕의 오프셋은 -05:00 이다.

  ```javascript
  // 1. 현재 타임존의 오프셋 구하기
  let time = 1489199400000;
  let seoul = new Date(time); // 주어진 유닉스 시간을 서울의 Date 객체로 변환
  seoul.getTimezoneOffset();      // 분단위 오프셋은 -540

  // 뉴욕의 오프셋 -05:00 는 분단위로 +300 (=60*5) 이므로 뉴욕과 한국의 오프셋 차이는 840

  // 2. 특정 시간에 대한 한국과 미국의 시간 차를 구해야하므로, 문제의 시간에서 840분 만큼의 유닉스 시간 차이를 구해야한다.
  let ny_time = new Date(1489199400000 - (840 * 60 * 1000));

  seoul    // Sat Mar 11 2017 11:30:00 GMT+0900 (한국 표준시)  // (= 1489199400000)
  ny_time  // Fri Mar 10 2017 21:30:00 GMT+0900 (한국 표준시)  // (= 1489149000000)
  ```

---


#### 오프셋 값만 가지고는 원하는 타임존 기준으로 날짜 연산을 할 수 없다.
  - 정확한 날짜 연산을 위해서는 IANA timezone Database와 같이 타임존 변경 히스토리가 담긴 전체 데이터가 필요하다.
    - Date 객체에서 날짜나 시간 데이터를 가져올 때마다 데이터베이스에서 해당 날짜와 타임존에 맞는 오프셋을 알아낸 다음, 연산을 통해 결과 반환해야한다.

---

#### Moment TimeZone Library
  - 날짜 연산을 위한 자바스크립트 라이브러리
  - IANA timezone Database의 데이터를 내장하여 실제 오프셋을 정확히 계산해주며 다양한 API를 제공
  - [Moment 공식문서](https://momentjs.com/timezone/docs/)

---

#### 로컬 타임존을 변경할 필요 없다면, 최신 브라우저에서는 기본 API만으로도 충분히 필요한 기능을 구현할 수 있을 것이다.



---