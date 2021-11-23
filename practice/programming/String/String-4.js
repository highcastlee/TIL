function countUpperCase (word) {
  return word.match(/[A-Z]/g).length
}

countUpperCase('KoreaTimeGood') // => 3
