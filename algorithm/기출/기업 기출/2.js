function solution (arr) {
  let result = 0
  let s = 0
  i = 0
  e = 0
  while (e < arr.length - 1) {
    if (s === i) {
      while (arr[e] >= arr[e + 1]) {
        e++
        s = e
        i = e
      }
      while (arr[e] < arr[e + 1]) e++
      if (arr[e] > arr[e + 1]) i = e++
      else continue
    } else {
      while (arr[e] > arr[e + 1]) e++
      const left = i - s
      const right = e - i
      result += left * right ? left * right : 0
      s = e
      i = e
    }
  }
  const left = i - s
  const right = e - i
  result += left * right ? left * right : 0
  return result % 1090000
}

const problem = [
  [0, 1, 2, 5, 3, 7],
  [1, 2, 3, 2, 1],
  [1, 2, 3, 2, 1, 4, 3, 2, 2, 1],
  [1, 2, 1, 2, 1],
  [3, 2, 1, 0, 3, 3, 5, 6, 7, 5, 0]
]

problem.forEach(p => {
  console.log(solution(p))
})

// 3
// 4
// 6
// 2
// 6
