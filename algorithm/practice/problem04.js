// n 이하의 수 중 연속 합이 n이 되는 경우의 수
// n의 중간 값 이하로 연속된 합 체크

function solution (num) {
  let half = Math.ceil(num / 2)
  let count = 1
  for (let start = half; start > 0; start--) {
    let sum = start
    for (let j = 1; j < start; j++) {
      sum += start - j
      if (sum === num) {
        count += 1
        break
      }
      if (sum > num) {
        break
      }
    }
  }
  console.log(count)
  return count
}
