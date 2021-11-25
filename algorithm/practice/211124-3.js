function solution (str) {
  let stack = []
  let maxNum = 0
  str.split('').forEach(s => {
    if (!stack.includes(s)) {
      stack.push(s)
      maxNum = Math.max(maxNum, stack.length)
    } else {
      stack = []
    }
  })
  return maxNum
}

const input = 'noooeoool'

console.log(solution(input))
