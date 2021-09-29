
# String

## String 기본
  - 텍스트 길이에 상관없이 문자열 형태로 저장되는 자료형
  - javascript는 C++ 같은 다른 언어와 달리 글자 하나만 저장하는 char 자료형이 없다.
  - javascript에서 문자열은 페이지의 인코딩 방식과 상관없이 항상 UTF-16형식을 따른다.
  - 대표 속성과 메서드
    - 문자열 길이 : String.length
    - 문자열 접근 : String.charAt(index), String.charCodeAt(index)
    - 문자열 검색 : String.indexOf(), String.lastIndexOf(), String.includes() 등
    - 문자열 변환 : String.toUpperCase(), String.toLowerCase()
    - 문자열 치환 : String.replcae()
    - 문자열 추출 : String.slice(), String.substring(), String.substr()
    - 문자열 분할 : String.split()
  


### 문자 정의 및 표기
  - 따옴표, String(), ``(템플릿 리터럴)
    ```javascript
    let s1 = "hello";
    let s2 = 'hello2';
    let s3 = String("hello3");
    let s4 = `hello_${2*2}`;  // 문자 및 변수 혼합 표현법
    ```
  - 여러 문자 표기 방법
    - Line Feed (LF) : `\n`
      - 줄바꿈 실행
    - Carriage Return (CR) : `\r`
      - 줄바꿈 실행
    - 탭 문자열 : `\t`
    - 백슬래시 : `\`
    - Unicode : `\u{}`
      - console.log("\u{1f60D}")


### 문자열 길이 및 접근
  - String.length
    ```javascript
    let str = `hello
    world
    !!!`;
    console.log(str.length); // 15 (줄바꿈도 길이에 포함)

    let newStr = 'hello\nworld\n!!!';
    console.log(newStr.length); // 15
    ```
  - String.charAt(index), String.charCodeAt(index), String[index]
    ```javascript
    let str = "hello, world!!!";

    console.log(str.charAt(1))      // e  (index가 1인 위치의 문자)
    console.log(str.charCodeAt(1))  // 101 (index가 1인 위치의 문자의 아스키코드)
    console.log(str[0]) // h  (index가 0인 위치의 문자)
    ```


### 문자열 검색 및 변환
  - String.indexOf(substr, pos), String.lastIndexOf(substr,pos)
  - String.includes(substr, pos), String.startsWith(substr, pos), String.endsWith(substr, pos)
    ```javascript
    let text = "hello, world!!!";

    console.log(text.indexOf("l"));     // 2  (l이 나오는 첫 인덱스)
    console.log(text.indexOf("l", 3));  // 3  (index 3부터 체크해서 l이 나오는 인덱스)
    console.log(text.lastIndexOf("l")); // 10 (뒤에서 부터 찾는 l 문자 인덱스) 

    console.log(text.includes("HeLlo"));     // false
    console.log(text.startsWith("ello",1));  // true (index 1부터 ello로 시작하는지 체크)
    console.log(text.endsWith("world")); // false (world로 끝이 나는지 체크)
    ```
  
  - 대소문자 변환
    ```javascript
    let str = "HeLlo!!";

    console.log(str.toUpperCase()); // HELLO!!
    console.log(str.toLowerCase()); // hello!!
    ```


### 문자열 치환
  - String.replace(origin_str, change_str);
  - 정규표현식 활용 치환
    - /치환문자열/g(전체)
    - /치환문자열/gi(전체+대소문자 구분x)

  ```javascript
  let text = "helLo, world!!!";
  let changed_text = "";

  // world 문자를 earth 문자로 치환
  changed_text = text.replace("world", "earth");

  console.log(changed_text);            // helLo, earth!!!
  console.log(text.replace("!", "?"));  // helLo, world???
  console.log(text.replace(/l/g, "i")); // heiLo, worid!!!
  console.log(text.replace(/l/gi, "i")); // heiio, worid!!!  (대소문자 구분x)
  ```

### 문자열 추출
  - 위치 기반 문자열 추출
    - String.slice(start,end)
      - 파라미터의 순서만 맞으면 됨
      - 역순이면 빈 값 return
    - String.substring(start,end)
      - 둘 다 음수일 경우 빈 값 return
  
  - 길이 기반 문자열 추출
    - String.substr(start, length)
  ```javascript
    let text = "hello, world!!!";

    console.log(text.slice(1,5));   // ello
    console.log(text.substring(1,5));   // ello

    console.log(text.slice(-3));   // !!!
    console.log(text.substring(-3));   // !!!

    console.log(text.slice(5,1));   // ""   (slice는 순서 안 맞으면 빈 값 return)
    console.log(text.substring(5,1));   // ello

    console.log(text.slice(-5,7));   // ""   
    console.log(text.slice(-5,-7));   // ""
    console.log(text.slice(-5,-2));   // "ld!"
    
    console.log(text.substring(-5,7));   // ello
    console.log(text.substring(-5,-7));   // ""
    console.log(text.substring(-5,-2));   // ""

    // 길이 기반 substr()
    console.log(text.substr(3,3));   // llo   (index 3부터 3글자 리턴)


  ```


### 문자열 분할
  - String.split(separator, limit)
    - 배열로 문자열을 분할하여 반환
    
  ```javascript
  let text = "apple banana melon";
  
  console.log(text.split(" ")); // ['apple','banana','melon'] (공백 기준 문자열 분할)

  console.log('hello'.split("")); // ['h','e','l','l','o']  (문자 분할)

  console.log('hello'.split("", 3)); // ['h','e','l']  (길이 3까지만 분할)
  ```