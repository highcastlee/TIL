function replacer (str) {
  return str.toUpperCase() === str ? str.toLowerCase() : str.toUpperCase()
}

function toggleCase (word) {
  return word.replace(/([A-Z])|([a-z])/g, replacer)
}

console.log(toggleCase('StuDY')) // => 'sTUdy'
