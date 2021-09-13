const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `5`.split('\n')

sol(parseInt(input))

function sol (num) {
  if (num % 4 === 1) {
    console.log(false)
    return false
  }
  console.log(true)
  return true
}
