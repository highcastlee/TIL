input = [
  [931],
  [523, 897],
  [487, 585, 858],
  [297, 864, 125, 268],
  [617, 231, 88, 708, 822],
  [500, 605, 302, 934, 696, 688],
  [529, 419, 339, 384, 649, 605, 392],
  [474, 190, 990, 379, 110, 269, 827, 378],
  [126, 682, 110, 771, 532, 962, 146, 2, 323],
  [761, 323, 451, 405, 793, 976, 532, 91, 513, 204]
]
solution(input)

function solution (arr) {
  let answer = 0
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j == 0) arr[i][j] += arr[i - 1][j]
      else if (j == arr[i].length - 1) arr[i][j] += arr[i - 1][j - 1]
      else arr[i][j] += Math.max(arr[i - 1][j - 1], arr[i - 1][j])
    }
  }
  answer = Math.max(...arr[arr.length - 1])
  console.log(answer)
  return answer
}
