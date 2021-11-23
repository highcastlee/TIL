function count (str, findChar) {
  return str.match(new RegExp(findChar, 'g')).length
}

count('COMPUTERPROGRAMMING', 'R') // => 3
