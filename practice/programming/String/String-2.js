// 1) 모든 대문자를 소문자로 변환
// 2) 영문,숫자,_,-,. 제외 나머지 삭제
// 3) 마침표 1개 이상 모두 1개로 치환
// 4) .으로 시작하거나 .으로 끝나는 부분 삭제
// 5) 빈 문자열이면 'a'로 치환
// 6) 시작부터 15개까지 모든 문자 연속 + 마지막이 마침표가 아닌 것

// 7) 매치된 부분 문자열이 최소 크기(MIN_LENGTH) 미만일 때, 마지막 문자로 최소 크기가 될 때까지 반복

function solution (new_id) {
  const MIN_LENGTH = 3
  let id = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .match(/^.{0,14}[^.]/)[0]
  const idLength = id.length

  return idLength >= MIN_LENGTH
    ? id
    : id + id[idLength - 1].repeat(MIN_LENGTH - idLength)
}
