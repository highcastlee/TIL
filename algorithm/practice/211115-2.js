const input = [
  [
    [
      [1, 0, 1],
      [0, 0, 1],
      [0, 1, 1]
    ],
    2
  ],
  [
    [
      [0, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0]
    ],
    3
  ],
  [
    [
      [1, 1, 0, 0, 1],
      [0, 1, 1, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [1, 0, 1, 1, 0]
    ],
    3
  ],
  [[[0]], 1],
  [[[1]], 1],
  [
    [
      [0, 0, 0, 1, 1, 0, 0],
      [1, 1, 0, 0, 0, 1, 0],
      [1, 0, 1, 0, 0, 1, 0],
      [0, 1, 0, 1, 1, 1, 0]
    ],
    3
  ]
]

for (let testCase of input) {
  const [field, n] = testCase
  getMaxCountOfGraph(field, n)
}

function getMaxCountOfGraph (field, n) {
  function countPlants (graph, r, c, n) {
    let count = 0
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!(r + i < graph.length && c + j < graph.length)) break
        if (graph[r + i][c + j]) count += 1
      }
    }
    return count
  }
  let answer = 0
  for (let i = 0; i <= field.length - n; i++) {
    for (let j = 0; j <= field.length - n; j++) {
      answer = Math.max(countPlants(field, i, j, n), answer)
    }
  }
  console.log(answer)
  return answer
}
