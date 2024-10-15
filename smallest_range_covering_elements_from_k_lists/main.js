/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  let len = nums.length
  if (len == 1) return [nums[0][0], nums[0][0]]

  let result = [0, Infinity]
  let arr = nums
    .flatMap((item, index) => item.map((subItem) => [subItem, index]))
    .sort((a, b) => a[0] - b[0])
  const newMap = new Map()
  const arr2 = arr
  let len2 = arr.length
  for (let i = 0; i < arr.length; i++) {
    newMap.has(arr[i][0])
      ? newMap.set(arr[i][0], [...newMap.get(arr[i][0]), arr[i][1]])
      : newMap.set(arr[i][0], [arr[i][1]])
  }
  arr = Array.from(newMap)

  if (len2 == arr.length) {
    Loop1: for (let i = 0; i <= arr2.length - len; i++) {
      if (arr2[i][1] == arr2[i + 1][1]) continue Loop1

      let setTemp = new Set()
      let j = i
      while (true) {
        setTemp.add(arr2[j][1])
        j++
        if (setTemp.size == len) break
        if (
          j == arr2.length ||
          arr2[j][0] - arr2[i][0] >= result[1] - result[0]
        )
          continue Loop1
      }
      j--
      if (arr[j][0] - arr[i][0] < result[1] - result[0]) {
        result[0] = arr[i][0]
        result[1] = arr[j][0]
      }
    }
    return result
  }

  Loop1: for (let i = 0; i < arr.length; i++) {
    let setTemp = new Set()
    let j = i
    while (true) {
      setTemp = new Set([...setTemp, ...arr[j][1]])
      j++
      if (setTemp.size == len) break
      if (j == arr.length || arr[j][0] - arr[i][0] >= result[1] - result[0])
        continue Loop1
    }
    j--
    if (arr[j][0] - arr[i][0] < result[1] - result[0]) {
      result[0] = arr[i][0]
      result[1] = arr[j][0]
    }
  }

  return result
}
