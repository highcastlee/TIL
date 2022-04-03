const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input

rl.on('line', function (line) {
  input = line
  rl.close()
}).on('close', function () {
  solution(input)
  process.exit()
})

function solution (input) {
  const inputArr = input.split('\n')
  const N = +inputArr.shift()

  const coinPrices = inputArr
    .shift()
    .split(' ')
    .map(Number)
  const discounts = new Array(N).fill(0).map(_ => [])
  let index = -1
  while (inputArr.length) {
    index++
    const pi = +inputArr.shift()
    for (let i = 0; i < pi; i++) {
      const [idx, discount] = inputArr
        .shift()
        .split(' ')
        .map(Number)
      discounts[index].push([+idx, discount])
    }
  }
  const nums = new Array(N).fill(0).map((_, i) => i)
  const permu = []
  function getNums (nums, result) {
    if (result.length >= N) {
      permu.push(result)
      return
    }
    for (let i = 0; i < N; i++) {
      if (result.includes(i)) continue
      result.push(i)
      getNums(nums, [...result])
      result.pop()
    }
  }
  getNums(nums, [])
  let min = Infinity
  while (permu.length) {
    let price = 0
    const numArr = permu.shift()
    const copyCoins = [...coinPrices]
    const copyDiscounts = discounts.map(v => [...v])
    while (numArr.length) {
      const id = numArr.shift()
      price += +copyCoins[id]
      while (copyDiscounts[id].length) {
        const [discountID, discountPrice] = copyDiscounts[id].shift()
        copyCoins[discountID - 1] -= discountPrice
        if (copyCoins[discountID - 1] < 0) copyCoins[discountID - 1] = 1
      }
    }
    min = Math.min(min, price)
  }
  console.log(min)
  return min
}

// let input = `4
// 10 15 20 25
// 2
// 3 10
// 2 20
// 0
// 1
// 4 10
// 1
// 1 10`

// solution(input)
