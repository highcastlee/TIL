let input1 = 10
let input2 = 5

solution(input1, input2)

function solution (h, w) {
  let graph = new Array(h).fill(0).map(() => new Array(w).fill(1))
  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      graph[i][j] = graph[i - 1][j] + graph[i][j - 1]
    }
  }
  console.log(graph[h - 1][w - 1])
  return graph[h - 1][w - 1]
}
