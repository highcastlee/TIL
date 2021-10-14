// const input1 = '가나다라'
// const input2 = '바나나 드래곤 바나나 드래곤'

// solution(input1, input2)

function solution (pattern, str) {
  let tableP = {}
  let tableS = {}
  let strArr = str.split(' ')
  let patternArr = pattern.split('')
  let answer = true

  patternArr.forEach((p, i) => {
    if (!tableP[p]) tableP[p] = strArr[i]
  })

  strArr.forEach((s, i) => {
    if (!tableS[s]) tableS[s] = patternArr[i]
  })

  for (let i = 0; i < pattern.length; i++) {
    if (!tableP[pattern[i]] || tableP[pattern[i]] !== strArr[i]) answer = false
    if (!tableS[strArr[i]] || tableS[strArr[i]] !== pattern[i]) answer = false
  }
  console.log(answer)
  return answer
}
