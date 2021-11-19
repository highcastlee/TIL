function formatDate (date) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day

  return [year, month, day].map(String).join('-')
}

formatDate(new Date('2021/07/24')) // => "2021-07-24"
formatDate(new Date('1900/1/4')) // => "1900-01-04"
