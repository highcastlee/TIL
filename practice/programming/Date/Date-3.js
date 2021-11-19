function getLastDateOfMonth (year, monthIndex) {
  const oneDayTime = 24 * 60 * 60 * 1000 // hour, minute, second, milisecond
  return new Date(Date.UTC(year, monthIndex + 1) - oneDayTime).getDate()
}

// 2021년 1월의 마지막 날은 31일
getLastDateOfMonth(2021, 0) // => 31

// 2021년 2월의 마지막 날은 28일
getLastDateOfMonth(2021, 1) // => 28
