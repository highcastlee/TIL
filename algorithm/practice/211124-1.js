function solution (puzzle, word) {
  function copyArr (arr) {
    return arr.map(inner => [...inner])
  }
  function dfs (graph, row, col, word, findWord, visited) {
    if (word.length === findWord.length && word == findWord) return true
    if (word.length >= findWord.length) return false
    if (row >= 4 || row < 0 || col >= 4 || col < 0 || visited[row][col])
      return false
    visited[row][col] = true
    word += graph[row][col]
    return (
      dfs(graph, row + 1, col, word, findWord, copyArr(visited)) ||
      dfs(graph, row, col + 1, word, findWord, copyArr(visited)) ||
      dfs(graph, row - 1, col, word, findWord, copyArr(visited)) ||
      dfs(graph, row, col - 1, word, findWord, copyArr(visited))
    )
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (puzzle[i][j] === word[0]) {
        const visited = new Array(4).fill(0).map(v => new Array(4).fill(false))
        if (dfs(puzzle, i, j, '', word, visited)) return true
      }
    }
  }
  return false
}

const input = [
  ['헬', '나', '삵', '사'],
  ['로', '키', '랑', '세'],
  ['숭', '티', '리', '움'],
  ['니', '농', '카', '타']
]
const word = '헬로키티'
console.log(solution(input, word))
