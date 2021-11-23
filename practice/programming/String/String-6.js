// replace의 두 번째 인수인 콜백함수의 매개변수는 [match, p1, p2, p3, offset, string]이다.

function toggleCase (word) {
  return word.replace(/([A-Z]+)|([a-z]+)/g, (_, upperCase, lowerCase) => {
    return lowerCase ? lowerCase.toUpperCase() : upperCase.toLowerCase()
  })
}

console.log(toggleCase('StuDY')) // => 'sTUdy'
