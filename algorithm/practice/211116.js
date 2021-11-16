/**
 * 애너그램(해쉬맵)
 * Anagram이란 두 문자열이 알파벳의 나열 순서는 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
 * 예를 들면 AbaAeCe와 baeeACA는 알파벳 나열 순서는 다르지만
 * 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
 * 즉 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
 * 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요.
 * 아나그램 판별시 대소문자가 구분됩니다.
 *
 * ('AbaAeCe', 'baeeACA') => true
 * ('abaCC', 'Caaab') => fase
 */

// 애너그램 판별: 문자열을 구성하는 각 문자의 갯수가 일치하면 애너그램이다.

function hashOfCount (word) {
  return [...word].reduce((hash, key) => {
    hash[key] = (hash[key] || 0) + 1
    return hash
  }, {})
}

function isAnagram (firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) return false

  const [hashOfFirstWord, hashOfSecondWord] = [
    hashOfCount(firstWord),
    hashOfCount(secondWord)
  ]
  return Object.keys(hashOfFirstWord).every(
    alpha => hashOfSecondWord[alpha] === hashOfFirstWord[alpha]
  )
}

const wordLists = [
  ['AbaAeCe', 'baeeACA'],
  ['ab', 'abC'],
  ['', 'a']
]

wordLists.forEach(problem => console.log(isAnagram(problem[0], problem[1])))
