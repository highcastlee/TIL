function isEqualDate (firstDate, secondDate) {
  if (firstDate.getFullYear() !== secondDate.getFullYear()) return false
  if (firstDate.getMonth() !== secondDate.getMonth()) return false
  if (firstDate.getDate() !== secondDate.getDate()) return false
  return true
}

isEqualDate(new Date('2021/07/24'), new Date('2021/07/24')) // => true
isEqualDate(new Date('2021/07/24'), new Date('2022/07/2')) // => false
