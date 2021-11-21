function toggleCase (word) {
  const upperWord = word.toUpperCase()
  return [...upperWord]
    .map((upperChar, index) => {
      if (upperChar === word[index]) return upperChar.toLowerCase()
      return upperChar
    })
    .join('')
}

console.log(toggleCase('StuDY')) // => 'sTUdy'
