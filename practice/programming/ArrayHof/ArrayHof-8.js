const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]

const countCompletedTodos = todos => {
  const INITIAL_COUNT = 0
  return todos.reduce(
    (count, todo) => (todo.completed ? count + 1 : count),
    INITIAL_COUNT
  )
}

console.log(countCompletedTodos(todos)) // 1
