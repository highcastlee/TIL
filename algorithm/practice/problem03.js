// 문자열 수식 계산
// 양수 분리 -> 음수 분리 -> 계산

function solution (str) {
  let result = 0
  let arr1 = str.split('+')
  let plusArr = []
  let minusArr = []
  arr1.forEach(s => {
    if (!Number(s)) {
      minusArr.push(s)
    } else {
      plusArr.push(Number(s))
    }
  })

  plusArr.forEach(v => {
    result += v
  })

  minusArr.forEach(s => {
    if (!Number(s)) {
      let minusNums = s.split('-').map(Number)
      result += minusNums.reduce((acc, cur) => acc - cur)
    } else {
      result += Number(s)
    }
  })
  console.log(result)
  return result
}
