function diffDays (from, to) {
  return Math.abs(from - to) / (24 * 60 * 60 * 1000)
}

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))) // => 364
