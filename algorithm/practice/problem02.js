// 배열 합 및 최대값 구하기

function solution (arr) {
  function sumArr (arr2) {
    return arr2.reduce((acc, cur) => acc + cur)
  }
  let result = sumArr(arr)

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      result = Math.max(sumArr(arr.slice(j, j + i + 1)), result)
    }
  }
  console.log(result)
  return result
}
