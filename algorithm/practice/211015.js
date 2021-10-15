const input = 50

solution(input)

function solution (n) {
  let table = {}
  table[1] = 1
  table[2] = 2
  function dp (num) {
    if (table[num]) return table[num]
    table[num] = dp(num - 1) + dp(num - 2)
    return table[num]
  }
  dp(n)
  console.log(table[n])
  return table[n]
}
