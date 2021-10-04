const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `1 0 1
1 1 0
1 0 1`.split('\n')

const city = input.map(s => s.split(' ').map(Number))

console.log(sol(city))

function sol (graph) {
  const len = graph.length
  let minResult = Array.from(Array(len), () => Array(len).fill(len))
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (graph[i][j] === 0) {
        minResult[i][j] = 0
        let curResult = bfs(i, j)
        for (let r = 0; r < graph.length; r++) {
          for (let c = 0; c < graph.length; c++) {
            // curResult[r][c]가 방문할 수 없어서 0인 경우 제외
            if (curResult[r][c] !== 0) {
              minResult[r][c] = Math.min(minResult[r][c], curResult[r][c])
            }
          }
        }
      }
    }
  }
  return minResult

  function bfs (x, y) {
    let visited = Array.from(Array(len), () => Array(len).fill(0))
    const q = [[x, y]]
    const dx = [0, 0, 1, -1]
    const dy = [1, -1, 0, 0]
    while (q.length > 0) {
      const [cx, cy] = q.pop()
      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i]
        const ny = cy + dy[i]
        if (
          nx < 0 ||
          ny < 0 ||
          nx >= graph.length ||
          ny >= graph.length ||
          visited[nx][ny] > 0 ||
          graph[nx][ny] === 0
        ) {
          continue
        }
        if (graph[nx][ny] === 1) {
          visited[nx][ny] = visited[cx][cy] + 1
          q.push([nx, ny])
        }
      }
    }
    return visited
  }
}

// 이슈
// 이차원 배열 선언하는 두 방식 중, 위의 방법에서 fill 내부 Array()는 동일 참조로 인식된다.
// 즉, 내부 배열의 한 값을 수정하면, 다른 행의 배열에도 같이 수정됨
// 따라서,fill은 값만 넣고, Array.from을 사용하는 것을 권장

// (X) let visited = Array(graph.length).fill(Array(graph.length).fill(0))
// (O) let visited = Array.from(Array(len), () => Array(len).fill(0))

// 닫힌 Test Case
// 1 0 1
// 1 1 0
// 1 0 1

// result
// 1 0 1
// 2 1 0
// 1 0 1
