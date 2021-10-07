// 배열 내 요소 카운팅

function solution (arr) {
  if (arr.length % 2 === 0) {
    console.log(0)
    return 0
  }
  let store = {}
  for (let i of arr) {
    if (store[String(i)]) {
      store[String(i)] += 1
    } else {
      store[String(i)] = 1
    }
  }
  for (let key in store) {
    if (store[key] < 2) {
      console.log(Number(key))
      return Number(key)
    }
  }
  return 0
}
