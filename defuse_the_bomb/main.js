/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  return code.map((value, index) => {
    let i = 0
    return Array(Math.abs(k))
      .fill(0)
      .reduce((res) => {
        i++
        let pos = index + (k >= 0 ? i : -i)
        if (pos >= code.length) pos = pos - code.length
        else if (pos < 0) pos = code.length + pos
        return res + code[pos]
      }, 0)
  })
}

console.log(decrypt([1, 2, 3], 0))
console.log(decrypt([5, 7, 1, 4], 3))
console.log(decrypt([2, 4, 9, 3], -2))
