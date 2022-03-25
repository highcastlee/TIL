function solution (record) {
  const records = record.map(s => s.split(' '))
  const FQ = [],
    LQ = []
  let FIFO = 0,
    LIFO = 0
  for (const [command, money, count] of records) {
    if (command === 'P') {
      FQ.push([money, count])
      LQ.push([money, count])
    } else {
      // FIFO
      let FCount = count
      while (FQ[0][1] - FCount < 0) {
        FCount = FCount - FQ[0][1]
        FIFO += FQ[0][0] * FQ[0][1]
        FQ.shift()
      }
      FIFO += FQ[0][0] * FCount
      FQ[0][1] = FQ[0][1] - FCount
      if (FQ[0][1] === 0) FQ.shift()

      //LIFO
      let LCount = count
      while (LQ[LQ.length - 1][1] - LCount < 0) {
        LCount = LCount - LQ[LQ.length - 1][1]
        LIFO += LQ[LQ.length - 1][0] * LQ[LQ.length - 1][1]
        LQ.pop()
      }
      LIFO += LQ[LQ.length - 1][0] * LCount
      LQ[LQ.length - 1][1] = LQ[LQ.length - 1][1] - LCount
      if (LQ[LQ.length - 1][1] === 0) LQ.pop()
    }
  }
  return [FIFO, LIFO]
}

const problem = [
  ['P 300 6', 'P 500 3', 'S 1000 4', 'P 600 2', 'S 1200 1'],
  ['P 300 6', 'P 500 3', 'S 1000 4', 'P 600 1', 'S 1200 2'],
  ['P 100 4', 'P 300 9', 'S 1000 7', 'P 1000 8', 'S 700 7', 'S 700 3']
]

problem.forEach(p => {
  console.log(solution(p))
})

// [1500, 2400]
// [1800, 2700]
// [7100, 10700]
