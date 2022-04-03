let fs = require('fs')
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')

function solution (input) {
  const n = +input[0]
  const words = input[1].replace(/[^WHE]/, '')
  let result = 0

  for (let start = 0; start < words.length - 3; start++) {
    if (words[start] !== 'W') continue
    let substr = words.slice(start + 1)
    let HIdx = substr.indexOf('H')
    while (HIdx !== -1) {
      const eLen = substr.slice(HIdx + 1).match(/[E]/g).length
      console.log(eLen)
      if (eLen < 2) break
      if (eLen === 2) {
        result += 1
        break
      } else {
        result += 2 ** eLen - eLen - 1
      }
      substr = substr.slice(HIdx + 1)
      HIdx = substr.indexOf('H')
    }
  }
  console.log(result % 1000000007)
}

// let input = `6
// WHEEWHABE`
// solution(input.split('\n'))
