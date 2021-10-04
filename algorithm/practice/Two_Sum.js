const input1 = [3, 3]
const input2 = 6

function sol (arr, k) {
  let result = []
  arr.forEach((v1, idx1, origin) => {
    if (result.length > 0) return false
    origin.forEach((v2, idx2) => {
      if (v1 + v2 === k) {
        result = [idx1, idx2]
      }
    })
  })
  console.log(result.sort((a, b) => a - b))
}

sol(input1, input2)
