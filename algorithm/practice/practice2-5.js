const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `.Hello, ..World!?nice*99`.split('\n')

console.log(
  sol(
    input[0]
      .split('')
      .reverse()
      .join('')
  )
)

function sol (str) {
  let sep = str.replace(/\,/g, '.')
  sep = sep.replace(/\!/g, '.')
  sep = sep.replace(/\?/g, '.')
  sep = sep.replace(/\ /g, '.')
  let result = ''
  for (let i = 0; i < sep.length - 1; i++) {
    if (sep[i] === '.' && sep[i] === sep[i + 1]) {
      continue
    } else {
      result += sep[i]
    }
  }
  if (sep[sep.length - 1] !== '.') {
    result += sep[sep.length - 1]
  }
  return result.split('.').join(' ')
}

// 하나의 특수 문자로 모두 치환
// 연속 특수 문자를 1개로 통합
// 해당 특수 문자로 분리 후, 띄어쓰기 기준 재조립
