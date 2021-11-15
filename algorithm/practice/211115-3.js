const input = [
  0,
  1,
  2,
  3,
  11,
  513,
  65537,
  524289,
  8388609,
  67108865,
  1000000000
]

for (let testCase of input) {
  solution(testCase)
}

function solution (n) {
  const binary = n.toString(2)
  let maxDistance = 0
  let beforeIndex = 0
  for (let currentIndex = 0; currentIndex < binary.length; currentIndex++) {
    if (binary[currentIndex] == '1') {
      maxDistance = Math.max(maxDistance, currentIndex - beforeIndex)
      beforeIndex = currentIndex
    }
  }
  console.log(binary, maxDistance)
  return maxDistance
}
