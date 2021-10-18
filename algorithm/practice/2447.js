const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input
rl.on('line', function (line) {
  input = parseInt(line) // 입력 값이 정수라면 parseInt로 형변환
  rl.close()
}).on('close', function () {
  solution(input)
  process.exit()
})

function solution (n) {
  function star (n, mat, x, y) {
    if (n === 1) {
      mat[y][x] = '*'
      return
    }
    let size = Math.floor(n / 3)
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        if (i == 1 && j == 1) continue
        star(size, mat, x + i * size, y + j * size)
      }
    }
  }
  let mat = new Array(n).fill(0).map(() => new Array(n).fill(' '))
  star(n, mat, 0, 0)

  for (let i = 0; i < n; i++) {
    console.log(mat[i].join(''))
  }
}

// // solution(input)
// console.log(input)
