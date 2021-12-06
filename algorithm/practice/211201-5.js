function solution (p, s) {
  const replaced = '^' + p.replace(/\?/g, '.').replace(/\*+/g, '.{0,}') + '$'
  const regExp = new RegExp(replaced, 'g')

  console.log(
    s.filter(str => {
      return str.match(regExp)
    }).length
  )
}

const p = 'xy?'
const s = ['axy', 'axyz', 'xy', 'xyz']

solution(p, s)
