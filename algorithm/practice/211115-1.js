const input = [
  [[3, 2, -3, 1, -1, -2, 4, -4, 1, -1], 2],
  [[2, 4, 3, -3, 3, -2, 1, -3, -1, -4], 4],
  [[1, -1], 1],
  [
    [
      7,
      -7,
      2,
      5,
      1,
      4,
      9,
      -9,
      -2,
      3,
      -1,
      -5,
      6,
      10,
      -10,
      7,
      -4,
      -6,
      8,
      -7,
      4,
      -3,
      3,
      -8,
      -3,
      -4
    ],
    1
  ],
  [
    [
      10,
      2,
      14,
      12,
      13,
      6,
      9,
      -14,
      4,
      1,
      11,
      8,
      -10,
      15,
      -11,
      -4,
      3,
      -2,
      -15,
      -13,
      7,
      2,
      -7,
      5,
      7,
      -7,
      -2,
      -8,
      -3,
      -5,
      -6,
      -12,
      5,
      -9,
      -5,
      -1
    ],
    3
  ],
  [
    [
      18,
      12,
      13,
      11,
      6,
      15,
      -6,
      19,
      7,
      5,
      17,
      -5,
      -13,
      -11,
      14,
      2,
      -19,
      16,
      -17,
      -16,
      3,
      9,
      19,
      -7,
      -15,
      20,
      10,
      -14,
      -10,
      -18,
      -2,
      -19,
      8,
      -9,
      -8,
      4,
      -20,
      -4,
      -12,
      -3,
      1,
      -1
    ],
    16
  ]
]

for (let testCase of input) {
  const [history, infected] = testCase
  solution(history, infected)
}

// startIndex 직전까지 출입중인 사람 번호
// + startIndex ~ endIndex 내에 들어온 사람 번호

function solution (history, infected) {
  const before = []
  let answer = []
  const startIndex = history.indexOf(infected)
  for (let i = 0; i < history.length; i++) {
    if (num === -infected) break
    let num = history[i]
    if (num === infected) {
      answer = answer.concat(before)
      continue
    }
    if (i > startIndex && num > 0) {
      answer.push(num)
      continue
    }
    if (num > 0) before.push(num)
    else before.splice(before.indexOf(-num), 1)
  }
  answer = [...new Set(answer)]
  answer.sort((x, y) => x - y)
  console.log(answer)
  return answer
}
