function getDay (date) {
  const days = ['일', '월', '화', '수', '목', '금', '토']
  return `${days[new Date(date).getDay()]}요일`
}

getDay('2021-07-24') // => '토요일'
getDay('2021-07-25') // => '일요일'
getDay('2021-07-26') // => '월요일'
