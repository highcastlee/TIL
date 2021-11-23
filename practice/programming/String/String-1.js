function isPalindrome (str) {
  const word = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  return word === [...word].reverse().join('')
}

console.log(isPalindrome('A man, a plan, a canal: Panama')) // => true
console.log(isPalindrome('race a car')) // => false
