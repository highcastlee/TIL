const data = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function rotate(matrix) {
  let newMatrix = [];

  for (let c = 0; c < matrix[0].length; c++) {
    const newCol = [];
    for (let r = matrix.length - 1; r >= 0; r--) {
      newCol.push(matrix[r][c]);
    }
    newMatrix[c] = newCol;
  }
  console.log(newMatrix);
  return newMatrix;
}

function sideRotate(matrix) {
  let minRow = 0,
    minCol = 0,
    maxRow = matrix.length - 1,
    maxCol = matrix[0].length - 1;
  const newMatrix = matrix.map((row) => [...row]);

  for (let r = 0; r <= maxRow; r++) {
    for (let c = 0; c <= maxCol; c++) {
      if (r > 0 && r < maxRow && c > 0 && c < maxCol) continue;
      if (r === minRow && c !== maxCol) {
        newMatrix[r][c + 1] = matrix[r][c];
      } else if (r === maxRow && c !== minCol) {
        newMatrix[r][c - 1] = matrix[r][c];
      } else if (r !== maxRow && c === maxCol) {
        newMatrix[r + 1][c] = matrix[r][c];
      } else if (r !== minRow && c === minCol) {
        newMatrix[r - 1][c] = matrix[r][c];
      }
    }
  }
  console.log(newMatrix);
  return newMatrix;
}

rotate(data);
sideRotate(data);
