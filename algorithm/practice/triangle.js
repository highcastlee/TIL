const input = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]

solution(input)

function solution (triangle) {
  let height = triangle.length
  let answer = 0
  let d = Array(501)
    .fill(0)
    .map(() => Array(501).fill(0))

  answer = d[0][0] = triangle[0][0]

  for (let i = 1; i < height; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) d[i][j] = d[i - 1][j] + triangle[i][j]
      else if (j === i) d[i][j] = d[i - 1][j - 1] + triangle[i][j]
      else {
        d[i][j] = Math.max(d[i - 1][j - 1], d[i - 1][j]) + triangle[i][j]
      }
      answer = Math.max(answer, d[i][j])
    }
  }
  console.log(answer)
  return answer
}
