const input = [1, 1, 1, 1, 1, 0, 0, 1, 1, 0]

sol(input)

function sol (arr) {
  let result = 0
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      result += ++count
      continue
    }
    count = 0
  }
  console.log(result)
}
