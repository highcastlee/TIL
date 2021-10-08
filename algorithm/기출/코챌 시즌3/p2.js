//정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.
//
//n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
//i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
//1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
//1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
//새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
//정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.

// 조건
// n의 크기가 최대 10^9으로 매우 클 수 있다.

// 해결책
// 직접 배열을 만드는 방법은 메모리 초과 발생 가능성이 있다.
// 직접 배열을 만들어 찾는 방법 외에 추출하고자하는 배열 일부분만 따로 만들어야함.
// left와 right로 필요한 부분의 배열만 따로 계산할 수 있다.

function solution (n, left, right) {
  let r1 = parseInt(left / n)
  let c1 = left % n
  let r2 = parseInt(right / n)
  let c2 = right % n

  let result = []
  if (r2 - r1 === 0) {
    for (let c = 1 + c1; c <= c2 + 1; c++) {
      result.push(1 + r1 < c ? c : 1 + r1)
    }
    return result
  }
  for (let c = 1 + c1; c < n + 1; c++) {
    result.push(1 + r1 < c ? c : 1 + r1)
  }
  if (r2 - r1 > 1) {
    for (let r = 2 + r1; r < 1 + r2; r++) {
      for (let c = 1; c < n + 1; c++) {
        result.push(r < c ? c : r)
      }
    }
  }
  for (let c = 1; c <= 1 + c2; c++) {
    result.push(1 + r2 < c ? c : 1 + r2)
  }
  return result
}
