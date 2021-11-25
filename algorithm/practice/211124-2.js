function solution (arr, num) {
  return arr.flat().sort((a, b) => a - b)[num - 1]
}

const input = [
  [4, 5, 6, 7, 8],
  [11, 12, 13, 14, 15],
  [15, 16, 19, 33, 35],
  [6, 8, 20, 22, 88],
  [8, 55, 66, 77, 100]
]
const num = 11

console.log(solution(input, num))
