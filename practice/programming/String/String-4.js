function countUpperCase (word) {
  const regExp = /[A-Z]/g
  return word.match(regExp).length
}

countUpperCase('KoreaTimeGood') // => 3
