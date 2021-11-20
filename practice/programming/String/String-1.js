function getEnglishNumber (str) {
  const reqExp = /[A-Za-z0-9]/g
  return str.match(reqExp).join('')
}

function isPalindrome (str) {
  const word = getEnglishNumber(str).toUpperCase()
  return word === [...word].reverse().join('')
}

isPalindrome('A man, a plan, a canal: Panama') // => true
isPalindrome('race a car') // => false
