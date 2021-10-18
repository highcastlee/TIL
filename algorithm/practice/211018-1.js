let input = 100000000

solution(input)

function solution (n) {
  let answer = 1
  for (let i = 1; i <= n; i++) {
    if (i ** 3 <= n) answer = i ** 3
    else {
      console.log(answer)
      return answer
    }
  }
}
