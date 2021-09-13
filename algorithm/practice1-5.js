const input = [
  [1, 2],
  [1, 2],
  [1, 2],
  [1, 2]
]

console.log(sol(input))

function sol (arr) {
  const sortedArr = arr.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0]
    return a[1] - b[1]
  })
  let count = 0
  const firstNum = sortedArr[0][0]
  const lastNum = sortedArr[sortedArr.length - 1][1]
  for (let t = firstNum; t <= lastNum; t++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (t >= sortedArr[j][0] && t <= sortedArr[j][1]) {
        sortedArr.splice(j, 1)
        count += 1
        break
      }
    }
  }
  return count
}
