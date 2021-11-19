function diffDays (firstDate, secondDate) {
  const oneDayTime = 24 * 60 * 60 * 1000
  return Math.abs(firstDate - secondDate) / oneDayTime
}

diffDays(new Date('2021/01/01'), new Date('2021/12/31')) // => 364
