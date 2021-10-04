const input = [27, 14, 19, 11, 26, 25, 23, 15]

sol(input)

function sol (arr) {
  let sum = arr.reduce((acc, cur) => acc + cur)
  let k = sum / arr.length
  let result = 0
  arr.forEach(v => {
    if (v > k) result += v - k
  })
  console.log(result)
}
