function solution (input) {
  function quickSort (array, left = 0, right = array.length - 1, idx) {
    if (left >= right) {
      return
    }
    const mid = Math.floor((left + right) / 2)
    const pivotArr = array[mid]
    const partition = divide(array, left, right, pivotArr, idx)
    quickSort(array, left, partition - 1, idx)
    quickSort(array, partition, right, idx)

    function divide (array, left, right, pivotArr, idx) {
      while (left <= right) {
        while (array[left][idx] < pivotArr[idx]) {
          left++
        }
        while (array[right][idx] > pivotArr[idx]) {
          right--
        }
        if (left <= right) {
          let swap = [...array[left]]
          array[left] = [...array[right]]
          array[right] = swap
          left++
          right--
        }
      }
      return left
    }
    return array
  }

  console.log(quickSort(input, 0, input.length - 1, 0).map(v => v[0]))
  console.log(quickSort(input, 0, input.length - 1, 1).map(v => v[0]))
  console.log(
    quickSort(input, 0, input.length - 1, 2)
      .map(v => v[0])
      .reverse()
  )
}

const TC = [
  [51, 'a', 11],
  [56, 'aa', 382],
  [17, 'ab', 6]
]

solution(TC)

const result = [
  [17, 51, 56],
  [51, 56, 17],
  [56, 51, 17]
]
