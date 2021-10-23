let input = `5 3
9 19 15 3 11 10 18 4 14 12
7 20 19 11 3 9 18 8
6 12 16 11 19 14 2
10 1 10 4 3 8 20 18 12 14 13
8 14 15 10 2 9 5 16 13`.split('\n')

let [n, m] = input.shift().split(' ')
let data = input.map(arr => arr.split(' '))

solution(n, m, data)

function solution (numOfRegion, numOfFrequency, graph) {
  let hash = {}
  graph.forEach(arr => {
    let set = new Set(arr)
    ;[...set].forEach(v => {
      if (!hash[v]) hash[v] = 1
      else hash[v] += 1
    })
  })
  let countArr = Object.values(hash).sort((x, y) => y - x)
  let answer = 0
  for (let i = 0; i < numOfFrequency; i++) {
    answer += countArr[i]
  }
  console.log(answer)
  return answer
}
