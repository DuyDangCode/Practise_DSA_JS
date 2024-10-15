/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function (times, targetFriend) {
  for (let i = 0; i < times.length; i++) {
    times[i].push(-1)
    times[i].push(i)
  }

  times.sort((a, b) => a[0] - b[0])
  // console.log(times)
  times[0][2] = 0
  if (targetFriend === times[0][3]) return times[0][2]
  let currentChair = 1
  // console.log('oke')
  for (let i = 1; i < times.length; i++) {
    let temp = times[0]
    for (let j = i - 1; j >= 0; j--) {
      if (times[i][0] >= times[j][1] && times[j][2] != -1) {
        if (times[j][1] === temp[1]) {
          temp = times[j][2] < temp[2] ? times[j] : temp
        }
        if (times[j][2] < temp[2] || temp[1] > times[i][0] || temp[2] === -1) {
          temp = times[j]
        }
      }
    }
    if (temp[1] <= times[i][0] && temp[2] != -1) {
      times[i][2] = temp[2]
      temp[2] = -1
    } else {
      times[i][2] = currentChair
      currentChair++
    }
    console.log(times)
    if (times[i][3] === targetFriend) {
      return times[i][2]
    }
  }
}

// console.log(
//   smallestChair(
//     [
//       [3, 10],
//       [1, 5],
//       [2, 6],
//     ],
//     0,
//   ),
// )
// console.log(
//   smallestChair(
//     [
//       [1, 5],
//       [2, 5],
//       [3, 5],
//       [4, 6],
//       [5, 6],
//     ],
//     3,
//   ),
// )

console.log(
  smallestChair(
    [
      [33889, 98676],
      [80071, 89737],
      [44118, 52565],
      [52992, 84310],
      [78492, 88209],
      [21695, 67063],
      [84622, 95452],
      [98048, 98856],
      [98411, 99433],
      [55333, 56548],
      [65375, 88566],
      [55011, 62821],
      [48548, 48656],
      [87396, 94825],
      [55273, 81868],
      [75629, 91467],
    ],
    6,
  ),
)
