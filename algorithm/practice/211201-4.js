function solution (input) {
  let currentHeight = Math.max(...input)
  let answer = 0
  while (currentHeight > 0) {
    input.forEach((height, idx) => {
      if (height > currentHeight) return
      let width = 1
      while (input[idx + 1] >= currentHeight) {
        idx += 1
        width += 1
      }
      answer = Math.max(width * height, answer)
    })
    currentHeight -= 1
  }
  console.log(answer)
  return answer
}

const input = [1, 5, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

solution(input)
