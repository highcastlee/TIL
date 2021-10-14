// const input1 = ['혁준', '히밥', '양상', '심심이', '소스왕']
// const input2 = ['혁준', '양상']
// const input3 = ['소스왕', '심심이']

// solution(input1, input2, input3)

function solution (bj, one, two) {
  let n = bj.length
  let money = 150
  let price = 0
  let winner
  let table = {}
  bj.forEach(v => (table[v] = 3))
  one.forEach(v => (table[v] = 1))
  two.forEach(v => (table[v] = 2))

  bj.forEach(v => {
    price += table[v] * money
    if (table[v] === 3) winner = v
  })
  console.log(`${price}만원(${winner})`)
  return `${price}만원(${winner})`
}
