const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]

const getMaxId = todos => {
  const INITIAL_ID = 0
  return todos.reduce(
    (maxId, todo) => (todo.id > maxId ? todo.id : maxId),
    INITIAL_ID
  )
}

console.log(getMaxId(todos)) // 3
console.log(getMaxId([])) // 0
