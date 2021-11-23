const getDay = (() => {
  const days = ['일', '월', '화', '수', '목', '금', '토']
  return dateString => days[new Date(dateString).getDay()] + '요일'
})()

console.log(getDay('2021-07-24')) // => '토요일'
console.log(getDay('2021-07-25')) // => '일요일'
console.log(getDay('2021-07-26')) // => '월요일'
