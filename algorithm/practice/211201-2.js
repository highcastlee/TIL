function solution (input) {
  const nodes = new Array(input).fill(0).map((_, i) => 2 ** i)
  const maxDepth = Math.max(...nodes)
  nodes.map(depth => {
    const spaceCount = Math.round((maxDepth - depth) / (depth + 1))
    const answer =
      ' '.repeat(spaceCount) +
      [...'*'.repeat(depth)].join(' '.repeat(spaceCount)) +
      ' '.repeat(spaceCount)
    console.log(answer.slice(0, maxDepth))
  })
}

const input = 6

solution(input)
