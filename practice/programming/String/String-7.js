function compress (word) {
  let count = 1
  let compressedWord = [...word].reduce((result, char) => {
    if (result[result.length - 1] === char) {
      count += 1
      return result
    }
    result += count > 1 ? count + char : char
    count = 1
    return result
  }, '')

  return count > 1 ? compressedWord + count : compressedWord
}

console.log(compress('ABBCCCE')) // => AB2C3E
