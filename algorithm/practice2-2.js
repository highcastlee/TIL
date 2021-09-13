const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `가가가나
드래곤 드래곤 드래곤 드래곤`.split('\n')

const p = input[0]
const s = input[1].split(' ')

console.log(sol(p, s))

function sol (pattern, str) {
  for (let i in pattern) {
    if (pattern.slice(0, i).includes(pattern[i])) {
      if (str[i] === str[pattern.indexOf(pattern[i])]) continue
      else return false
    } else {
      if (str.slice(0, i).includes(str[i])) return false
    }
  }
  return true
}
