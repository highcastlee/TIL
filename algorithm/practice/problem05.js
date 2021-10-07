// 문자열 숫자 중 가장 많이 나온 수 반환
// 중복 횟수 체크 후 가장 많이 나온 수 반환

function solution (s) {
  let store = {}
  let maxNum = 0
  let arr = s.split('')
  for (let i of arr) {
    if (store[String(i)]) {
      store[String(i)] += 1
    } else {
      store[String(i)] = 1
    }
  }
  for (let key in store) {
    let num = Math.max(store[key], maxNum)
    if (maxNum < num) {
      result = Number(key)
      maxNum = num
    }
  }
  console.log(result)
  return result
}
