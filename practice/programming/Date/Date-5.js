function getLastDayOfMonth (year, monthIndex) {
  const oneDayTime = 24 * 60 * 60 * 1000
  return new Date(Date.UTC(year, monthIndex + 1) - oneDayTime).getDay()
}

// 2021년 1월 말일은 일요일
getLastDayOfMonth(2021, 0) // => 0

// 2021년 12월 말일은 금요일
getLastDayOfMonth(2021, 11) // => 5
