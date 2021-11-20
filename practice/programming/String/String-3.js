function replaceAtoSharp (word) {
  return word.replace(/A/g, '#')
}

replaceAtoSharp('BANANA') // => B#N#N#
