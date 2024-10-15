function fibonacciString(n) {
  const c = [' ', '│', '─', '┌', '┐', '┘', '└', '┤', '├', '┴', '┬', '\n']
  let result = drawSquare(1, c)

  let f1 = 1
  let f2 = 1

  let j = 1
  for (let i = 0; i < n; i++) {
    if (j > 4) j = 1
    let newSquare = drawSquare(f2, c)
    //right
    if (j == 1) {
      for (let ii = 0; ii < result.length; ii++) {
        let jj = result[ii].length - 1
        if (result[ii][jj] == c[4]) {
          result[ii][jj] = c[10]
        } else if (result[ii][jj] == c[5]) {
          result[ii][jj] = c[9]
        }
        newSquare[ii].shift()
        result[ii] = result[ii].concat(newSquare[ii])
      }
    }
    //top
    if (j == 2) {
      result[0][0] = c[8]
      result[0][result[0].length - 1] = c[7]
      newSquare.pop()
      result = newSquare.concat(result)
    }
    //left
    if (j == 3) {
      for (let ii = 0; ii < result.length; ii++) {
        let jj = 0
        if (result[ii][jj] == c[3]) {
          result[ii][jj] = c[10]
        } else if (result[ii][jj] == c[6]) {
          result[ii][jj] = c[9]
        }
        newSquare[ii].pop()
        result[ii] = newSquare[ii].concat(result[ii])
      }
    }
    //bottom
    if (j == 4) {
      let mih = result.length - 1
      result[mih][0] = c[8]
      result[mih][result[0].length - 1] = c[7]
      newSquare.shift()
      result = result.concat(newSquare)
    }

    j++
    let temp = f2
    f2 = f1 + f2
    f1 = temp
  }

  let resultString = ''
  for (let i = 0; i < result.length; i++) {
    resultString += result[i].join('')
    if (i != result.length - 1) {
      resultString += '\n'
    }
  }
  console.log(resultString)

  return resultString
}
function drawSquare(m, c) {
  let wide = 2 * m + 1
  let height = m + 1
  let result = []
  let maxIndexHeight = height - 1
  let maxIndexWide = wide - 1

  for (let i = 0; i < height; i++) {
    result[i] = []
    for (let j = 0; j < wide; j++) {
      if (i == 0) {
        if (j == 0) result[i].push(c[3])
        else if (j == maxIndexWide) result[i].push(c[4])
      }
      if (i == maxIndexHeight) {
        if (j == 0) result[i].push(c[6])
        else if (j == maxIndexWide) result[i].push(c[5])
      }
      if (i != 0 && i != maxIndexHeight && (j == 0 || j == maxIndexWide))
        result[i].push(c[1])

      if ((i == 0 || i == maxIndexHeight) && j != 0 && j != maxIndexWide)
        result[i].push(c[2])
      if (j != 0 && j != maxIndexWide && i != 0 && i != maxIndexHeight)
        result[i].push(c[0])
    }
  }
  return result
}

// fibonacciString(0)
// fibonacciString(1)
// fibonacciString(2)
// fibonacciString(3)
// fibonacciString(4)
fibonacciString(8)
