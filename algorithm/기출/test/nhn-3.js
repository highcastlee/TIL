let input = `3
5 7
2 6
2 1`.split('\n')

let n = Number(input.shift())
let data = input.map(str => str.split(' '))

solution(n, data)

function solution (n, data) {
  let hash = { '0': [] }
  let nums = [1, 2, 3, 4, 5, 6, 7, 8]
  nums.forEach(v => (hash[v] = []))

  data.forEach(arr => {
    if (!hash[arr[0]].includes(arr[1])) {
      hash[arr[0]].push(Number(arr[1]))
    }
    if (!hash[arr[1]].includes(arr[0])) {
      hash[arr[1]].push(Number(arr[0]))
    }
  })

  let answer = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
  let permutation = []
  let visited = new Array(n + 1)
  const getPermutations = () => {
    if (permutation.length == 8) {
      if (permutation.includes(false)) {
        answer -= 1
      }
      return
    }
    for (let i = 1; i <= 8; ++i) {
      if (visited[i]) {
        continue
      }
      visited[i] = true
      let before = permutation[permutation.length - 1]
        ? permutation[permutation.length - 1]
        : 0
      if (before && hash[`${before}`].includes(i)) permutation.push(false)
      else permutation.push(i)
      getPermutations()
      visited[i] = false
      permutation.pop()
    }
  }

  getPermutations()
  console.log(answer)
}
