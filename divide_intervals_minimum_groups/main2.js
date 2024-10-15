var minGroups = function (intervals) {
  return (
    intervals
      .flatMap((item) => [
        [item[0], 1],
        [item[1] + 1, -1],
      ])
      .sort((a, b) => a[0] - b[0] || a[1] - b[1])
      .reduce(
        (result, value) => {
          result[0] += value[1]
          result[1] < result[0] && (result[1] = result[0])
          console.log(result)
          return result
        },
        [0, 0],
      )[1] || 1
  )
}

console.log(minGroups([[1, 1]]))
