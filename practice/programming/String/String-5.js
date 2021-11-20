function count (str, findChar) {
  const regExp = new RegExp(findChar, 'g')
  return str.match(regExp).length
}

count('COMPUTERPROGRAMMING', 'R') // => 3
