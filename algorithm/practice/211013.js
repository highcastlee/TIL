function solution (n) {
  let answer = 0
  let binaryStore = {}
  for (let i = n; i >= 0; i--) {
    answer += getBinary(i)
  }
  console.log(answer)
  return answer

  function getBinary (n) {
    if (binaryStore[String(n)] !== undefined) {
      return binaryStore[String(n)]
    }

    let sum = 0
    let left = 0
    let copy = n

    while (copy) {
      left = copy % 2
      if (left === 1) sum++
      copy = Math.floor(copy / 2)
    }

    binaryStore[String(n)] = sum
    return sum
  }
}
