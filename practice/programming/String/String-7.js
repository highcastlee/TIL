function removeDuplication (arr) {
  return [...new Set([...arr])]
}

function reducer (result, currentWord) {
  return result.replace(new RegExp(`${currentWord}+`, 'g'), replaceCount)
}

function replaceCount (str) {
  return str.length < 2 ? str : str[0] + str.length
}

function compress (word) {
  return removeDuplication(word).reduce(reducer, word)
}

console.log(compress('ABBCCCECC')) // => AB2C3EC2
