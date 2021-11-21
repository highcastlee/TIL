// function solution (new_id) {
//   const regExp = /[a-z\d-_.]/g
//   let id = new_id
//     .toLowerCase()
//     .match(regExp)
//     .filter((str, idx, origin) => {
//       if (str == '.' && origin[idx - 1] == '.') return false
//       return true
//     })
//   while (id[0] == '.') id.shift()
//   while (id[id.length - 1] == '.') id.pop()
//   if (id.length == 0) id = ['a']
//   if (id.length >= 16) id.splice(15)
//   while (id[id.length - 1] == '.') id.pop()
//   if (id.length <= 2) {
//     while (id.length < 3) id.push(id[id.length - 1])
//   }
//   return id.join('')
// }

function solution (new_id) {
  return new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .match(/^.{0,14}[^.]/)[0]
    .replace(/^(.)$/, '$1$1$1')
    .replace(/^(.)(.)$/, '$1$2$2')
}
