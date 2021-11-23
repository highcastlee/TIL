//jsDoc
/**
 *
 * @param {Date} date
 * @returns {string}
 */

const formatDate = (() => {
  const format = num => (num < 10 ? '0' + num : num + '')
  return date =>
    `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(
      date.getDate()
    )}`
})()

console.log(formatDate(new Date('2021/07/24'))) // => "2021-07-24"
console.log(formatDate(new Date('1900/1/4'))) // => "1900-01-04"
