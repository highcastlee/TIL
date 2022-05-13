const fs = require('fs')
const { off } = require('process')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `8
71 39 44
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
60 66 19`.split('\n')

function solution (N, nums) {
  const graph = nums.map(v => [...v])
  for (let i = 1; i < N; i++) {
    graph[i][0] += Math.min(graph[i - 1][1], graph[i - 1][2])
    graph[i][1] += Math.min(graph[i - 1][0], graph[i - 1][2])
    graph[i][2] += Math.min(graph[i - 1][0], graph[i - 1][1])
  }
  console.log(Math.min(...graph[N - 1]))
  return Math.min(...graph[N - 1])
}

const N = +input[0]
const nums = input.slice(1).map(v => v.split(' ').map(Number))
solution(N, nums)
