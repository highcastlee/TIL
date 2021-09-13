const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `-10`.split('\n')

console.log(sol(input))

function sol (num) {
  const isMinus = num < 0
  let left = Math.abs(num)
  if (left / 100000 > 1) return 0

  let q = []
  for (let i = 100000; i >= 1; i /= 10) {
    q.push(Math.floor(left / i))
    left = left % i
  }
  for (let i in q) {
    if (q[i] !== 0) {
      q = [...q.slice(i)]
      break
    }
  }
  let result = 0
  for (let i in q) {
    result += q[i] * 10 ** i
  }
  result = isMinus ? -result : result
  return result
}
