/**
 *
 * @param {Date} date1
 * @param {Date} date2
 * @returns
 */

function isEqualDate (date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))) // => true
console.log(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2'))) // => false
