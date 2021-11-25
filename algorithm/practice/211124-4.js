function solution (arr) {
  const sortedArr = arr.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  })
  const [startTime, endTime] = [
    sortedArr[0][0],
    sortedArr[sortedArr.length - 1][1]
  ]
  let count = 0
  for (let t = startTime; t <= endTime; t++) {
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

const input = [
  [1, 1],
  [2, 2],
  [2, 4],
  [3, 4]
]

console.log(solution(input))
