// LCS(Longest Common Subsequence) (최장 공통 부분 수열) 문제
// Longest Common Substring은 연속인 케이스

// LCS는 이차원 배열로 풀 수 있음
// 공통 문자가 발생할 때마다 1씩 증가하여 누적 기록
// 공통 문자가 아닌 row,col에서는 row-1 또는 col-1의 값 중 큰 값

// (단, substring일 경우는 공통 발생할 때만 [row-1][col-1]의 값 + 1)

// 최장 길이는 max 값 찾기
// 최장 문자는 LCS배열에서 역순으로 추적하여 기록

const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `ACAYKP
CAPCAK`.split('\n')

function solution ([str1, str2]) {
  const LCS = new Array(str1.length + 1)
    .fill(0)
    .map(() => new Array(str2.length + 1).fill(0))
  for (let r = 1; r <= str1.length; r++) {
    for (let c = 1; c <= str2.length; c++) {
      if (str1[r - 1] === str2[c - 1]) LCS[r][c] = LCS[r - 1][c - 1] + 1
      else {
        LCS[r][c] = Math.max(LCS[r - 1][c], LCS[r][c - 1])
      }
    }
  }
  let maxLength = LCS[str1.length][str2.length]
  let result = []
  let row = str1.length
  let col = str2.length
  while (row > 0 && col > 0) {
    if (LCS[row][col] === 0) break
    if (LCS[row][col] === LCS[row - 1][col]) row--
    else if (LCS[row][col] === LCS[row][col - 1]) col--
    else {
      result.unshift(str1[row - 1])
      row--
      col--
    }
  }
  console.log(maxLength)
  if (maxLength > 0) console.log(result.join(''))
}

solution(input)
