// 날짜를 나타내는 3번째 매개변수에 0을 전달하면 전월 말일 Date 객체 반환
function getLastDateOfMonth (year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate()
}

// 2021년 1월의 마지막 날은 31일
console.log(getLastDateOfMonth(2021, 0)) // => 31

// 2021년 2월의 마지막 날은 28일
console.log(getLastDateOfMonth(2021, 1)) // => 28
