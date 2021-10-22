let input1 = 4
let input2 = `0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0`

solution(input1, input2)

function solution (n, matrix) {
  let graph = matrix.split('\n').map(arr => arr.split(' '))
  let visited = new Array(n).fill(false).map(() => new Array(n).fill(false))
  function bfs (x, y) {
    let dx = [0, 0, 1, -1]
    let dy = [1, -1, 0, 0]
    visited[y][x] = true
    let q = [[x, y]]
    let size = 1
    while (q.length !== 0) {
      let [c, r] = q.shift()
      for (let i = 0; i < 4; i++) {
        let nr = r + dy[i]
        let nc = c + dx[i]
        if (
          nr < 0 ||
          nc < 0 ||
          nr >= n ||
          nc >= n ||
          visited[nr][nc] ||
          graph[nr][nc] == 0
        ) {
          continue
        }
        visited[nr][nc] = true
        q.push([nc, nr])
        size++
      }
    }
    return size
  }
  let size = []
  let count = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] == 1 && visited[i][j] == false) {
        size.push(bfs(j, i))
        count++
      }
    }
  }
  size.sort()
  if (count === 0) {
    console.log(`${count}`)
    return 0
  }
  return `${count}\n${size.join(' ')}`
}
