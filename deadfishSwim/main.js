// Return the output array, and ignore all non-op characters
function parse(data) {
  return data
    .split('')
    .reduce(
      (result, value) => {
        ;(value === 'i' && result[0]++) ||
          (value === 'd' && result[0]--) ||
          (value === 's' && (result[0] = Math.pow(result[0], 2))) ||
          (value === 'o' && result.push(result[0]))
        return result
      },
      [0],
    )
    .slice(1)
}

console.log(parse('diiisdoso'))
