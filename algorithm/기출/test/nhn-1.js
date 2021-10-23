const input1 = 9
const input2 = `branch
branch
branch
branch
branch
merge 5
merge 2
branch
merge 3`.split('\n')

let input3 = input2.map(s => {
  if (s !== 'branch') return s.split(' ')
  else return s
})

solution(input1, input3)

function solution (numOfOperation, operations) {
  let branches = [1]
  let countNum = 2
  let mergedNums = []

  for (let oper of operations) {
    if (oper !== 'branch') {
      mergedNums.push(Number(oper[1]))
      mergedNums.sort((x, y) => x - y)
      branches.splice(branches.indexOf(Number(oper[1])), 1)
      continue
    }
    if (mergedNums.length > 0) {
      branches.push(mergedNums.shift())
      continue
    }
    branches.push(countNum++)
  }
  console.log(branches.sort((x, y) => x - y))
  return branches
}
