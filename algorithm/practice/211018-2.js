let input = '101'

solution(input)

function solution (str) {
  let strArr = str.split('')
  let store = []
  for (let i = 0; i < 10; i++) {
    store[i] = { index: i, count: 0 }
  }
  for (let s of strArr) store[s].count += 1
  let sorted = store.sort((arr1, arr2) => {
    return arr2.count - arr1.count
  })
  let answer = []
  for (let obj of sorted) {
    answer.push(obj.index)
  }
  console.log(answer.join(' '))
  return answer
}
