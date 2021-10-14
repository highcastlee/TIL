// const input = 'abbac'

// solution(input)

function solution (s) {
  let stack = []
  let arr = s.split('')
  let answer
  for (let i of arr) {
    if (stack[stack.length - 1] === i) {
      stack.pop()
      continue
    }
    stack.push(i)
  }
  answer = stack.join('')

  console.log(answer)
  return answer
}
